"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/utils/animations";

interface ArticleContainerProps {
    author: {
        name: string;
        role: string;
        image: string;
    };
    featuredImage: string;
    title: string;
    content: string; // The text content
    category: string;
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function ArticleContainer({
    author,
    featuredImage,
    title,
    content,
    category,
    backgroundColor = "primary-50" // Default to light gray as per spec
}: ArticleContainerProps) {
    return (
        <section className={clsx("w-full py-12 md:py-24", {
            "bg-white": backgroundColor === "white",
            "bg-primary-50": backgroundColor === "primary-50",
            "bg-off-white": backgroundColor === "off-white"
        })}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Inner Sheet */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                    className="bg-white rounded-2xl shadow-sm p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12">

                        {/* Left Column (Author Sidebar) */}
                        <div className="relative">
                            <motion.div variants={fadeInUp} className="md:sticky md:top-8 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-6 border-b md:border-b-0 border-primary-100 pb-8 md:pb-0">
                                <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-50">
                                    <Image
                                        src={author.image}
                                        alt={author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-primary-400 uppercase tracking-wide mb-1">Geschreven door</span>
                                    <h4 className="font-bold text-primary-900 text-lg">{author.name}</h4>
                                    <p className="text-sm text-primary-500">{author.role}</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column (Main Content) */}
                        <div>
                            {/* Featured Image inside content column */}
                            <motion.div variants={scaleIn} className="relative aspect-video w-full rounded-xl overflow-hidden mb-12 bg-primary-50">
                                <Image
                                    src={featuredImage}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-800 uppercase tracking-wide">
                                    {category}
                                </div>
                            </motion.div>

                            <article className="prose prose-lg prose-primary max-w-none">
                                <motion.div variants={staggerContainer} className="text-primary-600 leading-relaxed space-y-6">
                                    {content.split('\n').map((paragraph, idx) => (
                                        <motion.p variants={fadeInUp} key={idx}>{paragraph}</motion.p>
                                    ))}
                                </motion.div>
                            </article>

                            {/* CTA at bottom of article */}
                            <motion.div variants={fadeInUp} className="mt-12 pt-12 border-t border-primary-100">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-900 text-white font-bold rounded-xl hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Ook zo'n resultaat? Vraag offerte aan
                                </Link>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
