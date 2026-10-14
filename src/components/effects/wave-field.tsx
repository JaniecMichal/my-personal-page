"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Hero background: a sphere of latitude lines seen almost edge-on, so it reads as a field of
 * wavy horizontal lines. The surface "breathes" with layered 3D noise and ripples spread from
 * wherever the pointer crosses it, like a finger drawn through water. Lines facing the viewer
 * are strongest and the silhouette fades out. Raw WebGL2, `currentColor` for the ink, a still
 * frame with reduced motion, paused off-screen. Without WebGL2 it simply renders nothing.
 */

const RINGS = 110;
const SEGMENTS = 280;
const MAX_RIPPLES = 8;
const CAMERA_Z = 2.85;
const FOV = (45 * Math.PI) / 180;
const TILT = 0.12;

const VERTEX = /* glsl */ `#version 300 es
in vec3 aPos;
uniform mat4 uProj;
uniform float uTilt;
uniform float uPhase;
uniform vec4 uRipples[${MAX_RIPPLES}]; // xyz: hit direction, w: age in seconds (< 0 = unused)
out float vAlpha;

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
	for (int i = 0; i < 4; i++) {
		sum += amp * snoise(p);
		p *= 2.15;
		amp *= 0.5;
	}
	return sum;
}

void main() {
	// Small tilt so the rings read as slightly curved horizontal lines.
	float c = cos(uTilt);
	float s = sin(uTilt);
	vec3 dir = vec3(aPos.x, aPos.y * c - aPos.z * s, aPos.y * s + aPos.z * c);

	float n = fbm(dir * 1.1 + vec3(0.0, 0.0, uPhase));
	float h = mix(n, 1.0 - 2.0 * abs(n), 0.5); // half smooth, half ridged

	float wake = 0.0;
	for (int i = 0; i < ${MAX_RIPPLES}; i++) {
		vec4 r = uRipples[i];
		if (r.w < 0.0) continue;
		float d = acos(clamp(dot(dir, r.xyz), -1.0, 1.0));
		float front = d - r.w * 0.55;
		float env = exp(-r.w / 0.9) * exp(-(front * front) / (0.28 * 0.28));
		wake += env * sin(front * 14.0);
	}

	vec3 pos = dir * (1.0 + h * 0.11 + wake * 0.06);
	gl_Position = uProj * vec4(pos.xy, pos.z - ${CAMERA_Z.toFixed(2)}, 1.0);

	vec3 toCamera = normalize(vec3(0.0, 0.0, ${CAMERA_Z.toFixed(2)}) - pos);
	float facing = pow(abs(dot(dir, toCamera)), 1.6);
	float crease = 1.0 - clamp(abs(n), 0.0, 1.0);
	vAlpha = facing * (0.45 + 0.55 * crease);
}
`;

const FRAGMENT = /* glsl */ `#version 300 es
precision mediump float;
in float vAlpha;
uniform vec3 uInk;
uniform float uOpacity;
out vec4 outColor;

void main() {
	float a = clamp(vAlpha * uOpacity, 0.0, 1.0);
	outColor = vec4(uInk * a, a);
}
`;

/** Latitude rings as line pairs (gl.LINES): RINGS × SEGMENTS segments. */
function buildGeometry() {
	const data = new Float32Array(RINGS * SEGMENTS * 2 * 3);
	let k = 0;
	const point = (phi: number, theta: number) => {
		data[k++] = Math.sin(phi) * Math.cos(theta);
		data[k++] = Math.cos(phi);
		data[k++] = Math.sin(phi) * Math.sin(theta);
	};
	for (let i = 0; i < RINGS; i++) {
		const phi = Math.PI * (0.02 + (0.96 * i) / (RINGS - 1));
		for (let j = 0; j < SEGMENTS; j++) {
			point(phi, (j / SEGMENTS) * Math.PI * 2);
			point(phi, ((j + 1) / SEGMENTS) * Math.PI * 2);
		}
	}
	return data;
}

