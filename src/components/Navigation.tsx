"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
    { label: "Work", href: "#work" },
    { label: "Recent", href: "#recent" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-charcoal/80 backdrop-blur-xl border-b border-border"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#"
                    className="font-serif text-xl text-cream tracking-tight hover:text-olive transition-colors duration-300"
                >
                    sherv.
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm text-muted hover:text-offwhite transition-colors duration-300 tracking-wide"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile: simplified — just the logo on small screens */}
                <div className="md:hidden flex items-center gap-6">
                    {navItems.slice(0, 3).map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-xs text-muted hover:text-offwhite transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
