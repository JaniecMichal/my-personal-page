import { RawLine } from "../types";
import { out, lnk, div, blank } from "./helpers";

export const contact = (): RawLine[] => [
  out("CONTACT"),
  div(),
  blank(),
  lnk("  Email      michal.janiec95@gmail.com", "mailto:michal.janiec95@gmail.com"),
  lnk("  LinkedIn   linkedin.com/in/janiecmichal", "https://www.linkedin.com/in/janiecmichal/"),
  lnk("  GitHub     github.com/JaniecMichal", "https://github.com/JaniecMichal"),
  blank(),
  div(),
  lnk("→ /contact", "/contact"),
];
