"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function TrustStrip() {
    return (
        <section className="w-full bg-white py-12 border-b border-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-primary-400 mb-8 uppercase tracking-widest">
                    Wij werken met topmerken
                </p>
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex flex-wrap justify-center items-center gap-12 sm:gap-16"
                >
                    {/* Brand 1: Sigma */}
                    <motion.div variants={fadeInUp} className="h-8 relative w-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Text Fallback for logo */}
                        <span className="text-2xl font-bold font-display text-primary-800">SIGMA</span>
                    </motion.div>

                    {/* Brand 2: Sikkens */}
                    <motion.div variants={fadeInUp} className="h-8 relative w-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-bold font-display text-primary-800">Sikkens</span>
                    </motion.div>

                    {/* Brand 3: Veveo */}
                    <motion.div variants={fadeInUp} className="h-8 relative w-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-bold font-display text-primary-800">Veveo</span>
                    </motion.div>

                    {/* Brand 4: Trimental */}
                    <motion.div variants={fadeInUp} className="h-8 relative w-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-bold font-display text-primary-800">Trimental</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