function perspective(fov: number, near: number, far: number) {
	const f = 1 / Math.tan(fov / 2);
	const nf = 1 / (near - far);
	return new Float32Array([
		f,
		0,
		0,
		0,
		0,
		f,
		0,
		0,
		0,
		0,
		(far + near) * nf,
		-1,
		0,
		0,
		2 * far * near * nf,
		0,
	]);
}

const parser =
	typeof document !== "undefined" ? document.createElement("canvas").getContext("2d") : null;
function toRgb(color: string): [number, number, number] {
	const fallback: [number, number, number] = [0.06, 0.06, 0.07];
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
		console.warn("[wave-field]", gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}

type IdleWindow = Window & {
	requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
	cancelIdleCallback?: (id: number) => void;
};

/** requestIdleCallback with a timeout, or a short timer where it is missing (Safari). */
function whenIdle(cb: () => void) {
	const w = window as IdleWindow;
	return w.requestIdleCallback
		? w.requestIdleCallback(cb, { timeout: 2000 })
		: window.setTimeout(cb, 300);
}

function cancelIdle(id: number) {
	const w = window as IdleWindow;
	if (w.cancelIdleCallback) w.cancelIdleCallback(id);
	else window.clearTimeout(id);
}

/** Uploads the geometry, starts the loop and wires the observers. Returns the cleanup. */
function run(
	gl: WebGL2RenderingContext,
	program: WebGLProgram,
	vs: WebGLShader,
	fs: WebGLShader,
	strength: number,
) {
	const canvas = gl.canvas as HTMLCanvasElement;
	gl.useProgram(program);

	const geometry = buildGeometry();
	const buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(gl.ARRAY_BUFFER, geometry, gl.STATIC_DRAW);
	const aPos = gl.getAttribLocation(program, "aPos");
	gl.enableVertexAttribArray(aPos);
	gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);

	const u = (name: string) => gl.getUniformLocation(program, name);
	const uPhase = u("uPhase");
	const uRipples = u("uRipples");
	const uInk = u("uInk");
	const uOpacity = u("uOpacity");
	gl.uniformMatrix4fv(u("uProj"), false, perspective(FOV, 0.1, 10));
	gl.uniform1f(u("uTilt"), TILT);
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const ripples = new Float32Array(MAX_RIPPLES * 4).map((_, i) => (i % 4 === 3 ? -1 : 0));
	const vertexCount = geometry.length / 3;
	let nextRipple = 0;
	let lastHit: [number, number, number] | null = null;
	let phase = 0;
	let visible = true;
	let raf = 0;
	let last = performance.now();

	const readColor = () => gl.uniform3fv(uInk, toRgb(getComputedStyle(canvas).color));

	const resize = () => {
		const size = canvas.clientWidth;
		// DPR 1.5 at most, and no more than ~2 MP for this (very large) canvas.
		const dpr = Math.max(
			0.5,
			Math.min(window.devicePixelRatio || 1, 1.5, 1400 / Math.max(size, 1)),
		);
		canvas.width = Math.round(size * dpr);
		canvas.height = Math.round(size * dpr);
		gl.viewport(0, 0, canvas.width, canvas.height);
		// Thinner backing store means fewer pixels per line: keep the ink weight constant.
		gl.uniform1f(uOpacity, 0.4 * strength * Math.min(1, dpr));
	};

	const draw = () => {
		gl.uniform1f(uPhase, phase);
		gl.uniform4fv(uRipples, ripples);
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawArrays(gl.LINES, 0, vertexCount);
	};

	const loop = (now: number) => {
		const dt = Math.min((now - last) / 1000, 0.1);
		last = now;
		phase += dt * 0.08;
		for (let i = 3; i < ripples.length; i += 4) {
			const age = ripples[i] ?? -1;
			if (age >= 0) ripples[i] = age > 5 ? -1 : age + dt;
		}
		draw();
		if (visible) raf = requestAnimationFrame(loop);
	};

	// Ray from the camera through the pointer onto the unit sphere; a miss uses the closest point.
	const onPointer = (e: PointerEvent) => {
		const rect = canvas.getBoundingClientRect();
		if (
			e.clientX < rect.left ||
			e.clientX > rect.right ||
			e.clientY < rect.top ||
			e.clientY > rect.bottom
		)
			return;
		const t = Math.tan(FOV / 2);
		const dx = (((e.clientX - rect.left) / rect.width) * 2 - 1) * t;
		const dy = (1 - ((e.clientY - rect.top) / rect.height) * 2) * t;
		const len = Math.hypot(dx, dy, 1);
		const d = [dx / len, dy / len, -1 / len] as const;
		const b = d[2] * CAMERA_Z;
		const disc = b * b - (CAMERA_Z * CAMERA_Z - 1);
		const s = disc >= 0 ? -b - Math.sqrt(disc) : -b;
		const hx = d[0] * s;
		const hy = d[1] * s;
		const hz = d[2] * s + CAMERA_Z;
		const hl = Math.hypot(hx, hy, hz) || 1;
		const hit: [number, number, number] = [hx / hl, hy / hl, hz / hl];
		const moved = lastHit
			? Math.hypot(hit[0] - lastHit[0], hit[1] - lastHit[1], hit[2] - lastHit[2])
			: 1;
		if (moved < 0.12) return;
		lastHit = hit;
		ripples.set([...hit, 0], nextRipple * 4);
		nextRipple = (nextRipple + 1) % MAX_RIPPLES;
	};

	resize();
	readColor();
	draw();
	// Fade in (see the canvas classes) instead of popping in after load.
	canvas.style.opacity = "1";

	const resizeObserver = new ResizeObserver(() => {
		resize();
		draw();
	});
	resizeObserver.observe(canvas);
	const themeObserver = new MutationObserver(() => {
		readColor();
		draw();
	});
	themeObserver.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["data-theme"],
	});
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
}

