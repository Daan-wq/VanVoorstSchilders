"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

export default function PersonalCTA() {
    return (
        <section className="w-full bg-primary-50 py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="md:pr-12"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-primary-950 mb-6">Zullen we kennismaken?</motion.h2>
                    <motion.p variants={fadeInUp} className="text-lg text-primary-700 mb-8 leading-relaxed">
                        Ik kom graag bij u langs om uw wensen te bespreken en de situatie te bekijken. Geen verkoopverhaal, maar een eerlijk advies en een duidelijke offerte.
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
                        >
                            Vrijblijvende afspraak maken
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={scaleIn}
                    className="relative aspect-[3/4] md:aspect-square rounded-full md:rounded-3xl overflow-hidden border-8 border-white shadow-xl max-w-sm mx-auto md:max-w-none"
                >
                    <Image
                        src="/images/avatar.png" // Craftsman portrait
                        alt="Gerjan van Voorst"
                        fill
                        className="object-cover"
                    />
                </motion.div>

            </div>
        </section>
    );
}
