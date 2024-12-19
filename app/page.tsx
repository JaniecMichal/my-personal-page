import { Img } from "@/design-system/image";
import { FaDownload, FaMailBulk } from "react-icons/fa";

import { MainHeading } from "@/design-system/headings";
import { PrimaryButton, SecondaryButton } from "@/design-system/buttons";
import { SmallHeading } from "@/design-system/headings/small";
import { DynamicLabel } from "@/design-system/dynamic-text";
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
		<section>
			<div className="mx-auto flex max-w-[1420px] flex-col items-center justify-center px-4 md:px-6 lg:flex-row lg:px-8">
				<Img width={600} height={600} src={profilePic} alt="my--profile-photo" showBorder />

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
							href="/michal_janiec_cv.pdf"
							icon={<FaDownload className="mr-1 inline-block h-5 w-5 lg:mr-2" />}
							text="Resume"
							download="michal_janiec_cv"
						/>
					</div>
					<Socials />
				</div>
			</div>
			{/* below will be section with recommendations */}
			{/* 		<Recommendations /> */}
		</section>
	);
}
