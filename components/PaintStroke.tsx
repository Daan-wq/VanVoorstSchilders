"use client";

import { motion } from "framer-motion";
import { draw } from "@/utils/animations";

export const PaintStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 400 60"
            preserveAspectRatio="none"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                variants={draw}
                d="M10 40C80 35 150 50 220 40C290 30 360 40 390 35"
                stroke="currentColor"
                strokeWidth="30"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
