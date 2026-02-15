"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Skills() {
    const shouldReduceMotion = useReducedMotion();
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section id="skills" className="py-28 md:py-36 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Skill Set"
                    subtitle="The tools and technologies behind the work"
                />

                <div className="grid md:grid-cols-2 gap-12">
                    {skillCategories.map((category, catIdx) => (
                        <AnimateOnScroll key={category.category} delay={catIdx * 0.1}>
                            <div>
                                <h3 className="text-olive text-sm tracking-[0.2em] uppercase mb-6">
                                    {category.category}
                                </h3>
                                <div className="grid gap-3">
                                    {category.skills.map((skill, skillIdx) => {
                                        const isHovered =
                                            hoveredSkill === `${category.category}-${skill.name}`;
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                className="bg-card border border-border rounded-xl p-5 cursor-default transition-colors duration-300 hover:bg-card-hover hover:border-border-hover"
                                                onMouseEnter={() =>
                                                    setHoveredSkill(
                                                        `${category.category}-${skill.name}`
                                                    )
                                                }
                                                onMouseLeave={() => setHoveredSkill(null)}
                                                whileHover={
                                                    shouldReduceMotion
                                                        ? {}
                                                        : { scale: 1.02, transition: { duration: 0.25 } }
                                                }
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: catIdx * 0.08 + skillIdx * 0.06,
                                                }}
                                            >
                                                <h4 className="text-offwhite text-sm font-medium mb-1">
                                                    {skill.name}
                                                </h4>
                                                <motion.p
                                                    className="text-muted text-xs leading-relaxed overflow-hidden"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={
                                                        isHovered
                                                            ? { height: "auto", opacity: 1 }
                                                            : { height: 0, opacity: 0 }
                                                    }
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {skill.description}
                                                </motion.p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
