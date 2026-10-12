"use client";

import { useLocale, useTranslations } from "next-intl";
import { type ChangeEvent, type FormEvent, startTransition, useActionState, useEffect, useRef, useState } from "react";
import { submitBrief } from "@/actions/brief";
import { buttonClass } from "@/components/ui/button-link";
import { EmailLink } from "@/components/ui/email-link";
import { Link } from "@/i18n/navigation";
import {
	BUDGETS,
	type BriefErrorKey,
	type BriefState,
	PROJECT_TYPES,
	TIMELINES,
	checkBriefField,
} from "@/lib/brief-options";
import { cn } from "@/lib/cn";
import { decodeEmail } from "@/lib/email";

const REQUIRED: BriefErrorKey[] = ["name", "email", "message", "consent"];
const chip =
	"flex min-h-12 cursor-pointer items-center gap-3 border border-ink px-4 text-sm transition-colors has-[:checked]:bg-ink has-[:checked]:text-ground has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent";
const input =
	"border-0 border-b border-ink bg-transparent py-3.5 font-mono text-base text-ink outline-none focus:border-accent focus:shadow-[0_1px_0_var(--accent)] aria-[invalid=true]:border-[#d4351c] dark:aria-[invalid=true]:border-[#ff7a66]";
const groupLegend = "label mb-3";

type Errors = Partial<Record<BriefErrorKey, true>>;

function fieldValue(form: HTMLFormElement, field: BriefErrorKey) {
	const el = form.elements.namedItem(field) as HTMLInputElement | HTMLTextAreaElement | null;
	if (!el) return "";
	return el instanceof HTMLInputElement && el.type === "checkbox" ? (el.checked ? "on" : "") : el.value;
}

