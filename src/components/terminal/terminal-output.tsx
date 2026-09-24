"use client";

import { useEffect, useRef } from "react";
import { type OutputLine } from "./types";
import { TerminalLine } from "./terminal-line";

export const TerminalOutput = ({ lines }: { lines: OutputLine[] }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-0.5 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
      {lines.map((line) => (
        <TerminalLine key={line.id} line={line} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};
