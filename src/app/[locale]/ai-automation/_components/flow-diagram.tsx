import type { CSSProperties } from "react";
import type { AiPageCopy } from "../content";
import styles from "./flow.module.css";

export function FlowDiagram({ flow }: { flow: AiPageCopy["flow"] }) {
	return (
		<figure className="brackets relative flex flex-col gap-5 p-5 md:p-7">
			<span className="label">{flow.label}</span>
			<ol className={styles.flow}>
				{flow.steps.map((step, i) => (
					<li key={step.title} className={styles.step} style={{ "--i": i } as CSSProperties}>
						<span className="font-serif text-2xl leading-tight text-ink">{step.title}</span>
						<span className="text-[13px] leading-snug text-muted">{step.detail}</span>
						{i < flow.steps.length - 1 && <span aria-hidden="true" className={styles.pulse} />}
					</li>
				))}
			</ol>
			<figcaption className="text-[13px] leading-relaxed text-ink-soft">{flow.caption}</figcaption>
		</figure>
	);
}
