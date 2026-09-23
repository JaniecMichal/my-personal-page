import { RawLine } from "../types";
import { out, lnk, div, blank } from "./helpers";
import { EXPERIENCES } from "../../experience-sections/const";

export const experience = (): RawLine[] => {
  const lines: RawLine[] = [out("EXPERIENCE"), div()];

  const jobs = EXPERIENCES.filter((e) => e.id !== "hire-me");

  for (const job of jobs) {
    const company = job.company.padEnd(22);
    const role = job.role.padEnd(34);
    lines.push(out(`  ${company}${role}${job.period}`));
  }

  lines.push(blank());
  lines.push(div());
  lines.push(lnk("→ /experience", "/experience"));

  return lines;
};
