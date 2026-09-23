"use client";

import { useRef } from "react";
import { useTerminal } from "./use-terminal";
import { TerminalOutput } from "./terminal-output";
import { TerminalInputRow } from "./terminal-input-row";
import { CommandChips } from "./command-chips";
import { WINDOW_TITLE } from "./const";

export const TerminalWindow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { history, input, setInput, handleKeyDown, executeCommand } = useTerminal();

  const focusInput = () => {
    containerRef.current?.querySelector("input")?.focus();
  };

  return (
    <div
      ref={containerRef}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-2xl"
      onClick={focusInput}
    >
      {/* macOS-style title bar */}
      <div className="flex shrink-0 items-center gap-2 border-b border-gray-800 bg-gray-900 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500 opacity-80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500 opacity-80" />
          <div className="h-3 w-3 rounded-full bg-green-500 opacity-80" />
        </div>
        <span className="mx-auto font-mono text-xs text-gray-500">{WINDOW_TITLE}</span>
      </div>

      <TerminalOutput lines={history} />

      <TerminalInputRow
        input={input}
        onChange={setInput}
        onKeyDown={handleKeyDown}
      />

      <CommandChips onCommand={(cmd) => { executeCommand(cmd); focusInput(); }} />
    </div>
  );
};
