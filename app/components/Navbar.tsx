"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
    { label: "Studio", href: "#studio" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (const id of sections.reverse()) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            id="navbar"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: scrolled ? "16px 60px" : "28px 60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                background: scrolled
                    ? "rgba(10, 10, 10, 0.85)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(255, 255, 255, 0.06)"
                    : "1px solid transparent",
            }}
        >
            {/* Logo */}
            <a
                href="#"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none",
                    color: "var(--g7-white)",
                }}
            >
                <Image
                    src="/g7logo.png"
                    alt="Geometric Seven Studio"
                    width={44}
                    height={44}
                    style={{ objectFit: "contain" }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                    <span
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "15px",
                            fontWeight: 700,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            lineHeight: 1.2,
                        }}
                    >
                        Geometric
                    </span>
                    <span
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "10px",
                            fontWeight: 400,
                            letterSpacing: "6px",
                            textTransform: "uppercase",
                            color: "var(--g7-gray-400)",
                            lineHeight: 1.2,
                        }}
                    >
                        Seven Studio
                    </span>
                </div>
            </a>

            {/* Nav Links */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                }}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        style={{
                            textDecoration: "none",
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            fontWeight: 400,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color:
                                activeSection === link.href.replace("#", "")
                                    ? "var(--g7-white)"
                                    : "var(--g7-gray-400)",
                            transition: "color 0.3s ease",
                            position: "relative",
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.color = "var(--g7-white)";
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.color =
                                activeSection === link.href.replace("#", "")
                                    ? "var(--g7-white)"
                                    : "var(--g7-gray-400)";
                        }}
                    >
                        {link.label}
                    </a>
                ))}

                {/* CTA Button */}
                <a
                    href="#contact"
                    style={{
                        padding: "12px 28px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "0px",
                        fontFamily: "var(--font-body)",
                        fontSize: "12px",
                        fontWeight: 500,
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "var(--g7-white)",
                        textDecoration: "none",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        background: "transparent",
                        clipPath:
                            "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                    }}
                    onMouseEnter={(e) => {
                        const el = e.target as HTMLElement;
                        el.style.background = "var(--g7-white)";
                        el.style.color = "var(--g7-black)";
                        el.style.borderColor = "var(--g7-white)";
                    }}
                    onMouseLeave={(e) => {
                        const el = e.target as HTMLElement;
                        el.style.background = "transparent";
                        el.style.color = "var(--g7-white)";
                        el.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    }}
                >
                    Start a Project
                </a>
            </div>
        </nav>
    );
}
