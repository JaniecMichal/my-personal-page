import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import type messages from "../messages/pl.json";
import { routing } from "./routing";

type Messages = typeof messages;

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale;
	const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

	return {
		locale,
		messages: ((await import(`../messages/${locale}.json`)) as { default: Messages }).default,
	};
});
