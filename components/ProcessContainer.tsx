"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

interface ProcessContainerProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function ProcessContainer({ backgroundColor = "primary-50" }: ProcessContainerProps) {
    const steps = [
        {
            title: "Inventarisatie",
            description: "We komen bij u langs voor een vrijblijvend gesprek en een grondige opname van de situatie. Uw wensen staan centraal."
        },
        {
            title: "Offerte",
            description: "U ontvangt een heldere prijsopgave waarin alle werkzaamheden en materialen duidelijk staan omschreven. Geen verrassingen achteraf."
        },
        {
            title: "Uitvoering",
            description: "Na akkoord plannen we de werkzaamheden in. Wij werken netjes, dekken alles zorgvuldig af en beperken overlast tot een minimum."
        },
        {
            title: "Oplevering",
            description: "Als de laatste kwaststreek is gezet, lopen we samen alles na. Wij zijn pas tevreden als u dat bent en geven garantie op ons werk."
        }
    ];

    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">

                        {/* Left Column */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="lg:sticky lg:top-24"
                        >
                            <motion.span variants={fadeInUp} className="block text-primary-600 font-bold uppercase tracking-wide text-sm mb-4">
                                Werkwijze
                            </motion.span>
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-primary-950 mb-6">
                                Zo gaan wij te werk.
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-lg text-primary-600 mb-8 leading-relaxed">
                                Van het eerste contact tot de oplevering: wij houden van korte lijnen en heldere afspraken.
                            </motion.p>
                            <motion.div variants={fadeInUp}>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-primary-900 font-bold border-b-2 border-primary-300 hover:border-primary-600 transition-all group"
                                >
                                    Maak een afspraak
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right Column (Steps) */}
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="space-y-8"
                        >
                            {steps.map((step, idx) => (
                                <motion.div key={idx} variants={fadeInUp} className="flex gap-6 sm:gap-8">
                                    <span className="flex-shrink-0 text-4xl sm:text-5xl font-display font-bold text-primary-200 select-none">
                                        0{idx + 1}
                                    </span>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-primary-900 mb-2">{step.title}</h3>
                                        <p className="text-primary-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
