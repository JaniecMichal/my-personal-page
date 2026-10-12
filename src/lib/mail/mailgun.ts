import "server-only";
import type { MailMessage, MailProvider } from "./types";

const API_BASE = { eu: "https://api.eu.mailgun.net", us: "https://api.mailgun.net" } as const;

type MailgunConfig = {
	apiKey: string;
	domain: string;
	from: string;
	region: keyof typeof API_BASE;
};

/** Mailgun over its HTTP API (no SDK needed). */
export function createMailgunProvider(config: MailgunConfig): MailProvider {
	const endpoint = `${API_BASE[config.region]}/v3/${config.domain}/messages`;
	const auth = `Basic ${Buffer.from(`api:${config.apiKey}`).toString("base64")}`;

	return {
		async send(message: MailMessage) {
			const body = new URLSearchParams({
				from: config.from,
				to: message.to,
				subject: message.subject,
				text: message.text,
				html: message.html,
			});
			if (message.replyTo) body.set("h:Reply-To", message.replyTo);
			message.tags?.forEach((tag) => body.append("o:tag", tag));

			const res = await fetch(endpoint, { method: "POST", headers: { Authorization: auth }, body });
			if (!res.ok) {
				throw new Error(`Mailgun responded ${res.status}: ${await res.text()}`);
			}
		},
	};
}