export function BriefForm({ encodedEmail }: { encodedEmail: string }) {
	const t = useTranslations("contact.form");
	const locale = useLocale();
	const [state, action, pending] = useActionState<BriefState, FormData>(submitBrief, { status: "idle" });
	const [errors, setErrors] = useState<Errors>({});
	const formRef = useRef<HTMLFormElement>(null);
	const successRef = useRef<HTMLParagraphElement>(null);

	// Server-side validation is the source of truth: show whatever it rejected.
	useEffect(() => {
		if (state.status !== "invalid") return;
		const next: Errors = {};
		for (const key of Object.values(state.errors)) if (key && REQUIRED.includes(key)) next[key] = true;
		setErrors(next);
	}, [state]);

	useEffect(() => {
		if (state.status === "success") successRef.current?.focus();
	}, [state.status]);

	// Once a field has an error, re-check it as the user types so the message disappears when fixed.
	const onChange = (e: ChangeEvent<HTMLFormElement>) => {
		const field = e.target.name as BriefErrorKey;
		if (!errors[field] || !formRef.current) return;
		if (checkBriefField(field, fieldValue(formRef.current, field))) {
			setErrors(({ [field]: _, ...rest }) => rest);
		}
	};

	// Submitting manually keeps typed values after a validation error (form actions reset the form).
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const invalid = REQUIRED.filter((field) => !checkBriefField(field, fieldValue(form, field)));
		setErrors(Object.fromEntries(invalid.map((field) => [field, true])));
		const [first] = invalid;
		if (first) {
			(form.elements.namedItem(first) as HTMLElement | null)?.focus();
			return;
		}
		const data = new FormData(form);
		startTransition(() => action(data));
	};

	if (state.status === "success") {
		return (
			<div className="brackets relative flex min-h-[520px] flex-col justify-center gap-6 bg-surface p-8 md:p-12" role="status">
				<p ref={successRef} tabIndex={-1} className="font-dots text-6xl font-black text-accent outline-none">
					OK ✓
				</p>
				<h2 className="font-serif text-4xl leading-none md:text-[56px]">{t("successTitle")}</h2>
				<p className="text-[15px] leading-relaxed text-ink-soft">{t("successBody")}</p>
				<EmailLink encoded={encodedEmail} className={cn(buttonClass("line"), "self-start")} />
			</div>
		);
	}

	const invalidProps = (field: BriefErrorKey) => ({
		"aria-invalid": !!errors[field],
		"aria-describedby": errors[field] ? `${field}-error` : undefined,
	});
	const error = (field: BriefErrorKey) =>
		errors[field] ? (
			<p id={`${field}-error`} className="text-sm text-[#d4351c] dark:text-[#ff7a66]">
				{t(`errors.${field}`)}
			</p>
		) : null;

	return (
		<form
			ref={formRef}
			onSubmit={onSubmit}
			onChange={onChange}
			aria-label={t("label")}
			noValidate
			className="brackets relative flex flex-col gap-8 bg-surface p-6 md:p-12"
		>
			<input type="hidden" name="locale" value={locale} />
			{/* Honeypot, hidden from people and assistive tech. */}
			<div aria-hidden="true" className="absolute left-[-9999px]">
				<label>
					Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
				</label>
			</div>

			<h2 className="font-serif text-4xl leading-[1.05] md:text-[44px]">{t("heading")}</h2>

			<div className="grid gap-6 sm:grid-cols-2">
				<label className="flex flex-col gap-2">
					<span className="label">{t("name")}</span>
					<input name="name" type="text" autoComplete="name" required maxLength={120} className={input} {...invalidProps("name")} />
					{error("name")}
				</label>
				<label className="flex flex-col gap-2">
					<span className="label">{t("email")}</span>
					<input name="email" type="email" autoComplete="email" required maxLength={200} className={input} {...invalidProps("email")} />
					{error("email")}
				</label>
			</div>
			<label className="flex flex-col gap-2">
				<span className="label">{t("message")}</span>
				<textarea
					name="message"
					rows={4}
					required
					maxLength={5000}
					placeholder={t("messagePlaceholder")}
					className={cn(input, "resize-y placeholder:text-muted")}
					{...invalidProps("message")}
				/>
				{error("message")}
			</label>

			<div className="flex flex-col gap-6 border-t border-dashed border-rule-strong pt-8">
				<div>
					<p className="font-serif text-2xl leading-tight md:text-3xl">{t("detailsTitle")}</p>
					<p className="mt-1 text-sm text-ink-soft">{t("detailsHint")}</p>
				</div>

				<fieldset>
					<legend className={groupLegend}>{t("typeLabel")}</legend>
					<div className="flex flex-wrap gap-3">
						{PROJECT_TYPES.map((type) => (
							<label key={type} className={chip}>
								<input type="checkbox" name="types" value={type} className="size-4 accent-accent" />
								{t(`types.${type}`)}
							</label>
						))}
					</div>
				</fieldset>

				<fieldset>
					<legend className={groupLegend}>{t("budgetLabel")}</legend>
					<div className="flex flex-wrap gap-3">
						{BUDGETS.map((budget) => (
							<label key={budget} className={chip}>
								<input type="radio" name="budget" value={budget} className="size-4 accent-accent" />
								{t(`budgets.${budget}`)}
							</label>
						))}
					</div>
				</fieldset>

				<fieldset>
					<legend className={groupLegend}>{t("timelineLabel")}</legend>
					<div className="flex flex-wrap gap-3">
						{TIMELINES.map((timeline) => (
							<label key={timeline} className={chip}>
								<input type="radio" name="timeline" value={timeline} className="size-4 accent-accent" />
								{t(`timelines.${timeline}`)}
							</label>
						))}
					</div>
				</fieldset>

				<label className="flex flex-col gap-2">
					<span className="label">{t("company")}</span>
					<input name="company" type="text" autoComplete="organization" maxLength={200} className={input} />
				</label>
			</div>

			<div className="flex flex-col gap-2">
				<label className="flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
					<input
						type="checkbox"
						name="consent"
						required
						className="mt-0.5 size-5 shrink-0 accent-accent"
						{...invalidProps("consent")}
					/>
					<span>
						{t("consent")}{" "}
						<Link href="/privacy" className="text-accent">
							{t("privacy")}
						</Link>
					</span>
				</label>
				{error("consent")}
			</div>

			<div aria-live="polite">
				{state.status === "error" && (
					<p className="text-sm text-[#d4351c] dark:text-[#ff7a66]">
						{state.reason === "rateLimit" ? t("errors.rateLimit") : t("errors.generic", { email: decodeEmail(encodedEmail) })}
					</p>
				)}
			</div>

			<div className="flex justify-end border-t border-dashed border-rule-strong pt-6">
				<button type="submit" disabled={pending} className={cn(buttonClass("primary"), "disabled:opacity-60")}>
					{pending ? t("sending") : `${t("submit")} ↗`}
				</button>
			</div>
		</form>
	);
}
