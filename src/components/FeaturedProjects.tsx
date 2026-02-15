"use client";

import { motion, useReducedMotion } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FeaturedProjects() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="work" className="py-28 md:py-36 px-6">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Featured Work"
                    subtitle="A selection of projects where craft meets purpose"
                />

                <div className="grid gap-8">
                    {featuredProjects.map((project, index) => (
                        <AnimateOnScroll key={project.title} delay={index * 0.12}>
                            <motion.div
                                className="group relative bg-card border border-border rounded-2xl p-8 md:p-10 transition-colors duration-500 hover:bg-card-hover hover:border-border-hover"
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : { y: -4, transition: { duration: 0.3 } }
                                }
                            >
                                {/* Project number */}
                                <span className="text-olive/30 font-serif text-6xl md:text-7xl absolute top-6 right-8 select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="relative z-10">
                                    <h3 className="font-serif text-2xl md:text-3xl text-cream mb-3 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-3 py-1.5 rounded-full bg-olive-dim text-olive-light border border-olive/10 transition-all duration-300 group-hover:border-olive/25"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex gap-4">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-offwhite border border-border px-5 py-2 rounded-full hover:border-olive/50 hover:bg-olive/[0.08] transition-all duration-300"
                                            >
                                                View Project
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted border border-transparent px-5 py-2 rounded-full hover:text-offwhite hover:border-border transition-all duration-300"
                                        >
                                            GitHub →
                                        </a>
                                    </div>
                                </div>

                                {/* Subtle hover glow */}
                                <div className="absolute inset-0 rounded-2xl bg-olive/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
