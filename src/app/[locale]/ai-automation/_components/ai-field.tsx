import styles from "./field.module.css";
import { WaveField } from "@/components/effects/wave-field";
import { cn } from "@/lib/cn";

/**
 * Background of the AI page's dark sections: accent → violet glow with the site's line field on top.
 * "hero" spans the hero and the next section and fades out at the bottom; "band" is a calmer glow for
 * a single section.
 */
export function AiField({ variant = "hero" }: { variant?: "hero" | "band" }) {
	return (
		<div aria-hidden="true" className={cn(styles.field, variant === "band" && styles.band)}>
			<div className={styles.glow} />
			<div className={styles.glowSmall} />
			{variant === "hero" && (
				<WaveField
					className="absolute top-[30%] left-[62%] z-0 w-[1100px] -translate-x-1/2 -translate-y-1/2 text-ink opacity-70 lg:w-[1500px]"
					strength={1.3}
				/>
			)}
			{variant === "hero" && <div className={styles.fade} />}
		</div>
	);
}

export const glass = styles.glass;
export const stage = styles.stage;
