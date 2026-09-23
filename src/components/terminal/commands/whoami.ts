import { RawLine } from "../types";
import { out, info, lnk, div, blank } from "./helpers";

export const whoami = (): RawLine[] => [
  out("Michał Janiec"),
  out("Senior Frontend Developer — Katowice, Poland"),
  div(),
  info("5+ years building web & mobile apps with React, Next.js, TypeScript."),
  info("Currently at Visuality — enterprise property finance platform (UK client)."),
  info("AI-assisted development daily: Claude, MCP servers, custom tooling."),
  blank(),
  info("Open to: full-time, B2B, freelance. Remote preferred."),
  blank(),
  lnk("→ /about", "/about"),
];
