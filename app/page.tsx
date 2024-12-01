import { Img } from "@/components/image";
import { DownloadIcon, MailIcon } from "lucide-react";

import { MainHeading, SubHeading } from "@/components/headings";
import { Description } from "@/components/description";
import { Highlight } from "@/components/highlight";
import profilePic from "@/assets/profile.jpg";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";

export default async function Home() {
	return (
		<section className="py-12">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex flex-col items-center md:flex-row">
					<Img src={profilePic} alt="my-photo" />

					<div className="md:w-1/2 md:pl-8 lg:w-2/3 lg:pl-16">
						<MainHeading text="Michal Janiec" />
						<SubHeading text="Transforming ideas into engaging digital experiences." />

						<Description>
							I am an experienced and ambitious <Highlight> frontend developer</Highlight> with over
							3,5 years of experience in the industry. I possess the ability to write clean,
							efficient code and have experience leading development teams. I am focused on
							delivering high-quality products and enthusiastically take on new challenges to
							constantly expand my skill set.
						</Description>

						<div className="flex flex-row  sm:space-x-4 sm:space-y-0">
							<PrimaryButton
								href="mailto:michal.janiec95@gmail.com"
								icon={<MailIcon className="mr-2 inline-block h-5 w-5" />}
								text="Hire Me"
							/>

							<SecondaryButton
								href="/cv.pdf"
								icon={<DownloadIcon className="mr-2 inline-block h-5 w-5" />}
								text="Resume"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
