import { Variants } from "framer-motion";

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};


// Standard transition settings for consistency
export const transition = {
    type: "spring",
    damping: 20,
    stiffness: 100,
    duration: 0.5,
};

// Orchestration for staggered children (e.g. lists, grids)
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1, // Slight delay to ensure layout is ready
        },
    },
};

// Basic fade in from bottom
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 100,
            duration: 0.5
        }
    },
};

// Basic fade in from left
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 100
        }
    },
};

// Basic fade in from right
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 100
        }
    },
};

// Simple scale in for cards or images
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200
        }
    },
};

// Image reveal with mask effect (optional advanced effect)
export const imageReveal: Variants = {
    hidden: {
        clipPath: "inset(100% 0 0 0)",
        scale: 1.1
    },
    show: {
        clipPath: "inset(0% 0 0 0)",
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1] // Quartic ease out
        }
    },
};

// Button hover effect
export const buttonHover: Variants = {
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    tap: {
        scale: 0.95,
        transition: { duration: 0.1 }
    }
};

// SVG Draw effect for paint strokes
export const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: {
        pathLength: 1,
        opacity: 0.7, // Increased visibility
        transition: {
            pathLength: { type: "spring", duration: 2, bounce: 0, delay: 0.5 },
            opacity: { duration: 0.5, delay: 0.5 }
        }
    }
};

