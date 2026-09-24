"use client";

import { useLocale, useTranslations } from "next-intl";
import { type FormEvent, startTransition, useActionState, useEffect, useRef, useState } from "react";
import { submitBrief } from "@/actions/brief";
import { buttonClass } from "@/components/ui/button-link";
import { EmailLink } from "@/components/ui/email-link";
import { Link } from "@/i18n/navigation";
import { BUDGETS, type BriefErrorKey, type BriefField, type BriefState, PROJECT_TYPES, TIMELINES } from "@/lib/brief-options";
import { cn } from "@/lib/cn";
import { decodeEmail } from "@/lib/email";

const TOTAL = 4;
const chip =
	"flex min-h-12 cursor-pointer items-center gap-3 border border-ink px-4 text-sm transition-colors has-[:checked]:bg-ink has-[:checked]:text-ground has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent";
const input =
	"border-0 border-b border-ink bg-transparent py-3.5 font-mono text-base text-ink outline-none focus:border-accent focus:shadow-[0_1px_0_var(--accent)]";

/** Fields each step owns, used to show the right errors and jump back to them. */
const STEP_FIELDS: BriefField[][] = [["types"], ["budget"], ["timeline"], ["name", "email", "company", "message", "consent"]];

export function BriefForm({ encodedEmail }: { encodedEmail: string }) {
	const t = useTranslations("contact.form");
	const locale = useLocale();
	const [state, action, pending] = useActionState<BriefState, FormData>(submitBrief, { status: "idle" });
	const [step, setStep] = useState(1);
	const [localErrors, setLocalErrors] = useState<Partial<Record<BriefField, BriefErrorKey>>>({});
	const formRef = useRef<HTMLFormElement>(null);
	const headingRef = useRef<HTMLParagraphElement>(null);

	const errors = { ...(state.status === "invalid" ? state.errors : {}), ...localErrors };

	// Server-side validation failed: go to the first step with an error.
	useEffect(() => {
		if (state.status !== "invalid") return;
		const first = STEP_FIELDS.findIndex((fields) => fields.some((f) => state.errors[f]));
		if (first >= 0) setStep(first + 1);
	}, [state]);

	// Move focus to the step heading when the step changes (not on first render).
	const mounted = useRef(false);
	useEffect(() => {
		if (mounted.current) headingRef.current?.focus();
		mounted.current = true;
	}, [step, state.status]);

	const validateStep = () => {
		const data = new FormData(formRef.current ?? undefined);
		const next: Partial<Record<BriefField, BriefErrorKey>> = {};
		if (step === 1 && data.getAll("types").length === 0) next.types = "type";
		if (step === 2 && !data.get("budget")) next.budget = "budget";
		if (step === 3 && !data.get("timeline")) next.timeline = "timeline";
		setLocalErrors(next);
		return Object.keys(next).length === 0;
	};

	// Submitting manually keeps typed values after a validation error (form actions reset the form).
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (step < TOTAL) {
			if (validateStep()) setStep((s) => s + 1);
			return;
		}
		setLocalErrors({});
		const data = new FormData(e.currentTarget);
		startTransition(() => action(data));
	};

	if (state.status === "success") {
		return (
			<div className="brackets relative flex min-h-[520px] flex-col justify-center gap-6 bg-surface p-8 md:p-12" role="status">
				<p ref={headingRef} tabIndex={-1} className="font-dots text-6xl font-black text-accent outline-none">
					OK ✓
				</p>
				<h2 className="font-serif text-4xl leading-none md:text-[56px]">{t("successTitle")}</h2>
				<p className="text-[15px] leading-relaxed text-ink-soft">{t("successBody")}</p>
				<EmailLink encoded={encodedEmail} className={cn(buttonClass("line"), "self-start")} />
			</div>
		);
	}

	const error = (field: BriefField) =>
		errors[field] ? (
			<p id={`${field}-error`} className="text-sm text-[#d4351c] dark:text-[#ff7a66]" role="alert">
				{t(`errors.${errors[field]}`)}
			</p>
		) : null;

	return (
		<form
			ref={formRef}
			onSubmit={onSubmit}
			aria-label={t("label")}
			noValidate
			className="brackets relative flex min-h-[640px] flex-col gap-8 bg-surface p-6 md:p-12"
		>
			<input type="hidden" name="locale" value={locale} />
			{/* Honeypot, hidden from people and assistive tech. */}
			<div aria-hidden="true" className="absolute left-[-9999px]">
				<label>
					Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
				</label>
			</div>

			<div className="flex gap-1.5" aria-hidden="true">
				{Array.from({ length: TOTAL }, (_, i) => (
					<span key={i} className={cn("h-1 grow", i < step ? "bg-accent" : "bg-rule")} />
				))}
			</div>
			<p
				ref={headingRef}
				tabIndex={-1}
				className="flex items-baseline justify-between outline-none"
				aria-live="polite"
			>
				<span className="font-dots text-[22px] font-black text-accent">
					{t("step", { current: step, total: TOTAL })}
				</span>
				<span className="label">{t(`steps.s${step as 1 | 2 | 3 | 4}`)}</span>
			</p>

			<fieldset hidden={step !== 1} className="flex flex-col gap-6" aria-describedby={errors.types ? "types-error" : undefined}>
				<legend className="mb-2 font-serif text-4xl leading-[1.05] md:text-[44px]">{t("typeQuestion")}</legend>
				<p className="label">{t("typeHint")}</p>
				<div className="grid gap-3 sm:grid-cols-2">
					{PROJECT_TYPES.map((type) => (
						<label key={type} className={chip}>
							<input type="checkbox" name="types" value={type} className="size-4 accent-accent" />
							{t(`types.${type}`)}
						</label>
					))}
				</div>
				{error("types")}
			</fieldset>

			<fieldset hidden={step !== 2} className="flex flex-col gap-6" aria-describedby={errors.budget ? "budget-error" : undefined}>
				<legend className="mb-2 font-serif text-4xl leading-[1.05] md:text-[44px]">{t("budgetQuestion")}</legend>
				<div className="flex flex-col gap-3">
					{BUDGETS.map((budget) => (
						<label key={budget} className={chip}>
							<input type="radio" name="budget" value={budget} className="size-4 accent-accent" />
							{t(`budgets.${budget}`)}
						</label>
					))}
				</div>
				{error("budget")}
			</fieldset>

			<fieldset hidden={step !== 3} className="flex flex-col gap-6" aria-describedby={errors.timeline ? "timeline-error" : undefined}>
				<legend className="mb-2 font-serif text-4xl leading-[1.05] md:text-[44px]">{t("timelineQuestion")}</legend>
				<div className="flex flex-col gap-3">
					{TIMELINES.map((timeline) => (
						<label key={timeline} className={chip}>
							<input type="radio" name="timeline" value={timeline} className="size-4 accent-accent" />
							{t(`timelines.${timeline}`)}
						</label>
					))}
				</div>
				{error("timeline")}
			</fieldset>

			<fieldset hidden={step !== 4} className="flex flex-col gap-6">
				<legend className="mb-2 font-serif text-4xl leading-[1.05] md:text-[44px]">{t("contactQuestion")}</legend>
				<div className="grid gap-6 sm:grid-cols-2">
					<label className="flex flex-col gap-2">
						<span className="label">{t("name")}</span>
						<input name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={input} />
						{error("name")}
					</label>
					<label className="flex flex-col gap-2">
						<span className="label">{t("email")}</span>
						<input name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={input} />
						{error("email")}
					</label>
				</div>
				<label className="flex flex-col gap-2">
					<span className="label">{t("company")}</span>
					<input name="company" type="text" autoComplete="organization" className={input} />
				</label>
				<label className="flex flex-col gap-2">
					<span className="label">{t("message")}</span>
					<textarea name="message" rows={4} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} className={cn(input, "resize-y")} />
					{error("message")}
				</label>
				<label className="flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
					<input type="checkbox" name="consent" required className="mt-0.5 size-5 shrink-0 accent-accent" aria-invalid={!!errors.consent} />
					<span>
						{t("consent")}{" "}
						<Link href="/privacy" className="text-accent">
							{t("privacy")}
						</Link>
					</span>
				</label>
				{error("consent")}
			</fieldset>

			{state.status === "error" && (
				<p className="text-sm text-[#d4351c] dark:text-[#ff7a66]" role="alert">
					{state.reason === "rateLimit" ? t("errors.rateLimit") : t("errors.generic", { email: decodeEmail(encodedEmail) })}
				</p>
			)}

			<div className="mt-auto flex items-center justify-between border-t border-dashed border-rule-strong pt-6">
				<button
					type="button"
					onClick={() => setStep((s) => Math.max(1, s - 1))}
					disabled={step === 1}
					className="min-h-11 text-sm uppercase tracking-[0.1em] text-muted disabled:invisible"
				>
					← {t("back")}
				</button>
				{step < TOTAL ? (
					<button
						type="button"
						onClick={() => validateStep() && setStep((s) => s + 1)}
						className={buttonClass("primary")}
					>
						{t("next")} →
					</button>
				) : (
					<button type="submit" disabled={pending} className={cn(buttonClass("primary"), "disabled:opacity-60")}>
						{pending ? t("sending") : `${t("submit")} ↗`}
					</button>
				)}
			</div>
		</form>
	);
}
