"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const faqs = [
    {
        question: "Is de offerte echt vrijblijvend?",
        answer: "Ja, absoluut. Wij komen graag langs om de situatie te bekijken en uw wensen te bespreken. Daarna ontvangt u een offerte op maat. U zit nergens aan vast."
    },
    {
        question: "In welke regio zijn jullie werkzaam?",
        answer: "Wij zijn voornamelijk actief in Zwolle en de directe omgeving (o.a. Hattem, Dalfsen, Kampen). Woont u iets verder weg? Neem gerust contact op, dan kijken we naar de mogelijkheden."
    },
    {
        question: "Jan, geven jullie garantie op het schilderwerk?",
        answer: "Zeker. Wij staan achter onze kwaliteit. Op buitenschilderwerk geven wij standaard garantie, afhankelijk van de staat van de ondergrond. Dit wordt duidelijk vermeld in de offerte."
    },
    {
        question: "Werken jullie ook in de winter?",
        answer: "Ja, voor binnenschilderwerk zijn wij het hele jaar beschikbaar. Voor buitenwerk maken wij in de winter gebruik van speciale doorwerkverven of afscherming, mits het weer het toelaat."
    }
];

interface FaqAccordionProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function FaqAccordion({ backgroundColor = "white" }: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-primary-950">Veelgestelde vragen</motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="space-y-4"
                >
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="border border-primary-100 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-primary-50 transition-colors text-left"
                            >
                                <span className="font-bold text-primary-900 pr-8">{faq.question}</span>
                                {openIndex === idx ? (
                                    <Minus className="h-5 w-5 text-primary-600 flex-shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-primary-600 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-primary-600 leading-relaxed border-t border-primary-50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
