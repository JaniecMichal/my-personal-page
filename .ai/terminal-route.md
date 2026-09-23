# Interactive Terminal Route

## Status: PoC complete, Phase 2 (layout + AI) complete

---

## Goal

A standalone `/terminal` page that acts as a CLI-style portfolio explorer.
Visitors type commands or free-form questions to navigate content.
Designed as a showpiece for AI/tooling identity — does not replace existing pages or affect SEO.

Linked from the homepage hero with: _"Prefer the terminal? →"_

---

## Route Structure

All existing pages live in `app/(main)/` — unchanged URLs, light layout.
Terminal lives in `app/(terminal)/` — dark layout, no footer.

```
app/
  layout.tsx                    — minimal root (html, body, font, Analytics)
  (main)/
    layout.tsx                  — Header + Footer, bg-white
    page.tsx, about/, skills/, experience/, projects/, contact/, for-business/
  (terminal)/
    layout.tsx                  — dark shell (TerminalNav + dark bg)
    terminal/
      page.tsx                  — the terminal route
```

---

## Component Tree

```
app/(terminal)/layout.tsx
└── TerminalNav                  — dark bar: michał@portfolio:~ | about skills ← back
└── TerminalPage
    └── TerminalWindow           — macOS chrome (dots + title bar)
        ├── TerminalOutput       — scrollable history, auto-scroll
        │   └── TerminalLine     — single line, styled by type
        ├── TerminalInputRow     — ~$ prompt + input
        └── CommandChips         — mobile tap buttons (hidden on md+)
```

---

## State Machine (`use-terminal.ts`)

Pure React hook, no library.

```ts
type OutputLine = { id: string; type: LineType; content: string; href?: string };
type RawLine    = Omit<OutputLine, "id">;
type LineType   = "input" | "output" | "error" | "link" | "info" | "divider" | "blank";
```

State: `history`, `input`, `cmdHistory`, `historyIdx`, `isThinking`.

Input handling:
- `Enter` → execute (async), push to history
- `↑ / ↓` → cycle command history
- `Tab` → autocomplete (first prefix match)
- Click anywhere → focus input

---

## Command Registry (`commands/index.ts`)

Resolution order:
1. Exact match → run handler
2. Levenshtein distance ≤ 3 → `{kind: "typo", suggestion}`
3. Anything else → `{kind: "ai"}` → OpenAI fallback

| Command      | Output |
|--------------|--------|
| `help`       | Command list + AI hint |
| `whoami`     | Bio blurb + link to /about |
| `skills`     | Categorized skill list + link to /skills |
| `experience` | Timeline table + link to /experience |
| `contact`    | Email, LinkedIn, GitHub as clickable links |
| `clear`      | Wipe history, re-print welcome |
| _anything_   | AI fallback (gpt-4o-mini) |

---

## AI Fallback

**Server action:** `src/actions/terminal-ai.ts`
- `"use server"`, calls `openai` package with `gpt-4o-mini`
- System prompt: `src/data/profile.ts` (profile content that ships with the app)
- Returns `RawLine[]` — same format as command handlers
- Shows `thinking...` line while awaiting, replaces it with response
- Graceful fallback on API error or missing key

**Profile data:** `src/data/profile.ts`
- Contains summary, full experience, skills, education, links
- Updated manually when career changes
- Source of truth for AI context (not the cv-content.md which is outside the project)

**Env var:** `OPENAI_API_KEY` in `.env.local`

---

## Styling

| Token       | Value |
|-------------|-------|
| Background  | `bg-gray-950` |
| Output text | `text-green-400 font-mono` |
| Muted text  | `text-gray-400` |
| Error text  | `text-red-400` |
| Link text   | `text-blue-400 hover:underline` |
| Input echo  | `text-white` |
| Prompt      | `~$` in `text-green-600` |
| Nav bar     | `bg-gray-900 border-b border-gray-800` |

---

## Files

```
app/(terminal)/
  layout.tsx                               dark shell layout
  terminal/page.tsx                        route + metadata

src/
  components/terminal/
    types.ts                               OutputLine, RawLine, LineType
    const.ts                               PROMPT, WINDOW_TITLE, MOBILE_COMMANDS, TERMINAL_SKILLS
    use-terminal.ts                        main hook (async, AI-aware)
    terminal-window.tsx                    macOS chrome wrapper
    terminal-output.tsx                    scrollable history
    terminal-line.tsx                      per-line renderer
    terminal-input-row.tsx                 prompt + input
    terminal-nav.tsx                       dark top bar
    command-chips.tsx                      mobile buttons
    commands/
      index.ts                             registry + resolveCommand + Levenshtein
      helpers.ts                           out(), info(), lnk(), err(), div(), blank()
      help.ts
      whoami.ts
      skills.ts
      experience.ts
      contact.ts
  actions/
    terminal-ai.ts                         OpenAI server action
  data/
    profile.ts                             system prompt content
```

---

## Next / Backlog

- [ ] Add `projects` command (async, GraphQL) 
- [ ] Add `cv` command (trigger PDF download)
- [ ] Add `open <page>` command (client-side navigate)
- [ ] Link from homepage: "Prefer the terminal? →"
- [ ] Add Visuality to `experience-sections/const.ts`
- [ ] Stream AI response token-by-token instead of waiting for full reply
- [ ] Persist command history to `localStorage`
