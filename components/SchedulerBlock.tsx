"use client";

import Link from "next/link";
import { CheckCircle2, Calendar } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

interface SchedulerBlockProps {
    backgroundColor?: "white" | "primary-50" | "off-white" | "primary-950";
}

export default function SchedulerBlock({ backgroundColor = "primary-950" }: SchedulerBlockProps) {
    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white",
            "bg-primary-950": backgroundColor === "primary-950",
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className={clsx("text-3xl font-bold mb-8", {
                                "text-white": backgroundColor === "primary-950",
                                "text-primary-950": backgroundColor !== "primary-950"
                            })}
                        >
                            Klaar voor de start?
                        </motion.h2>
                        <ul className="space-y-4 mb-8">
                            <motion.li variants={fadeInUp} className="flex items-center gap-3">
                                <CheckCircle2 className={clsx("h-6 w-6 flex-shrink-0", {
                                    "text-primary-400": backgroundColor === "primary-950",
                                    "text-primary-500": backgroundColor !== "primary-950"
                                })} />
                                <span className={clsx("text-lg", {
                                    "text-primary-100": backgroundColor === "primary-950",
                                    "text-primary-700": backgroundColor !== "primary-950"
                                })}>
                                    Gratis en vrijblijvend kennismaken
                                </span>
                            </motion.li>
                            <motion.li variants={fadeInUp} className="flex items-center gap-3">
                                <CheckCircle2 className={clsx("h-6 w-6 flex-shrink-0", {
                                    "text-primary-400": backgroundColor === "primary-950",
                                    "text-primary-500": backgroundColor !== "primary-950"
                                })} />
                                <span className={clsx("text-lg", {
                                    "text-primary-100": backgroundColor === "primary-950",
                                    "text-primary-700": backgroundColor !== "primary-950"
                                })}>
                                    Direct advies op locatie
                                </span>
                            </motion.li>
                            <motion.li variants={fadeInUp} className="flex items-center gap-3">
                                <CheckCircle2 className={clsx("h-6 w-6 flex-shrink-0", {
                                    "text-primary-400": backgroundColor === "primary-950",
                                    "text-primary-500": backgroundColor !== "primary-950"
                                })} />
                                <span className={clsx("text-lg", {
                                    "text-primary-100": backgroundColor === "primary-950",
                                    "text-primary-700": backgroundColor !== "primary-950"
                                })}>
                                    Binnen 2 werkdagen reactie
                                </span>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Right Column (Widget Mockup) */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="bg-white rounded-2xl p-8 shadow-2xl transform transition-transform hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-4 mb-6 border-b border-primary-100 pb-6">
                            <div className="h-12 w-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary-900">Plan een afspraak</h3>
                                <p className="text-sm text-primary-500">Kies een moment dat u uitkomt</p>
                            </div>
                        </div>

                        {/* Visual Mockup of slots */}
                        <div className="space-y-3">
                            <div className="h-12 w-full bg-primary-50 rounded-lg border border-primary-100 flex items-center px-4 text-primary-400 text-sm">
                                Selecteer datum...
                            </div>
                            <div className="h-12 w-full bg-primary-50 rounded-lg border border-primary-100 flex items-center px-4 text-primary-400 text-sm">
                                Selecteer tijd...
                            </div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="mailto:info@vanvoorstschilders.nl"
                                    className="flex items-center justify-center h-12 w-full bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors mt-4"
                                >
                                    Aanvraag versturen
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
