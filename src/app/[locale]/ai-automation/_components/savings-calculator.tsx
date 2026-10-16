"use client";

import { useId, useState } from "react";
import type { AiPageCopy } from "../content";

const WEEKS_PER_MONTH = 4.33;

type Field = "hours" | "people" | "rate" | "share";

const RANGES: Record<Field, { min: number; max: number; step: number; initial: number }> = {
	hours: { min: 1, max: 40, step: 1, initial: 5 },
	people: { min: 1, max: 20, step: 1, initial: 2 },
	rate: { min: 30, max: 300, step: 10, initial: 60 },
	share: { min: 10, max: 90, step: 10, initial: 50 },
};

type Props = { copy: AiPageCopy["calculator"]; locale: string };

/** Plain arithmetic, no claims: hours × people × rate × automatable share, per month. */
export function SavingsCalculator({ copy, locale }: Props) {
	const id = useId();
	const [values, setValues] = useState(
		() =>
			Object.fromEntries(Object.entries(RANGES).map(([k, r]) => [k, r.initial])) as Record<
				Field,
				number
			>,
	);

	const hoursPerMonth = values.hours * values.people * WEEKS_PER_MONTH * (values.share / 100);
	const costPerMonth = hoursPerMonth * values.rate;
	const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
	const money = new Intl.NumberFormat(locale, {
		style: "currency",
		currency: "PLN",
		maximumFractionDigits: 0,
	});

	const fields: { key: Field; label: string; suffix?: string }[] = [
		{ key: "hours", label: copy.hours },
		{ key: "people", label: copy.people },
		{ key: "rate", label: copy.rate },
		{ key: "share", label: copy.share, suffix: "%" },
	];

	return (
		<div className="grid gap-10 lg:grid-cols-12">
			<div className="flex flex-col gap-7 lg:col-span-7">
				{fields.map(({ key, label, suffix }) => {
					const r = RANGES[key];
					return (
						<div key={key} className="flex flex-col gap-2">
							<label
								htmlFor={`${id}-${key}`}
								className="flex items-baseline justify-between gap-4 text-[15px]"
							>
								<span>{label}</span>
								<span className="font-dots text-2xl font-black text-accent">
									{values[key]}
									{suffix}
								</span>
							</label>
							<input
								id={`${id}-${key}`}
								type="range"
								min={r.min}
								max={r.max}
								step={r.step}
								value={values[key]}
								onChange={(e) => setValues((v) => ({ ...v, [key]: Number(e.target.value) }))}
								className="h-11 w-full cursor-pointer accent-[var(--accent)]"
							/>
						</div>
					);
				})}
			</div>
			<output
				htmlFor={fields.map((f) => `${id}-${f.key}`).join(" ")}
				aria-live="polite"
				className="flex flex-col justify-center gap-3 bg-surface p-7 shadow-[inset_0_0_0_1px_var(--rule-strong)] chamfer lg:col-span-5"
			>
				<span className="label">{copy.perMonth}</span>
				<span className="font-dots text-6xl leading-none font-black text-ink md:text-7xl">
					{number.format(hoursPerMonth)} {copy.hoursUnit}
				</span>
				<span className="font-serif text-4xl text-accent">{money.format(costPerMonth)}</span>
				<span className="text-[15px] text-ink-soft">
					{money.format(costPerMonth * 12)} {copy.perYear}
				</span>
				<span className="mt-3 text-[13px] leading-relaxed text-muted">{copy.note}</span>
			</output>
		</div>
	);
}
