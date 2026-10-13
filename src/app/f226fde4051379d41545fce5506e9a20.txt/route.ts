export const dynamic = "force-static";

/** IndexNow key file (https://www.indexnow.org). Must stay in sync with scripts/indexnow.sh. */
export function GET() {
	return new Response("f226fde4051379d41545fce5506e9a20", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
