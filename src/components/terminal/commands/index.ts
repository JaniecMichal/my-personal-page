import { RawLine } from "../types";
import { help } from "./help";
import { whoami } from "./whoami";
import { skills } from "./skills";
import { experience } from "./experience";
import { contact } from "./contact";
import { err, info } from "./helpers";

export type CommandHandler = () => RawLine[];

export const COMMANDS: Record<string, CommandHandler> = {
  help,
  whoami,
  skills,
  experience,
  contact,
};

export const COMMAND_NAMES = ["help", "whoami", "skills", "experience", "contact", "clear"];

function levenshtein(a: string, b: string): number {
  const cols = b.length + 1;
  // flat row-major array — avoids noUncheckedIndexedAccess on 2D arrays
  const dp = new Int32Array((a.length + 1) * cols);
  for (let j = 0; j < cols; j++) dp[j] = j;
  for (let i = 1; i <= a.length; i++) {
    dp[i * cols] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i * cols + j] = Math.min(
        (dp[(i - 1) * cols + j] ?? 0) + 1,
        (dp[i * cols + j - 1] ?? 0) + 1,
        (dp[(i - 1) * cols + j - 1] ?? 0) + cost,
      );
    }
  }
  return dp[a.length * cols + b.length] ?? 0;
}

type ResolvedCommand =
  | { kind: "run"; handler: CommandHandler }
  | { kind: "clear" }
  | { kind: "empty" }
  | { kind: "typo"; suggestion: string }
  | { kind: "ai" };

export function resolveCommand(raw: string): ResolvedCommand {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) return { kind: "empty" };
  if (cmd === "clear") return { kind: "clear" };
  if (cmd in COMMANDS) return { kind: "run", handler: COMMANDS[cmd] as CommandHandler };

  const closest = COMMAND_NAMES.reduce(
    (best, name) => {
      const dist = levenshtein(cmd, name);
      return dist < best.dist ? { name, dist } : best;
    },
    { name: "", dist: Infinity },
  );

  if (closest.dist <= 3 && closest.name) {
    return { kind: "typo", suggestion: closest.name };
  }

  return { kind: "ai" };
}

export function typoLines(suggestion: string): RawLine[] {
  return [
    err(`command not found`),
    info(`  Did you mean: ${suggestion}?`),
  ];
}
