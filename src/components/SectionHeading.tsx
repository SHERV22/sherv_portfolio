"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <AnimateOnScroll className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted text-lg max-w-xl mx-auto">{subtitle}</p>
            )}
            <div className="mt-6 mx-auto w-16 h-px bg-olive/40" />
        </AnimateOnScroll>
    );
}
