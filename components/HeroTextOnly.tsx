"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { PaintStroke } from "./PaintStroke";


interface HeroTextOnlyProps {
    label?: string;
    title?: string;
    text?: string;
}

export default function HeroTextOnly({
    label = "Portfolio",
    title = "Ons werk spreekt voor zich",
    text = "Bekijk een selectie van onze recent opgeleverde projecten in Zwolle en omgeving. Van strak lakwerk tot hoogwaardige wandafwerking."
}: HeroTextOnlyProps) {
    return (
        <section className="w-full bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show" // Animate immediately on mount as this is usually a top-level page header
                className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
                <motion.span
                    variants={fadeInUp}
                    className="block text-primary-500 font-bold uppercase tracking-wide text-sm mb-4"
                >
                    {label}
                </motion.span>
                <motion.h1
                    variants={fadeInUp}
                    className="relative text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-950 mb-8 inline-block"
                >
                    <span className="relative z-10">{title}</span>
                    <PaintStroke className="absolute bottom-0 left-0 w-full h-10 sm:h-14 text-primary-200 z-0 pointer-events-none translate-y-3" />
                </motion.h1>
                <motion.p
                    variants={fadeInUp}
                    className="text-lg text-primary-600 leading-relaxed"
                >
                    {text}
                </motion.p>
            </motion.div>
        </section>
    );
}
