import type { Contributions } from "./github-activity";

const LEVEL_CLASS = [
	"bg-[color-mix(in_oklab,var(--ink)_9%,transparent)]",
	"bg-[color-mix(in_oklab,var(--accent)_35%,transparent)]",
	"bg-[color-mix(in_oklab,var(--accent)_60%,transparent)]",
	"bg-[color-mix(in_oklab,var(--accent)_82%,transparent)]",
	"bg-accent",
] as const;

type Props = { data: Contributions; label: string; locale: string };

/** GitHub-style calendar from real data: one column per week, Monday on top. */
export function ActivityHeatmap({ data, label, locale }: Props) {
	const firstDay = data.days[0];
	if (!firstDay) return null;
	// Pad the first week so each column starts on Monday.
	const first = new Date(`${firstDay.date}T00:00:00Z`);
	const offset = (first.getUTCDay() + 6) % 7;
	const cells = [...Array.from({ length: offset }, () => null), ...data.days];
	const date = new Intl.DateTimeFormat(locale, { day: "numeric", month: "short", year: "numeric" });

	return (
		<figure className="flex flex-col gap-3">
			<div className="overflow-x-auto pb-2">
				<div
					role="img"
					aria-label={label}
					className="grid w-max grid-flow-col grid-rows-7 gap-[3px] lg:gap-1"
				>
					{cells.map((day, i) =>
						day ? (
							<span
								key={day.date}
								title={`${date.format(new Date(`${day.date}T00:00:00Z`))}: ${day.count}`}
								className={`size-[11px] lg:size-[18px] ${LEVEL_CLASS[day.level]}`}
							/>
						) : (
							<span key={`pad-${i}`} className="size-[11px] lg:size-[18px]" />
						),
					)}
				</div>
			</div>
			<figcaption className="flex items-center gap-2 text-[12px] text-muted">
				{label}
				<span className="ml-auto flex gap-[3px]" aria-hidden="true">
					{LEVEL_CLASS.map((c) => (
						<span key={c} className={`size-[11px] ${c}`} />
					))}
				</span>
			</figcaption>
		</figure>
	);
}
