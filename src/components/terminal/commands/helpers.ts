import { type RawLine } from "../types";

export const out = (content: string): RawLine => ({ type: "output", content });
export const info = (content: string): RawLine => ({ type: "info", content });
export const lnk = (content: string, href: string): RawLine => ({ type: "link", content, href });
export const err = (content: string): RawLine => ({ type: "error", content });
export const div = (): RawLine => ({ type: "divider", content: "─".repeat(52) });
export const blank = (): RawLine => ({ type: "blank", content: "" });
