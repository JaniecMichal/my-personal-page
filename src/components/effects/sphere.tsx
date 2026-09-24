"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type SphereProps = {
	className?: string;
	/** Number of dots on the sphere. */
	count?: number;
};

const TILT = 0.42;
const GOLDEN = Math.PI * (3 - Math.sqrt(5));

/**
 * Dot-matrix sphere on a Fibonacci lattice, drawn on a 2D canvas. The equator ring and the
 * dashed orbit use the accent color; everything else uses `currentColor`, so it follows the
 * theme and inverse sections. Leans toward the pointer, pauses off-screen and renders a single
 * still frame with reduced motion.
 */
export function Sphere({ className, count = 900 }: SphereProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;

		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const points = Array.from({ length: count }, (_, i) => {
			const y = 1 - (i / (count - 1)) * 2;
			const r = Math.sqrt(1 - y * y);
			return { x: Math.cos(GOLDEN * i) * r, y, z: Math.sin(GOLDEN * i) * r, band: Math.abs(y) < 0.045 };
		});

		let size = 0;
		let dpr = 1;
		let ink = "#111214";
		let accent = "#2e3bff";
		let angle = 0.6;
		const lean = { x: 0, y: 0, tx: 0, ty: 0 };
		let visible = true;
		let raf = 0;
		let frame = 0;

		const readColors = () => {
			const style = getComputedStyle(canvas);
			ink = style.color;
			accent = style.getPropertyValue("--accent").trim() || accent;
		};

		const resize = () => {
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			size = canvas.clientWidth;
			canvas.width = size * dpr;
			canvas.height = size * dpr;
		};

		const draw = () => {
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, size, size);
			const c = size / 2;
			const R = size * 0.44;
			const k = size / 560;
			const tilt = TILT + lean.y * 0.25;
			const cosA = Math.cos(angle + lean.x * 0.4);
			const sinA = Math.sin(angle + lean.x * 0.4);
			const cosT = Math.cos(tilt);
			const sinT = Math.sin(tilt);

			ctx.save();
			ctx.translate(c, c);
			ctx.rotate(-0.24);
			ctx.setLineDash([2 * k, 7 * k]);
			ctx.strokeStyle = accent;
			ctx.lineWidth = Math.max(1, k);
			ctx.beginPath();
			ctx.ellipse(0, 0, R * 1.16, R * 0.32, 0, 0, Math.PI * 2);
			ctx.stroke();
			ctx.restore();

			for (const p of points) {
				const x1 = p.x * cosA + p.z * sinA;
				const z1 = -p.x * sinA + p.z * cosA;
				const y2 = p.y * cosT - z1 * sinT;
				const z2 = p.y * sinT + z1 * cosT;
				const depth = (z2 + 1) / 2;
				ctx.globalAlpha = 0.1 + 0.9 * depth * depth;
				ctx.fillStyle = p.band ? accent : ink;
				ctx.beginPath();
				ctx.arc(c + x1 * R, c + y2 * R, (0.55 + depth * 1.9) * k * (p.band ? 1.25 : 1), 0, Math.PI * 2);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
		};

		const loop = () => {
			frame++;
			if (frame % 30 === 0) readColors();
			angle += 0.0035;
			lean.x += (lean.tx - lean.x) * 0.05;
			lean.y += (lean.ty - lean.y) * 0.05;
			draw();
			if (visible) raf = requestAnimationFrame(loop);
		};

		const onPointer = (e: PointerEvent) => {
			const rect = canvas.getBoundingClientRect();
			lean.tx = Math.max(-1, Math.min(1, (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth));
			lean.ty = Math.max(-1, Math.min(1, (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight));
		};

		resize();
		readColors();
		draw();

		const resizeObserver = new ResizeObserver(() => {
			resize();
			draw();
		});
		resizeObserver.observe(canvas);

		// Redraw the still frame when the theme flips.
		const themeObserver = new MutationObserver(() => {
			readColors();
			draw();
		});
		themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

		let intersection: IntersectionObserver | undefined;
		if (!reduced) {
			window.addEventListener("pointermove", onPointer, { passive: true });
			intersection = new IntersectionObserver(([entry]) => {
				const wasVisible = visible;
				visible = entry?.isIntersecting ?? false;
				if (visible && !wasVisible) raf = requestAnimationFrame(loop);
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
		};
	}, [count]);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			className={cn(
				"pointer-events-none aspect-square w-full [filter:drop-shadow(-2px_0_0_rgb(var(--ab-red)/0.5))_drop-shadow(2px_0_0_rgb(var(--ab-cyan)/0.5))]",
				className,
			)}
		/>
	);
}
