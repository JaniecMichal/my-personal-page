"use client";

import { useEffect } from "react";

/**
 * Turns pointer position and scroll velocity into three CSS variables on <html>:
 * --ab-x / --ab-y (-1..1, direction of the RGB split) and --ab-s (0..1, strength).
 * The `ab`, `ab-xl` utilities read them. Does nothing with reduced motion.
 */
export function AberrationField() {
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const root = document.documentElement;
		const target = { x: 0, y: 0, s: 0.2 };
		const current = { x: 0, y: 0, s: 0.2 };
		let lastScroll = window.scrollY;
		let frame = 0;
		let raf = 0;

		const onPointer = (e: PointerEvent) => {
			target.x = (e.clientX / window.innerWidth) * 2 - 1;
			target.y = (e.clientY / window.innerHeight) * 2 - 1;
			target.s = Math.min(1, target.s + 0.08);
		};

		const tick = () => {
			frame++;
			const velocity = Math.abs(window.scrollY - lastScroll);
			lastScroll = window.scrollY;
			target.s = Math.min(1, Math.max(0.16 + Math.sin(frame / 90) * 0.04, target.s * 0.94 + velocity * 0.01));

			current.x += (target.x - current.x) * 0.08;
			current.y += (target.y - current.y) * 0.08;
			current.s += (target.s - current.s) * 0.12;

			root.style.setProperty("--ab-x", current.x.toFixed(2));
			root.style.setProperty("--ab-y", current.y.toFixed(2));
			root.style.setProperty("--ab-s", current.s.toFixed(2));
			raf = requestAnimationFrame(tick);
		};

		window.addEventListener("pointermove", onPointer, { passive: true });
		raf = requestAnimationFrame(tick);

		return () => {
			window.removeEventListener("pointermove", onPointer);
			cancelAnimationFrame(raf);
		};
	}, []);

	return null;
}
