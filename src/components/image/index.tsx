import Image, { StaticImageData } from "next/image";

type ImageProps = {
	src: string | StaticImageData;
	alt: string;
	width?: number;
	height?: number;
};

export const Img = ({ src, alt, width, height }: ImageProps) => {
	return (
		<div className="mb-8 md:mb-0 md:w-1/2">
			<Image
				src={src}
				alt={alt}
				width={width || 500}
				height={height || 500}
				className="rounded-lg shadow-md"
			/>
		</div>
	);
};
