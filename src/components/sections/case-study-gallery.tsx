"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
	/** One slide per screenshot (a `DeviceFrame`). `portrait` marks phone screenshots, which get narrower slides. */
	slides: { key: string; portrait: boolean; node: ReactNode }[];
	/** `slide` is a template with `{n}` and `{total}`, e.g. "{n} z {total}". */
	labels: {
		region: string;
		previous: string;
		next: string;
		slide: string;
		pause: string;
		play: string;
	};
};

const AUTOPLAY_DELAY = 4500;

/**
 * Case-study screenshots as a swipeable row (Embla, ~7 KB), so long galleries don't stretch the page.
 * Autoplay runs only while nobody is pointing at or focused in it, it is on screen, the visitor has not
 * paused it, and reduced motion is off. The pause button covers WCAG 2.2.2.
 */
export function CaseStudyGallery({ slides, labels }: Props) {
	const autoplay = useRef(
		Autoplay({ delay: AUTOPLAY_DELAY, playOnInit: false, stopOnInteraction: false }),
	);
	const [viewportRef, embla] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" }, [
		autoplay.current,
	]);
	const rootRef = useRef<HTMLElement>(null);
	const [paused, setPaused] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [focused, setFocused] = useState(false);
	const [inView, setInView] = useState(false);
	const [reducedMotion, setReducedMotion] = useState(true);
	const [selected, setSelected] = useState(0);
	const [snaps, setSnaps] = useState(0);
	const [canPrev, setCanPrev] = useState(false);
	const [canNext, setCanNext] = useState(false);

	const sync = useCallback(() => {
		if (!embla) return;
		setSelected(embla.selectedScrollSnap());
		setSnaps(embla.scrollSnapList().length);
		setCanPrev(embla.canScrollPrev());
		setCanNext(embla.canScrollNext());
	}, [embla]);

	useEffect(() => {
		if (!embla) return;
		sync();
		embla.on("select", sync).on("reInit", sync);
		return () => {
			embla.off("select", sync).off("reInit", sync);
		};
	}, [embla, sync]);

	useEffect(() => {
		const query = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReducedMotion(query.matches);
		update();
		query.addEventListener("change", update);
		return () => query.removeEventListener("change", update);
	}, []);

	useEffect(() => {
		const el = rootRef.current;
		if (!el) return;
		const observer = new IntersectionObserver(
			([entry]) => setInView(entry?.isIntersecting ?? false),
			{
				threshold: 0.4,
			},
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const canAutoplay = snaps > 1 && !reducedMotion;
	const running = canAutoplay && !paused && !hovered && !focused && inView;

	useEffect(() => {
		if (!embla) return;
		if (running) autoplay.current.play();
		else autoplay.current.stop();
	}, [embla, running]);

	// Jump instead of animating when the visitor prefers reduced motion.
	const go = (direction: "prev" | "next") => {
		if (!embla) return;
		const jump = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		embla.scrollTo(embla.selectedScrollSnap() + (direction === "next" ? 1 : -1), jump);
	};

	const button =
		"flex size-11 items-center justify-center border border-ink text-lg transition-colors hover:bg-ink hover:text-ground disabled:pointer-events-none disabled:opacity-30";

	return (
		<section
			ref={rootRef}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onFocus={() => setFocused(true)}
			onBlur={(e) => {
				if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
			}}
			aria-roledescription="carousel"
			aria-label={labels.region}
			className="flex flex-col gap-6"
		>
			<div ref={viewportRef} className="overflow-hidden">
				<div className="-ml-5 flex items-center lg:-ml-6">
					{slides.map((slide, i) => (
						<div
							key={slide.key}
							role="group"
							aria-roledescription="slide"
							aria-label={labels.slide
								.replace("{n}", String(i + 1))
								.replace("{total}", String(slides.length))}
							className={cn(
								"min-w-0 shrink-0 grow-0 pl-5 lg:pl-6",
								slide.portrait
									? "basis-[62%] sm:basis-[36%] lg:basis-[22%]"
									: "basis-[92%] lg:basis-[68%]",
							)}
						>
							{slide.node}
						</div>
					))}
				</div>
			</div>
			{snaps > 1 && (
				<div className="flex items-center justify-between gap-4">
					<span className="font-dots text-xl font-black" aria-hidden="true">
						{String(selected + 1).padStart(2, "0")} / {String(snaps).padStart(2, "0")}
					</span>
					<div className="flex gap-2">
						{canAutoplay && (
							<button
								type="button"
								className={button}
								onClick={() => setPaused((p) => !p)}
								aria-label={paused ? labels.play : labels.pause}
							>
								<span aria-hidden="true">{paused ? "▶" : "❚❚"}</span>
							</button>
						)}
						<button
							type="button"
							className={button}
							onClick={() => go("prev")}
							disabled={!canPrev}
							aria-label={labels.previous}
						>
							←
						</button>
						<button
							type="button"
							className={button}
							onClick={() => go("next")}
							disabled={!canNext}
							aria-label={labels.next}
						>
							→
						</button>
					</div>
				</div>
			)}
		</section>
	);
}
