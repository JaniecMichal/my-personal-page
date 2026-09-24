import "server-only";
import { localSource } from "./local";
import { sanitySource } from "./sanity";
import type { ContentSource } from "./source";

export type * from "./types";

/**
 * The content source for the whole app. Switch with `CONTENT_SOURCE=sanity`
 * once the Sanity adapter is implemented (see ./sanity/README.md).
 */
export const content: ContentSource =
	process.env.CONTENT_SOURCE === "sanity" ? sanitySource : localSource;
