import { getTranslations } from "next-intl/server";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export default async function NotFound() {
	const t = await getTranslations("notFound");

	return (
		<section className="dotgrid flex grow items-center py-24">
			<Container className="flex flex-col gap-6">
				<p className="font-dots text-7xl font-black text-accent md:text-9xl">404</p>
				<h1 className="ab font-serif text-5xl md:text-7xl">{t("title")}</h1>
				<p className="text-ink-soft">{t("lead")}</p>
				<ButtonLink href="/" className="self-start">
					{t("home")}
				</ButtonLink>
			</Container>
		</section>
	);
}
