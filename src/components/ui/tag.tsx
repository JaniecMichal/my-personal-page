export function Tag({ children }: { children: string }) {
	return (
		<span className="px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-ink-soft shadow-[inset_0_0_0_1px_var(--rule-strong)]">
			{children}
		</span>
	);
}
