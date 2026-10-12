"use client";

import { useEffect, useRef, useState } from "react";
import { Sphere } from "./sphere";
import { cn } from "@/lib/cn";

/**
 * Dot sphere in raw WebGL2: latitude rings of dots whose surface "breathes" with 3D noise, plus
 * ripples that spread from wherever the pointer touches it, like a finger drawn through water.
 * The equator and a tilted orbit use the accent colour; everything else uses `currentColor`.
 * Falls back to the 2D canvas <Sphere> without WebGL2, renders one still frame with reduced
 * motion, pauses off-screen and caps the pixel ratio.
 */

const RINGS = 62;
const DOTS_ON_EQUATOR = 200;
const ORBIT_DOTS = 150;
const MAX_RIPPLES = 8;
const CAMERA_Z = 3.4;
const FOV = (45 * Math.PI) / 180;
const TILT = 0.42;

const VERTEX = /* glsl */ `#version 300 es
in vec3 aPos;
in float aKind; // 0 surface, 1 accent equator, 2 orbit
uniform mat4 uProj;
uniform mat3 uRot;
uniform float uPhase;
uniform float uPointSize;
uniform vec4 uRipples[${MAX_RIPPLES}]; // xyz: hit direction, w: age in seconds (< 0 = unused)
out float vAlpha;
out float vKind;

// 3D simplex noise, Ashima Arts / Stefan Gustavson (MIT).
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
	const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
	const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
	vec3 i = floor(v + dot(v, C.yyy));
	vec3 x0 = v - i + dot(i, C.xxx);
	vec3 g = step(x0.yzx, x0.xyz);
	vec3 l = 1.0 - g;
	vec3 i1 = min(g.xyz, l.zxy);
	vec3 i2 = max(g.xyz, l.zxy);
	vec3 x1 = x0 - i1 + C.xxx;
	vec3 x2 = x0 - i2 + C.yyy;
	vec3 x3 = x0 - D.yyy;
	i = mod289(i);
	vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
	float n_ = 0.142857142857;
	vec3 ns = n_ * D.wyz - D.xzx;
	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
	vec4 x_ = floor(j * ns.z);
	vec4 y_ = floor(j - 7.0 * x_);
	vec4 x = x_ * ns.x + ns.yyyy;
	vec4 y = y_ * ns.x + ns.yyyy;
	vec4 h = 1.0 - abs(x) - abs(y);
	vec4 b0 = vec4(x.xy, y.xy);
	vec4 b1 = vec4(x.zw, y.zw);
	vec4 s0 = floor(b0) * 2.0 + 1.0;
	vec4 s1 = floor(b1) * 2.0 + 1.0;
	vec4 sh = -step(h, vec4(0.0));
	vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
	vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
	vec3 p0 = vec3(a0.xy, h.x);
	vec3 p1 = vec3(a0.zw, h.y);
	vec3 p2 = vec3(a1.xy, h.z);
	vec3 p3 = vec3(a1.zw, h.w);
	vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
	p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
	vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
	m = m * m;
	return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p) {
	float sum = 0.0;
	float amp = 0.5;
	for (int i = 0; i < 3; i++) {
		sum += amp * snoise(p);
		p *= 2.1;
		amp *= 0.5;
	}
	return sum;
}

void main() {
	vec3 p = uRot * aPos;
	float n = 0.0;
	float wake = 0.0;

	if (aKind < 1.5) {
		n = fbm(aPos * 1.15 + vec3(0.0, 0.0, uPhase));
		for (int i = 0; i < ${MAX_RIPPLES}; i++) {
			vec4 r = uRipples[i];
			if (r.w < 0.0) continue;
			float d = acos(clamp(dot(normalize(p), r.xyz), -1.0, 1.0));
			float front = d - r.w * 0.6;
			float env = exp(-r.w / 1.1) * exp(-(front * front) / 0.07);
			wake += env * sin(front * 13.0);
		}
	}

	vec3 displaced = p * (1.0 + n * 0.09 + wake * 0.05);
	gl_Position = uProj * vec4(displaced.xy, displaced.z - ${CAMERA_Z.toFixed(2)}, 1.0);

	float facing = normalize(p).z;
	float front = smoothstep(-0.35, 1.0, facing);
	vAlpha = (0.08 + 0.92 * front * front) * (0.7 + 0.3 * (1.0 - abs(n) * 2.0)) + abs(wake) * 0.35;
	gl_PointSize = uPointSize * (0.45 + 0.75 * front) * (aKind > 0.5 ? 1.35 : 1.0);
	vKind = aKind;
}
`;

