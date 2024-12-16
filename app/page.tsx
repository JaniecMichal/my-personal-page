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
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex flex-col items-center md:flex-row">
					<Img src={profilePic} alt="my--profile-photo" showBorder />

					<div className="md:w-1/2 md:pl-8 lg:w-2/3 lg:pl-16">
						<SmallHeading text="My name is" />
						<MainHeading text="Michal Janiec" />
						<DynamicLabel text="I am Frontend Developer &" dynamicTexts={DYNAMIC_TEXTS} />

						<div className="mt-12 flex flex-row sm:space-x-4 sm:space-y-0">
							<PrimaryButton
								href="mailto:michal.janiec95@gmail.com"
								icon={<FaMailBulk className="mr-2 inline-block h-5 w-5" />}
								text="Hire Me"
							/>

							<SecondaryButton
								href="/cv.pdf"
								icon={<FaDownload className="mr-2 inline-block h-5 w-5" />}
								text="Resume"
							/>
						</div>
						<Socials />
					</div>
				</div>
			</div>
		</section>
	);
}
