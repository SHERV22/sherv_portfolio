"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
};

export default function AnimateOnScroll({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimateOnScrollProps) {
    const shouldReduceMotion = useReducedMotion();
    const offset = directionOffset[direction];

    return (
        <motion.div
            className={className}
            initial={
                shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, x: offset.x, y: offset.y }
            }
            whileInView={
                shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, x: 0, y: 0 }
            }
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.1, 0.25, 1] as const,
            }}
        >
            {children}
        </motion.div>
    );
}
