"use client";

import { useEffect } from "react";

/**
 * Fades `[data-reveal]` elements in as they enter the viewport. Content is only hidden once this
 * has run (`reveal-ready` on <html>), so it stays visible without JS and with reduced motion.
 */
export function ScrollReveal() {
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const root = document.documentElement;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add("is-revealed");
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
		);

		const observe = () => {
			document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach((el) => {
				// Already on screen at load: show at once instead of animating in.
				if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("is-revealed");
				else observer.observe(el);
			});
		};

		observe();
		root.classList.add("reveal-ready");
		// Client-side navigation swaps the page content; pick up new elements.
		const mutations = new MutationObserver(observe);
		mutations.observe(document.body, { childList: true, subtree: true });

		return () => {
			observer.disconnect();
			mutations.disconnect();
			root.classList.remove("reveal-ready");
		};
	}, []);

	return null;
}
