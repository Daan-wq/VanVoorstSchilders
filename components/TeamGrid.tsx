"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const teamMembers = [
    {
        name: "Gerjan van Voorst",
        role: "Eigenaar & Meesterschilder",
        image: "/images/avatar.png", // Craftsman portrait
        color: "bg-primary-100"
    }
];

interface TeamGridProps {
    backgroundColor?: "white" | "primary-50" | "off-white";
}

export default function TeamGrid({ backgroundColor = "white" }: TeamGridProps) {
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
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-primary-950">De gezichten achter Van Voorst Schilders</motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="flex justify-center"
                >
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className={`rounded-2xl overflow-hidden ${member.color} pt-8 px-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300 max-w-sm w-full`}
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-primary-900">{member.name}</h3>
                                <p className="text-primary-600 font-medium text-sm mt-1 uppercase tracking-wide">{member.role}</p>
                            </div>
                            <div className="relative w-48 h-56 mt-auto">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top rounded-t-2xl"
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
