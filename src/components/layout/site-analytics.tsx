"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/react";

/**
 * Vercel Analytics without the owner's own visits. To opt a browser out, run once in the console
 * on the live site: localStorage.setItem("va-disable", "1"). Covers page views and custom events.
 */
const skipOwnVisits = (event: BeforeSendEvent) => {
	try {
		if (localStorage.getItem("va-disable")) return null;
	} catch {
		// Storage blocked (private mode): count the visit.
	}
	return event;
};

export function SiteAnalytics() {
	return <Analytics beforeSend={skipOwnVisits} />;
}
