"use client";

import { ShieldCheck, Palette, ThumbsUp } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/utils/animations";

interface IconGridProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function IconGrid({ backgroundColor = "white" }: IconGridProps) {
    const isDarkBackground = backgroundColor !== "white";

    return (
        <section className={clsx("w-full py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                >

                    {/* Item 1 */}
                    <motion.div variants={scaleIn} className="flex flex-col items-center">
                        <div className={clsx("h-16 w-16 rounded-2xl flex items-center justify-center mb-6 text-primary-600", {
                            "bg-primary-50": !isDarkBackground,
                            "bg-white": isDarkBackground
                        })}>
                            <ShieldCheck className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-3">Jarenlange Ervaring</h3>
                        <p className="text-primary-600 leading-relaxed max-w-sm">
                            Vakmanschap door jarenlange ervaring in de regio Zwolle. Wij kennen de kneepjes van het vak.
                        </p>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div variants={scaleIn} className="flex flex-col items-center">
                        <div className={clsx("h-16 w-16 rounded-2xl flex items-center justify-center mb-6 text-primary-600", {
                            "bg-primary-50": !isDarkBackground,
                            "bg-white": isDarkBackground
                        })}>
                            <Palette className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-3">Gratis Kleuradvies</h3>
                        <p className="text-primary-600 leading-relaxed max-w-sm">
                            Twijfelt u over de kleur? Wij kijken graag met u mee voor de juiste sfeer en uitstraling.
                        </p>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div variants={scaleIn} className="flex flex-col items-center">
                        <div className={clsx("h-16 w-16 rounded-2xl flex items-center justify-center mb-6 text-primary-600", {
                            "bg-primary-50": !isDarkBackground,
                            "bg-white": isDarkBackground
                        })}>
                            <ThumbsUp className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-3">Afspraak is Afspraak</h3>
                        <p className="text-primary-600 leading-relaxed max-w-sm">
                            Duidelijke planning en heldere communicatie. U weet precies waar u aan toe bent.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
