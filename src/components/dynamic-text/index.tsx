"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

type DynamicLabelProps = {
	text: string;
	dynamicTexts: string[];
};

export const DynamicLabel = ({ text, dynamicTexts }: DynamicLabelProps) => {
	const [currentText, setCurrentText] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentText((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<p className="text-2xl text-gray-800">
			{text}{" "}
			<AnimatePresence mode="wait">
				<motion.span
					key={currentText}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="font-bold text-blue-600"
				>
					{dynamicTexts[currentText]}
				</motion.span>
			</AnimatePresence>
		</p>
	);
};
