import { RawLine } from "../types";
import { out, info, lnk, div, blank } from "./helpers";
import { TERMINAL_SKILLS } from "../const";

export const skills = (): RawLine[] => {
  const lines: RawLine[] = [out("SKILLS"), div()];

  for (const { category, skills: list } of TERMINAL_SKILLS) {
    lines.push(out(`  ${category}`));
    lines.push(info(`    ${list.join("  ·  ")}`));
    lines.push(blank());
  }

  lines.push(div());
  lines.push(lnk("→ /skills", "/skills"));

  return lines;
};
