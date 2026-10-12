import { MOBILE_COMMANDS } from "./const";

export const CommandChips = ({ onCommand }: { onCommand: (cmd: string) => void }) => (
  <div className="flex flex-wrap gap-2 border-t border-gray-800 p-3 md:hidden shrink-0">
    {MOBILE_COMMANDS.map((cmd) => (
      <button
        key={cmd}
        onClick={() => onCommand(cmd)}
        className="rounded border border-green-900 bg-gray-900 px-3 py-1 font-mono text-xs text-green-400 transition-colors hover:bg-gray-800 active:bg-gray-700"
      >
        {cmd}
      </button>
    ))}
  </div>
);
