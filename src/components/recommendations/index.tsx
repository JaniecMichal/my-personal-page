"use client"; // Ten komponent używa hooków Reacta 18

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import stylów Swiper
import "swiper/css";
import "swiper/css/navigation";

interface Recommendation {
	image: string;
	name: string;
	title: string;
	text: string;
}

const recommendations: Recommendation[] = [
	{
		image: "/images/person1.jpg",
		name: "Jan Kowalski",
		title: "Senior Developer",
		text: "Michał to utalentowany frontend developer z pasją do tworzenia pięknych i funkcjonalnych interfejsów. Jego umiejętności i zaangażowanie są imponujące.",
	},
	{
		image: "/images/person2.jpg",
		name: "Anna Nowak",
		title: "Project Manager",
		text: "Michał jest cennym członkiem zespołu, zawsze chętnym do pomocy i dzielenia się swoją wiedzą. Jego pozytywne nastawienie i kreatywność inspirują innych.",
	},
	{
		image: "/images/person2.jpg",
		name: "Anna Nowak",
		title: "Project Manager",
		text: "Michał jest cennym członkiem zespołu, zawsze chętnym do pomocy i dzielenia się swoją wiedzą. Jego pozytywne nastawienie i kreatywność inspirują innych.",
	},
	{
		image: "/images/person2.jpg",
		name: "Anna Nowak",
		title: "Project Manager",
		text: "Michał jest cennym członkiem zespołu, zawsze chętnym do pomocy i dzielenia się swoją wiedzą. Jego pozytywne nastawienie i kreatywność inspirują innych.",
	},
	{
		image: "/images/person2.jpg",
		name: "Anna Nowak",
		title: "Project Manager",
		text: "Michał jest cennym członkiem zespołu, zawsze chętnym do pomocy i dzielenia się swoją wiedzą. Jego pozytywne nastawienie i kreatywność inspirują innych.",
	},
	// Dodaj więcej rekomendacji
];

export const Recommendations = () => {
	return (
		<section className="relative mt-16 py-16">
			<div className="absolute inset-x-0 top-0 mx-auto h-2 w-[66%] bg-gradient-to-r from-blue-500 to-purple-500 md:w-[36%]"></div>
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<h3 className="mb-8 text-center text-3xl font-bold text-gray-800">Testimonials</h3>

				<Swiper
					modules={[Navigation]}
					navigation
					pagination={{ clickable: true }}
					spaceBetween={30}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
				>
					{recommendations.map((recommendation, index) => (
						<SwiperSlide key={index} className="rounded-lg p-6 shadow-md">
							<div className="mb-4 flex items-center">
								<Image
									src={recommendation.image}
									alt={recommendation.name}
									width={80}
									height={80}
									className="rounded-full"
								/>
								<div className="ml-4">
									<h3 className="text-lg font-medium text-gray-800">{recommendation.name}</h3>
									<p className="text-gray-600">{recommendation.title}</p>
								</div>
							</div>
							<p className="text-gray-600">{recommendation.text}</p>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-[66%] bg-gradient-to-r from-blue-500 to-purple-500 md:w-[36%]"></div>
		</section>
	);
};
