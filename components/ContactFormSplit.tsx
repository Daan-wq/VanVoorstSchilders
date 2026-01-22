"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

interface ContactFormSplitProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function ContactFormSplit({ backgroundColor = "white" }: ContactFormSplitProps) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const isDarkBackground = backgroundColor !== "white";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            console.log("Form submitted");
        }, 1500);
    };

    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                {/* Left Column (Form) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={clsx("p-8 sm:p-12 rounded-2xl", isDarkBackground ? "bg-white shadow-lg" : "bg-primary-50")}
                >
                    <h2 className="text-3xl font-bold text-primary-950 mb-6">Stuur een bericht</h2>

                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-100 border border-green-200 text-green-800 p-6 rounded-lg"
                        >
                            <p className="font-bold">Bedankt voor uw bericht!</p>
                            <p>Wij nemen zo snel mogelijk contact met u op.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot */}
                            <input type="text" name="_honey" className="hidden" />

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">Naam</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    placeholder="Uw naam"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">E-mailadres</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    placeholder="uw@email.nl"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">Telefoonnummer</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    placeholder="06 12345678"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">Uw bericht</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                    placeholder="Waar kunnen we u mee helpen?"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === "submitting"}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-primary-900 text-white font-bold rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Verzenden..." : "Bericht versturen"}
                            </motion.button>

                            <p className="text-xs text-primary-500 text-center mt-4">
                                Wij behandelen uw gegevens vertrouwelijk. Zie onze privacyverklaring.
                            </p>
                        </form>
                    )}
                </motion.div>

                {/* Right Column (Image) */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={scaleIn}
                    className="relative aspect-[4/5] md:aspect-auto h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" // Construction/worker team
                        alt="Team aan het werk"
                        fill
                        className="object-cover"
                    />
                </motion.div>

            </div>
        </section>
    );
}
