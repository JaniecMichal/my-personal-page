export type LineType = "input" | "output" | "error" | "link" | "info" | "divider" | "blank";

export type OutputLine = {
  id: string;
  type: LineType;
  content: string;
  href?: string;
};

export type RawLine = Omit<OutputLine, "id">;
