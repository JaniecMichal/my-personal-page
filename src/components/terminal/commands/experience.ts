import { type RawLine } from "../types";
import { out, lnk, div, blank } from "./helpers";
import { experience as experienceData } from "@/content/local/cv";
import { resolveLocale } from "@/content/local/resolve";
import type { Experience } from "@/content/types";

export const experience = (): RawLine[] => {
  const lines: RawLine[] = [out("EXPERIENCE"), div()];

  // The terminal is English-only and reads local content directly (it runs on the client).
  const jobs = resolveLocale<Experience[]>(experienceData, "en");

  for (const job of jobs) {
    const company = job.company.padEnd(22);
    const role = job.role.padEnd(34);
    const period = `${job.start.replace("-", ".")} – ${job.end ? job.end.replace("-", ".") : "now"}`;
    lines.push(out(`  ${company}${role}${period}`));
  }

  lines.push(blank());
  lines.push(div());
  lines.push(lnk("→ /en/cv", "/en/cv"));

  return lines;
};
