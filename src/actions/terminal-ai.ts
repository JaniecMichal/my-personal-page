"use server";

import OpenAI from "openai";
import { PROFILE_SYSTEM_PROMPT } from "@/data/profile";
import type { RawLine } from "@/components/terminal/types";
import { out, err, info } from "@/components/terminal/commands/helpers";

export async function askTerminalAI(query: string): Promise<RawLine[]> {
	const apiKey = process.env.OPENAI_API_KEY;

	if (!apiKey) {
		// No AI configured: behave like a plain shell instead of exposing the missing key.
		return [err(`command not found: ${query.slice(0, 40)}`), info("Type `help` to see available commands.")];
	}

	try {
		const client = new OpenAI({ apiKey });

		const response = await client.chat.completions.create({
			model: "gpt-4o-mini",
			max_tokens: 300,
			messages: [
				{ role: "system", content: PROFILE_SYSTEM_PROMPT },
				{ role: "user", content: query },
			],
		});

		const text = response.choices[0]?.message?.content?.trim() ?? "";

		if (!text) return [err("No response received.")];

		return text
			.split("\n")
			.map((line) => line.trimEnd())
			.map((line): RawLine => (line === "" ? { type: "blank", content: "" } : out(line)));
	} catch (e) {
		const message = e instanceof Error ? e.message : "Unknown error";
		return [
			err("AI assistant error: " + message),
			info("Try built-in commands: help, whoami, skills, experience, contact"),
		];
	}
}
