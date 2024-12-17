import { Img } from "@/components/image";
import { FaDownload, FaMailBulk } from "react-icons/fa";

import { MainHeading } from "@/components/headings";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { SmallHeading } from "@/components/headings/small";
import { DynamicLabel } from "@/components/dynamic-text";
import { Socials } from "@/components/socials";

import profilePic from "@/assets/profile.jpg";

const DYNAMIC_TEXTS = [
	"determined person",
	"proactive teammate",
	"runner",
	"sports addict",
	"leader",
];

export default async function Home() {
	return (
		<section className="py-12">
			<div className="mx-auto flex max-w-[1420px] flex-col items-center justify-center px-4 md:px-6 lg:flex-row lg:px-8">
				<Img src={profilePic} alt="my--profile-photo" showBorder />

				<div className="min-w-full md:w-2/3 md:min-w-min md:pl-8 lg:pl-16">
					<SmallHeading text="My name is" />
					<MainHeading text="Michal Janiec" />
					<DynamicLabel text="I am Frontend Developer &" dynamicTexts={DYNAMIC_TEXTS} />

					<div className="mt-6 flex flex-row gap-2 sm:space-x-4 sm:space-y-0 lg:mt-8">
						<PrimaryButton
							href="mailto:michal.janiec95@gmail.com"
							icon={<FaMailBulk className="mr-1 inline-block h-5 w-5 lg:mr-2" />}
							text="Hire Me"
						/>

						<SecondaryButton
							href="/cv.pdf"
							icon={<FaDownload className="mr-1 inline-block h-5 w-5 lg:mr-2" />}
							text="Resume"
						/>
					</div>
					<Socials />
				</div>
			</div>
		</section>
	);
}
