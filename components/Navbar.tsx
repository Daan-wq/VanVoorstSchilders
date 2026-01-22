"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/types/content";
import { motion, AnimatePresence } from "framer-motion";

const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "Aanpak", href: "/aanpak" },
    { label: "Diensten", href: "/diensten" },
    { label: "Impressies", href: "/impressies" },
    { label: "Nieuws", href: "/nieuws" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-primary-100 h-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <div className="flex-shrink-0 h-full flex items-center">
                    <Link href="/" className="flex items-center h-full">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl sm:text-3xl font-bold text-primary-950 font-display tracking-tight">
                                Van Voorst
                            </span>
                            <span className="text-2xl sm:text-3xl font-light text-primary-700 font-display tracking-tight">
                                Schilders
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Slot 2: Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Slot 3: CTA & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm"
                        >
                            Offerte Aanvragen
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-primary-700 hover:text-primary-900 hover:bg-primary-50 focus:outline-none"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white border-t border-primary-100 absolute w-full left-0 top-20 shadow-lg overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-md text-base font-medium text-primary-700 hover:text-primary-900 hover:bg-primary-50"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 mt-4 border-t border-primary-100">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-4 py-3 rounded-md text-base font-bold text-white bg-primary-600 hover:bg-primary-700"
                                >
                                    Vrijblijvende Offerte
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
}
