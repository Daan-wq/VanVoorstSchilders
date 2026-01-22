"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

interface PortfolioGridProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
    limit?: number;
    itemLinkDestination?: "slug" | "overview";
}

export default function PortfolioGrid({
    backgroundColor = "white",
    limit,
    itemLinkDestination = "slug"
}: PortfolioGridProps) {
    const visibleProjects = limit ? projects.slice(0, limit) : projects;

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
                    className="flex flex-col md:flex-row justify-between items-end mb-12"
                >
                    <div>
                        <motion.span variants={fadeInUp} className="block text-primary-600 font-bold uppercase tracking-wide text-sm mb-2">Impressies</motion.span>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-primary-950">Recent opgeleverd werk</motion.h2>
                    </div>
                    <motion.div variants={fadeInUp}>
                        <Link href="/impressies" className="hidden md:inline-block text-primary-600 font-semibold hover:text-primary-800 transition-colors mt-4 md:mt-0">
                            Bekijk alle projecten &rarr;
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {visibleProjects.map((item) => (
                        <motion.div key={item.id} variants={fadeInUp}>
                            <Link
                                href={itemLinkDestination === "slug" ? `/impressies/${item.slug}` : "/impressies"}
                                className="block group relative aspect-[16/9] rounded-xl overflow-hidden bg-primary-100 cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="inline-block px-3 py-1 rounded-full border border-white/30 text-xs font-medium text-white backdrop-blur-sm mb-2 w-fit"
                                    >
                                        {item.category}
                                    </motion.span>
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-xl font-bold text-white group-hover:text-primary-50 transition-colors"
                                    >
                                        {item.title}
                                    </motion.h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/impressies" className="inline-block px-6 py-3 border border-primary-200 text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
                        Bekijk alle projecten
                    </Link>
                </div>
            </div>
        </section>
    );
}