const FRAGMENT = /* glsl */ `#version 300 es
precision mediump float;
in float vAlpha;
in float vKind;
uniform vec3 uInk;
uniform vec3 uAccent;
out vec4 outColor;

void main() {
	vec2 c = gl_PointCoord - 0.5;
	float r2 = dot(c, c);
	if (r2 > 0.25) discard;
	float edge = 1.0 - smoothstep(0.16, 0.25, r2);
	vec3 color = vKind > 0.5 ? uAccent : uInk;
	float a = clamp(vAlpha, 0.0, 1.0) * edge;
	outColor = vec4(color * a, a);
}
`;

function buildGeometry() {
	const data: number[] = [];
	for (let i = 0; i < RINGS; i++) {
		const phi = Math.PI * (0.03 + (0.94 * i) / (RINGS - 1));
		const y = Math.cos(phi);
		const r = Math.sin(phi);
		const kind = Math.abs(i - (RINGS - 1) / 2) < 0.6 ? 1 : 0;
		const dots = Math.max(10, Math.round(DOTS_ON_EQUATOR * r));
		const offset = (i % 2) * 0.5;
		for (let j = 0; j < dots; j++) {
			const theta = ((j + offset) / dots) * Math.PI * 2;
			data.push(Math.cos(theta) * r, y, Math.sin(theta) * r, kind);
		}
	}
	// Tilted orbit around the sphere, sparse like a dashed line.
	const tilt = -0.42;
	for (let j = 0; j < ORBIT_DOTS; j++) {
		const theta = (j / ORBIT_DOTS) * Math.PI * 2;
		const x = Math.cos(theta) * 1.28;
		const z = Math.sin(theta) * 1.28;
		data.push(x * Math.cos(tilt), x * Math.sin(tilt) + z * 0.05, z, 2);
	}
	return new Float32Array(data);
}

function perspective(fov: number, aspect: number, near: number, far: number) {
	const f = 1 / Math.tan(fov / 2);
	const nf = 1 / (near - far);
	return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
}

/** Rotation around Y by `angle`, then a fixed tilt around X. Column-major for WebGL. */
function rotation(angle: number, tilt: number) {
	const ca = Math.cos(angle);
	const sa = Math.sin(angle);
	const ct = Math.cos(tilt);
	const st = Math.sin(tilt);
	return new Float32Array([ca, sa * st, -sa * ct, 0, ct, st, sa, -ca * st, ca * ct]);
}

const parser = typeof document !== "undefined" ? document.createElement("canvas").getContext("2d") : null;
function toRgb(color: string, fallback: [number, number, number]): [number, number, number] {
	if (!parser) return fallback;
	parser.fillStyle = "#000";
	parser.fillStyle = color;
	const hex = parser.fillStyle;
	if (!hex.startsWith("#") || hex.length !== 7) return fallback;
	return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255) as [number, number, number];
}

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("[wave-sphere]", gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}

