import { type RawLine } from "../types";
import { TERMINAL_SKILLS } from "../const";
import { out, info, lnk, div, blank } from "./helpers";

export const skills = (): RawLine[] => {
  const lines: RawLine[] = [out("SKILLS"), div()];

  for (const { category, skills: list } of TERMINAL_SKILLS) {
    lines.push(out(`  ${category}`));
    lines.push(info(`    ${list.join("  ·  ")}`));
    lines.push(blank());
  }

  lines.push(div());
  lines.push(lnk("→ /en/cv", "/en/cv"));

  return lines;
};
