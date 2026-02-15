"use client";

import { achievements } from "@/data/achievements";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Achievements() {
    return (
        <section id="journey" className="py-28 md:py-36 px-6 bg-charcoal-light">
            <div className="max-w-3xl mx-auto">
                <SectionHeading
                    title="Journey"
                    subtitle="Key milestones along the way"
                />

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-12">
                        {achievements.map((item, index) => (
                            <AnimateOnScroll
                                key={item.title}
                                delay={index * 0.1}
                                direction="left"
                            >
                                <div className="relative pl-14 md:pl-18">
                                    {/* Timeline dot */}
                                    <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-charcoal border-2 border-olive" />

                                    {/* Year badge */}
                                    <span className="inline-block text-olive text-xs tracking-[0.15em] uppercase mb-2">
                                        {item.year}
                                    </span>

                                    <h3 className="font-serif text-xl text-cream mb-2 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
