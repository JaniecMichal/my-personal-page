"use client";

import { useEffect, useState } from "react";

/** Thin accent bar under the header showing how far the article has been read. */
export function ReadingProgress({ targetId, label }: { targetId: string; label: string }) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const target = document.getElementById(targetId);
		if (!target) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			const rect = target.getBoundingClientRect();
			const total = rect.height - window.innerHeight;
			const value = total <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / total));
			setProgress(Math.round(value * 100));
		};
		const onScroll = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			cancelAnimationFrame(frame);
		};
	}, [targetId]);

	return (
		<div
			role="progressbar"
			aria-label={label}
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={progress}
			className="pointer-events-none fixed inset-x-0 top-16 z-40 h-0.5 lg:top-22"
		>
			<div
				className="h-full origin-left bg-accent transition-transform duration-100 motion-reduce:transition-none"
				style={{ transform: `scaleX(${progress / 100})` }}
			/>
		</div>
	);
}
