import Image, { StaticImageData } from "next/image";

type ImageProps = {
	src: string | StaticImageData;
	alt: string;
	width?: number;
	height?: number;
	showBorder?: boolean;
};

export const Img = ({ src, alt, width, height, showBorder }: ImageProps) => {
	return (
		<div className="relative mb-8">
			<Image
				src={src}
				alt={alt}
				width={width || 500}
				height={height || 500}
				className="rounded-lg shadow-md"
			/>
			{showBorder && (
				<div className="absolute inset-0 rounded-lg border-4 border-b-purple-500 border-l-blue-500 border-r-purple-500 border-t-blue-500"></div>
			)}
		</div>
	);
};
