const ENTITIES: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (ch) => ENTITIES[ch] ?? ch);
