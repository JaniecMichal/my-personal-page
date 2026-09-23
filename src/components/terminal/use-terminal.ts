"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { OutputLine, RawLine } from "./types";
import { COMMAND_NAMES, resolveCommand, typoLines } from "./commands";
import { BOOT_LINES } from "./const";
import { askTerminalAI } from "@/actions/terminal-ai";

const makeId = () => Math.random().toString(36).slice(2, 9);

function toLines(raws: RawLine[]): OutputLine[] {
  return raws.map((r) => ({ ...r, id: makeId() }));
}

const WELCOME: RawLine[] = [
  { type: "blank", content: "" },
  { type: "output", content: 'Type `help` to see available commands.' },
  { type: "blank", content: "" },
];

export function useTerminal() {
  const [history, setHistory] = useState<OutputLine[]>([]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [isThinking, setIsThinking] = useState(false);
  const thinkingId = useRef<string | null>(null);
  const booted = useRef(false);

  useEffect(() => {
    if (booted.current) return;
    booted.current = true;

    const bootLines: RawLine[] = [
      ...BOOT_LINES.map((content) => ({ type: "info" as const, content })),
      ...WELCOME,
    ];

    bootLines.forEach((raw, i) => {
      setTimeout(() => {
        setHistory((prev) => [...prev, { ...raw, id: makeId() }]);
      }, i * 110);
    });
  }, []);

  const executeCommand = useCallback(async (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    const inputLine: OutputLine = { id: makeId(), type: "input", content: trimmed };
    const resolved = resolveCommand(trimmed);

    if (resolved.kind === "empty") return;

    if (resolved.kind === "clear") {
      setHistory(toLines(WELCOME));
      setCmdHistory((prev) => [trimmed, ...prev]);
      setHistoryIdx(-1);
      return;
    }

    if (resolved.kind === "run") {
      const resultLines = toLines(resolved.handler());
      setHistory((prev) => [
        ...prev,
        inputLine,
        { id: makeId(), type: "blank", content: "" },
        ...resultLines,
        { id: makeId(), type: "blank", content: "" },
      ]);
      setCmdHistory((prev) => [trimmed, ...prev]);
      setHistoryIdx(-1);
      return;
    }

    if (resolved.kind === "typo") {
      const resultLines = toLines(typoLines(resolved.suggestion));
      setHistory((prev) => [
        ...prev,
        inputLine,
        { id: makeId(), type: "blank", content: "" },
        ...resultLines,
        { id: makeId(), type: "blank", content: "" },
      ]);
      setCmdHistory((prev) => [trimmed, ...prev]);
      setHistoryIdx(-1);
      return;
    }

    // AI fallback
    const tId = makeId();
    thinkingId.current = tId;
    setIsThinking(true);

    const thinkingLine: OutputLine = { id: tId, type: "info", content: "thinking..." };
    setHistory((prev) => [
      ...prev,
      inputLine,
      { id: makeId(), type: "blank", content: "" },
      thinkingLine,
    ]);
    setCmdHistory((prev) => [trimmed, ...prev]);
    setHistoryIdx(-1);

    const aiLines = await askTerminalAI(trimmed);

    setHistory((prev) => {
      const withoutThinking = prev.filter((l) => l.id !== tId);
      return [
        ...withoutThinking,
        ...toLines(aiLines),
        { id: makeId(), type: "blank", content: "" },
      ];
    });
    setIsThinking(false);
    thinkingId.current = null;
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        void executeCommand(input);
        setInput("");
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCmdHistory((prev) => {
          const next = Math.min(historyIdx + 1, prev.length - 1);
          setHistoryIdx(next);
          if (prev[next] !== undefined) setInput(prev[next]);
          return prev;
        });
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = historyIdx - 1;
        if (next < 0) {
          setHistoryIdx(-1);
          setInput("");
        } else {
          setCmdHistory((prev) => {
            setHistoryIdx(next);
            if (prev[next] !== undefined) setInput(prev[next]);
            return prev;
          });
        }
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const lower = input.toLowerCase();
        const match = COMMAND_NAMES.find((n) => n.startsWith(lower) && n !== lower);
        if (match) setInput(match);
      }
    },
    [input, historyIdx, executeCommand],
  );

  return { history, input, setInput, handleKeyDown, executeCommand, isThinking };
}