/** `strength` scales the line opacity, e.g. for very large fields that render at a lower resolution. */
export function WaveField({ className, strength = 1 }: { className?: string; strength?: number }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		let cancelled = false;
		let cleanup: (() => void) | undefined;
		let idle = 0;
		let poll = 0;

		// Creating the context and compiling the shader blocks the compositor, so nothing on the
		// page could paint until it is done. Start only after load, once the main thread is idle.
		const start = () => {
			idle = whenIdle(() => {
				if (cancelled) return;
				// No GPU (software rendering): skip the effect instead of burning the CPU.
				const gl = canvas.getContext("webgl2", {
					alpha: true,
					antialias: true,
					premultipliedAlpha: true,
					failIfMajorPerformanceCaveat: true,
				});
				if (!gl) return;
				const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
				const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
				const program = vs && fs ? gl.createProgram() : null;
				if (!vs || !fs || !program) return;
				gl.attachShader(program, vs);
				gl.attachShader(program, fs);
				gl.linkProgram(program);
				// Without the extension the status check below blocks until the compile is done.
				const parallel = gl.getExtension("KHR_parallel_shader_compile");
				const linked = () => {
					if (cancelled) return;
					if (parallel && !gl.getProgramParameter(program, parallel.COMPLETION_STATUS_KHR)) {
						poll = requestAnimationFrame(linked);
						return;
					}
					if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
						console.warn("[wave-field]", gl.getProgramInfoLog(program));
						return;
					}
					cleanup = run(gl, program, vs, fs, strength);
				};
				linked();
			});
		};

		if (document.readyState === "complete") start();
		else window.addEventListener("load", start, { once: true });

		return () => {
			cancelled = true;
			window.removeEventListener("load", start);
			cancelIdle(idle);
			cancelAnimationFrame(poll);
			cleanup?.();
		};
	}, [strength]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className={cn(
				"pointer-events-none aspect-square opacity-0 transition-opacity duration-1000",
				className,
			)}
		/>
	);
}