export function WaveSphere({ className }: { className?: string }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [fallback, setFallback] = useState(false);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const gl = canvas.getContext("webgl2", { alpha: true, antialias: true, premultipliedAlpha: true });
		const vs = gl && compile(gl, gl.VERTEX_SHADER, VERTEX);
		const fs = gl && compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
		const program = gl && vs && fs ? gl.createProgram() : null;
		if (!gl || !vs || !fs || !program) {
			setFallback(true);
			return;
		}
		gl.attachShader(program, vs);
		gl.attachShader(program, fs);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			setFallback(true);
			return;
		}
		gl.useProgram(program);

		const geometry = buildGeometry();
		const count = geometry.length / 4;
		const buffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
		gl.bufferData(gl.ARRAY_BUFFER, geometry, gl.STATIC_DRAW);
		const aPos = gl.getAttribLocation(program, "aPos");
		const aKind = gl.getAttribLocation(program, "aKind");
		gl.enableVertexAttribArray(aPos);
		gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 16, 0);
		gl.enableVertexAttribArray(aKind);
		gl.vertexAttribPointer(aKind, 1, gl.FLOAT, false, 16, 12);

		const u = (name: string) => gl.getUniformLocation(program, name);
		const uProj = u("uProj");
		const uRot = u("uRot");
		const uPhase = u("uPhase");
		const uPointSize = u("uPointSize");
		const uRipples = u("uRipples");
		const uInk = u("uInk");
		const uAccent = u("uAccent");

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
		gl.uniformMatrix4fv(uProj, false, perspective(FOV, 1, 0.1, 10));

		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const ripples = new Float32Array(MAX_RIPPLES * 4).map((_, i) => (i % 4 === 3 ? -1 : 0));
		let nextRipple = 0;
		let lastHit: [number, number, number] | null = null;
		let phase = 0;
		let angle = 0.6;
		let size = 0;
		let visible = true;
		let raf = 0;
		let last = performance.now();

		const readColors = () => {
			const style = getComputedStyle(canvas);
			gl.uniform3fv(uInk, toRgb(style.color, [0.07, 0.07, 0.08]));
			gl.uniform3fv(uAccent, toRgb(style.getPropertyValue("--accent").trim(), [0.18, 0.23, 1]));
		};

		const resize = () => {
			size = canvas.clientWidth;
			// Cap the backing store: DPR 1.5 at most and never more than ~1.2 MP for this canvas.
			const dpr = Math.min(window.devicePixelRatio || 1, 1.5, 1100 / Math.max(size, 1));
			canvas.width = Math.round(size * dpr);
			canvas.height = Math.round(size * dpr);
			gl.viewport(0, 0, canvas.width, canvas.height);
			gl.uniform1f(uPointSize, Math.max(1.5, (canvas.width / 560) * 3.2));
		};

		const draw = () => {
			gl.uniformMatrix3fv(uRot, false, rotation(angle, TILT));
			gl.uniform1f(uPhase, phase);
			gl.uniform4fv(uRipples, ripples);
			gl.clearColor(0, 0, 0, 0);
			gl.clear(gl.COLOR_BUFFER_BIT);
			gl.drawArrays(gl.POINTS, 0, count);
		};

		const loop = (now: number) => {
			const dt = Math.min((now - last) / 1000, 0.1);
			last = now;
			phase += dt * 0.07;
			angle += dt * 0.06;
			for (let i = 0; i < MAX_RIPPLES; i++) {
				const age = i * 4 + 3;
				const current = ripples[age] ?? -1;
				if (current >= 0) ripples[age] = current > 5 ? -1 : current + dt;
			}
			draw();
			if (visible) raf = requestAnimationFrame(loop);
		};

		// Ray from the camera through the pointer, intersected with the unit sphere (view space).
		const onPointer = (e: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return;
			const t = Math.tan(FOV / 2);
			const dx = (((e.clientX - rect.left) / rect.width) * 2 - 1) * t;
			const dy = (1 - ((e.clientY - rect.top) / rect.height) * 2) * t;
			const len = Math.hypot(dx, dy, 1);
			const d = [dx / len, dy / len, -1 / len] as const;
			const b = d[2] * CAMERA_Z; // dot(d, -centre) with centre (0, 0, -CAMERA_Z)
			const disc = b * b - (CAMERA_Z * CAMERA_Z - 1);
			const s = disc >= 0 ? -b - Math.sqrt(disc) : -b;
			const hx = d[0] * s;
			const hy = d[1] * s;
			const hz = d[2] * s + CAMERA_Z;
			const hl = Math.hypot(hx, hy, hz) || 1;
			const hit: [number, number, number] = [hx / hl, hy / hl, hz / hl];
			if (lastHit && Math.acos(Math.min(1, hit[0] * lastHit[0] + hit[1] * lastHit[1] + hit[2] * lastHit[2])) < 0.14) return;
			lastHit = hit;
			ripples.set([...hit, 0], nextRipple * 4);
			nextRipple = (nextRipple + 1) % MAX_RIPPLES;
		};

		resize();
		readColors();
		draw();

		const resizeObserver = new ResizeObserver(() => {
			resize();
			draw();
		});
		resizeObserver.observe(canvas);

		const themeObserver = new MutationObserver(() => {
			readColors();
			draw();
		});
		themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

		const onVisibility = () => {
			last = performance.now();
		};

		let intersection: IntersectionObserver | undefined;
		if (!reduced) {
			window.addEventListener("pointermove", onPointer, { passive: true });
			document.addEventListener("visibilitychange", onVisibility);
			intersection = new IntersectionObserver(([entry]) => {
				const wasVisible = visible;
				visible = entry?.isIntersecting ?? false;
				if (visible && !wasVisible) {
					last = performance.now();
					raf = requestAnimationFrame(loop);
				}
			});
			intersection.observe(canvas);
			raf = requestAnimationFrame(loop);
		}

		return () => {
			cancelAnimationFrame(raf);
			resizeObserver.disconnect();
			themeObserver.disconnect();
			intersection?.disconnect();
			window.removeEventListener("pointermove", onPointer);
			document.removeEventListener("visibilitychange", onVisibility);
			gl.deleteBuffer(buffer);
			gl.deleteProgram(program);
			gl.deleteShader(vs);
			gl.deleteShader(fs);
		};
	}, []);

	if (fallback) return <Sphere className={className} />;

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className={cn(
				"pointer-events-none aspect-square w-full [filter:drop-shadow(-1.5px_0_0_rgb(var(--ab-red)/0.45))_drop-shadow(1.5px_0_0_rgb(var(--ab-cyan)/0.45))]",
				className,
			)}
		/>
	);
}
