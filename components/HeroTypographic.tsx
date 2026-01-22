"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/utils/animations";
import { PaintStroke } from "./PaintStroke";


export default function HeroTypographic() {
    return (
        <section className="w-full bg-white pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-end">

                {/* Left Column (Heading) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInLeft}
                >
                    <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-950 leading-tight inline-block">
                        <span className="relative z-10">Uw vakschilder in Zwolle en omgeving.</span>
                        <PaintStroke className="absolute bottom-0 left-0 w-full h-14 sm:h-20 text-primary-200 z-0 pointer-events-none translate-y-6" />
                    </h1>
                </motion.div>

                {/* Right Column (Body) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInRight}
                    className="md:border-l md:border-primary-100 md:pl-8"
                >
                    <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                        Betrouwbaarheid en vakmanschap staan bij ons centraal. Wij denken met u mee van kleuradvies tot de laatste kwaststreek, zodat u zorgeloos kunt genieten van het resultaat.
                    </p>
                    <Link
                        href="/contact"
                        className="text-primary-900 font-bold border-b-2 border-primary-300 hover:border-primary-600 transition-all"
                    >
                        Maak kennis met ons
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
