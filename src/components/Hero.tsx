"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
                delayChildren: shouldReduceMotion ? 0 : 0.3,
            },
        },
    };

    const childVariants = {
        hidden: shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1] as const,
            },
        },
    };

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center min-h-screen overflow-hidden px-6"
        >
            {/* Ambient background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-olive/[0.04] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-cream/[0.02] rounded-full blur-[100px]" />
            </div>

            <motion.div
                className="relative z-10 max-w-4xl mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Small label */}
                <motion.p
                    variants={childVariants}
                    className="text-olive text-sm tracking-[0.3em] uppercase mb-8"
                >
                    Full-Stack Developer & Designer
                </motion.p>

                {/* Main headline */}
                <motion.h1
                    variants={childVariants}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.1] tracking-tight mb-8"
                >
                    Crafting digital
                    <br />
                    <span className="text-olive-light">experiences</span> with
                    <br />
                    precision
                </motion.h1>

                {/* Subheadline keywords */}
                <motion.div
                    variants={childVariants}
                    className="flex items-center justify-center gap-4 md:gap-6 text-muted text-sm md:text-base tracking-[0.2em] uppercase mb-12"
                >
                    <span>Code</span>
                    <span className="w-1 h-1 rounded-full bg-olive" />
                    <span>Craft</span>
                    <span className="w-1 h-1 rounded-full bg-olive" />
                    <span>Consistency</span>
                </motion.div>

                {/* CTA */}
                <motion.div variants={childVariants}>
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 text-offwhite text-sm border border-border hover:border-olive/50 px-8 py-3 rounded-full transition-all duration-500 hover:bg-olive/[0.08] group"
                    >
                        View Selected Work
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5"
                >
                    <div className="w-0.5 h-1.5 bg-muted rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
