"use client";

import { PROMPT } from "./const";

type Props = {
  input: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const TerminalInputRow = ({ input, onChange, onKeyDown }: Props) => (
  <div className="flex items-center gap-2 border-t border-gray-800 px-4 py-3 shrink-0">
    <span className="font-mono text-sm text-green-600 shrink-0">{PROMPT}</span>
    <input
      value={input}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      className="flex-1 bg-transparent font-mono text-sm text-white outline-none caret-green-400 placeholder:text-gray-600"
      placeholder="type a command..."
      autoFocus
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck={false}
      aria-label="terminal input"
    />
  </div>
);
