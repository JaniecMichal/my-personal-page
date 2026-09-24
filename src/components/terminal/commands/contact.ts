import { type RawLine } from "../types";
import { out, lnk, div, blank } from "./helpers";
import { decodeEmail } from "@/lib/email";

// Encoded so the address never appears as plain text in the bundle (see lib/email.ts).
const ENCODED_EMAIL = "bW9jLmxpYW1nQDU5Y2VpbmFqLmxhaGNpbQ==";

export const contact = (): RawLine[] => [
  out("CONTACT"),
  div(),
  blank(),
  lnk(`  Email      ${decodeEmail(ENCODED_EMAIL)}`, `mailto:${decodeEmail(ENCODED_EMAIL)}`),
  lnk("  LinkedIn   linkedin.com/in/janiecmichal", "https://www.linkedin.com/in/janiecmichal/"),
  lnk("  GitHub     github.com/JaniecMichal", "https://github.com/JaniecMichal"),
  blank(),
  div(),
  lnk("→ /en/contact", "/en/contact"),
];
