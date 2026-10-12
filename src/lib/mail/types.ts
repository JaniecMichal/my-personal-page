export type MailMessage = {
	to: string;
	subject: string;
	text: string;
	html: string;
	replyTo?: string;
	tags?: string[];
};

/** Any provider (Mailgun today) implements this, so switching costs one file. */
export interface MailProvider {
	send(message: MailMessage): Promise<void>;
}
