import "server-only";
import { createMailgunProvider } from "./mailgun";
import type { MailProvider } from "./types";

export type { MailMessage } from "./types";

/** Logs instead of sending, for local development without Mailgun credentials. */
const consoleProvider: MailProvider = {
	async send(message) {
		console.info("[mail] Mailgun is not configured, so the message was only logged:\n", message.text);
	},
};

export function getMailer(): MailProvider | null {
	const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_FROM, MAILGUN_REGION } = process.env;

	if (MAILGUN_API_KEY && MAILGUN_DOMAIN) {
		return createMailgunProvider({
			apiKey: MAILGUN_API_KEY,
			domain: MAILGUN_DOMAIN,
			from: MAILGUN_FROM ?? `mjaniec.it <no-reply@${MAILGUN_DOMAIN}>`,
			region: MAILGUN_REGION === "us" ? "us" : "eu",
		});
	}

	return process.env.NODE_ENV === "production" ? null : consoleProvider;
}
