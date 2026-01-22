"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from "@/utils/animations";

interface SplitContentProps {
    title: string;
    text: string;
    image: string;
    imagePosition?: "left" | "right";
    listItems?: string[];
    ctaLabel?: string;
    ctaLink?: string;
    isServiceHighlight?: boolean;
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function SplitContent({
    title,
    text,
    image,
    imagePosition = "left",
    listItems,
    ctaLabel,
    ctaLink,
    isServiceHighlight,
    backgroundColor = "white"
}: SplitContentProps) {
    return (
        <section className={clsx("w-full py-24 overflow-hidden", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Image Column */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={imagePosition === "left" ? fadeInLeft : fadeInRight}
                    className={clsx("relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl", {
                        "md:order-last": imagePosition === "right"
                    })}
                >
                    <Image src={image} alt={title} fill className="object-cover" />
                </motion.div>

                {/* Text Column */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {isServiceHighlight && (
                        <motion.span variants={fadeInUp} className="block text-primary-600 font-bold uppercase tracking-wide text-sm mb-4">
                            Dienst Uitgelicht
                        </motion.span>
                    )}
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">{title}</motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg text-primary-600 mb-8 leading-relaxed">
                        {text}
                    </motion.p>

                    {listItems && listItems.length > 0 && (
                        <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                            {listItems.map((item, idx) => (
                                <motion.li key={idx} variants={fadeInUp} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-primary-700">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}

                    {ctaLabel && ctaLink && (
                        <motion.div variants={fadeInUp}>
                            <Link
                                href={ctaLink}
                                className="inline-flex items-center justify-center px-8 py-3 bg-primary-900 text-white font-semibold rounded-full hover:bg-primary-800 transition-colors"
                            >
                                {ctaLabel}
                            </Link>
                        </motion.div>
                    )}
                </motion.div>

            </div>
        </section>
    );
}
