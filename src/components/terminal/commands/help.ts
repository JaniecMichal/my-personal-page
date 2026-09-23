import { RawLine } from "../types";
import { out, info, div, blank } from "./helpers";

export const help = (): RawLine[] => [
  out("AVAILABLE COMMANDS"),
  div(),
  out("  help          show this message"),
  out("  whoami        about me"),
  out("  skills        tech skills overview"),
  out("  experience    work history"),
  out("  contact       how to reach me"),
  out("  clear         clear the terminal"),
  div(),
  blank(),
  info("Anything else? Just ask — e.g. 'where did you study?' or 'do you know React Native?'"),
  blank(),
  info("↑ / ↓  navigate command history   |   Tab  autocomplete"),
];
