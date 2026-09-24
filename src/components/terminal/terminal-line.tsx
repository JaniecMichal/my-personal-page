import Link from "next/link";
import { type OutputLine } from "./types";

const STYLES: Record<string, string> = {
  input: "text-white",
  output: "text-green-400",
  error: "text-red-400",
  link: "text-blue-400 underline-offset-2 hover:underline cursor-pointer",
  info: "text-gray-400",
  divider: "text-gray-700",
  blank: "h-2 block",
};

export const TerminalLine = ({ line }: { line: OutputLine }) => {
  const cls = `font-mono text-sm leading-relaxed whitespace-pre ${STYLES[line.type] ?? "text-green-400"}`;

  if (line.type === "blank") return <span className={cls} />;

  if (line.type === "input")
    return (
      <div className={cls}>
        <span className="text-green-600 mr-2">~$</span>
        {line.content}
      </div>
    );

  if (line.type === "link" && line.href) {
    const isExternal = line.href.startsWith("http") || line.href.startsWith("mailto");
    if (isExternal)
      return (
        <a href={line.href} target="_blank" rel="noopener noreferrer" className={cls}>
          {line.content}
        </a>
      );
    return (
      <Link href={line.href} className={cls}>
        {line.content}
      </Link>
    );
  }

  return <div className={cls}>{line.content}</div>;
};
