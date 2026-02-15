"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

interface Repo {
    name: string;
    description: string | null;
    url: string;
    language: string | null;
    updatedAt: string;
    stars: number;
}

const excludedRepos = new Set<string>([]);

const repoImages: Record<string, string> = {
    // Add repo-specific images here, e.g. "my-repo": "/images/my-repo.jpg"
};

const repoLinks: Record<string, string> = {
    // Add repo-specific project links here, e.g. "my-repo": "https://myproject.com"
};

const languageColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Rust: "#dea584",
    Go: "#00ADD8",
    Java: "#b07219",
};

function timeAgo(dateString: string): string {
    const diff = Date.now() - new Date(dateString).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
}

function SkeletonCard() {
    return (
        <div className="bg-card border border-border rounded-2xl p-8 animate-pulse">
            <div className="h-5 w-1/3 bg-border rounded mb-4" />
            <div className="h-4 w-2/3 bg-border rounded mb-6" />
            <div className="flex gap-4">
                <div className="h-3 w-16 bg-border rounded" />
                <div className="h-3 w-20 bg-border rounded" />
            </div>
        </div>
    );
}

export default function GitHubProjects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const latestRepos = repos
        .filter((repo) => !excludedRepos.has(repo.name))
        .sort(
            (a, b) =>
                new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        )
        .slice(0, 3);

    useEffect(() => {
        fetch("/api/github")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => {
                setRepos(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <section id="recent" className="py-28 md:py-36 px-6 bg-charcoal-light">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Recent Work"
                    subtitle="Latest activity from GitHub — always building, always refining"
                />

                {loading && (
                    <div className="grid md:grid-cols-3 gap-6">
                        {[0, 1, 2].map((i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                )}

                {error && (
                    <AnimateOnScroll>
                        <div className="text-center py-16">
                            <p className="text-muted text-sm">
                                Unable to load repositories right now.
                            </p>
                        </div>
                    </AnimateOnScroll>
                )}

                {!loading && !error && (
                    <div className="grid md:grid-cols-3 gap-6">
                        {latestRepos.map((repo, index) => {
                            const imageUrl =
                                repoImages[repo.name] || "https://via.placeholder.com/100";
                            const projectUrl = repoLinks[repo.name] || repo.url;

                            return (
                            <AnimateOnScroll key={repo.name} delay={index * 0.1}>
                                <div className="group block bg-card border border-border rounded-2xl p-8 hover:bg-card-hover hover:border-border-hover transition-all duration-500 h-full">
                                    <div
                                        className="h-36 rounded-xl bg-cover bg-center mb-5"
                                        style={{ backgroundImage: `url(${imageUrl})` }}
                                    />

                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="font-serif text-xl text-cream group-hover:text-olive-light transition-colors duration-300 truncate pr-4">
                                            {repo.name}
                                        </h3>
                                        {/* Recently updated indicator */}
                                        <motion.div
                                            className="flex-shrink-0 flex items-center gap-1.5"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 + index * 0.2 }}
                                        >
                                            <motion.span
                                                className="w-1.5 h-1.5 rounded-full bg-olive"
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                            <span className="text-xs text-muted">
                                                {timeAgo(repo.updatedAt)}
                                            </span>
                                        </motion.div>
                                    </div>

                                    <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-2">
                                        {repo.description || "No description available."}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        {repo.language && (
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="w-2.5 h-2.5 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            languageColors[repo.language] || "#8a8a8a",
                                                    }}
                                                />
                                                <span className="text-xs text-muted">
                                                    {repo.language}
                                                </span>
                                            </div>
                                        )}
                                        {repo.stars > 0 && (
                                            <span className="text-xs text-muted">
                                                ★ {repo.stars}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex gap-4 pt-6">
                                        <a
                                            href={projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-offwhite border border-border px-4 py-2 rounded-full hover:border-olive/50 hover:bg-olive/[0.08] transition-all duration-300"
                                        >
                                            View Project
                                        </a>
                                        <a
                                            href={repo.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-muted border border-transparent px-4 py-2 rounded-full hover:text-offwhite hover:border-border transition-all duration-300"
                                        >
                                            View Repository
                                        </a>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
