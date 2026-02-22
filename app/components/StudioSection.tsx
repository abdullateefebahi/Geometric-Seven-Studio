"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
    { value: "7+", label: "Years Crafting" },
    { value: "50+", label: "Projects Shipped" },
    { value: "100%", label: "Dedication" },
    { value: "∞", label: "Passion" },
];

const values = [
    {
        title: "Precision",
        description: "Every pixel, every byte, every millisecond matters.",
    },
    {
        title: "Innovation",
        description: "Pushing boundaries isn't optional — it's our default state.",
    },
    {
        title: "Mastery",
        description: "We don't just use tools. We master them. Then we build our own.",
    },
    {
        title: "Legacy",
        description: "Code that outlasts trends. Systems that scale beyond limits.",
    },
];

export default function StudioSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const elements =
            sectionRef.current?.querySelectorAll(".animate-on-scroll");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="studio"
            style={{
                padding: "140px 60px",
                position: "relative",
                zIndex: 2,
            }}
        >
            {/* Section line */}
            <div
                style={{
                    width: "100%",
                    height: "1px",
                    background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    marginBottom: "100px",
                }}
            />

            <div
                style={{
                    maxWidth: "var(--container-max)",
                    margin: "0 auto",
                }}
            >
                {/* Header */}
                <div
                    className="animate-on-scroll animate-slide-up"
                    style={{ marginBottom: "80px" }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            marginBottom: "24px",
                        }}
                    >
                        <div
                            style={{
                                width: "40px",
                                height: "1px",
                                background: "var(--g7-gray-500)",
                            }}
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "12px",
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                color: "var(--g7-gray-500)",
                            }}
                        >
                            The Studio
                        </span>
                    </div>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(36px, 4vw, 56px)",
                            fontWeight: 700,
                            letterSpacing: "-1px",
                            lineHeight: 1.1,
                            marginBottom: "32px",
                        }}
                    >
                        <span style={{ color: "var(--g7-white)" }}>More Than a </span>
                        <span
                            style={{
                                background: "linear-gradient(135deg, #ffffff, #666666)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Studio
                        </span>
                    </h2>
                </div>

                {/* Two column layout */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "80px",
                        alignItems: "start",
                        marginBottom: "100px",
                    }}
                >
                    {/* Left — Description */}
                    <div
                        className="animate-on-scroll animate-slide-left"
                        style={{ animationFillMode: "forwards" }}
                    >
                        <p
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "18px",
                                fontWeight: 300,
                                color: "var(--g7-gray-300)",
                                lineHeight: 1.9,
                                marginBottom: "32px",
                            }}
                        >
                            Geometric Seven isn&apos;t just a development studio — it&apos;s a
                            launchpad. We believe in the slow, deliberate cultivation of raw
                            talent into industry-leading expertise. Our clients don&apos;t
                            just get software; they become the bosses of their digital
                            kingdoms.
                        </p>
                        <p
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "16px",
                                fontWeight: 300,
                                color: "var(--g7-gray-400)",
                                lineHeight: 1.9,
                                marginBottom: "48px",
                            }}
                        >
                            From frontend sorcery to backend fortification and immersive game
                            worlds — we engineer solutions that transform visions into
                            empires. Every line of code is crafted with purpose, every system
                            designed for dominance.
                        </p>

                        {/* G7 Logo decorative */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "20px",
                            }}
                        >
                            <Image
                                src="/g7logo.png"
                                alt="G7"
                                width={50}
                                height={50}
                                style={{
                                    objectFit: "contain",
                                    opacity: 0.3,
                                }}
                            />
                            <div
                                style={{
                                    width: "60px",
                                    height: "1px",
                                    background: "var(--g7-gray-700)",
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "11px",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    color: "var(--g7-gray-600)",
                                }}
                            >
                                Est. 2024
                            </span>
                        </div>
                    </div>

                    {/* Right — Values */}
                    <div
                        className="animate-on-scroll animate-slide-right"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0",
                            animationFillMode: "forwards",
                        }}
                    >
                        {values.map((value, index) => (
                            <div
                                key={value.title}
                                style={{
                                    padding: "28px 0",
                                    borderBottom:
                                        index < values.length - 1
                                            ? "1px solid rgba(255, 255, 255, 0.05)"
                                            : "none",
                                    display: "flex",
                                    gap: "24px",
                                    alignItems: "flex-start",
                                    transition: "all 0.3s ease",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.paddingLeft = "16px";
                                    (
                                        e.currentTarget as HTMLElement
                                    ).style.borderLeftColor = "rgba(255,255,255,0.15)";
                                    e.currentTarget.style.borderLeft =
                                        "1px solid rgba(255,255,255,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                                    e.currentTarget.style.borderLeft =
                                        "1px solid transparent";
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "11px",
                                        color: "var(--g7-gray-600)",
                                        letterSpacing: "2px",
                                        minWidth: "24px",
                                        marginTop: "4px",
                                    }}
                                >
                                    0{index + 1}
                                </span>
                                <div>
                                    <h4
                                        style={{
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "20px",
                                            fontWeight: 600,
                                            color: "var(--g7-white)",
                                            marginBottom: "6px",
                                        }}
                                    >
                                        {value.title}
                                    </h4>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: "14px",
                                            fontWeight: 300,
                                            color: "var(--g7-gray-400)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats bar */}
                <div
                    className="animate-on-scroll animate-slide-up glass-card"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        padding: "0",
                        overflow: "hidden",
                        animationFillMode: "forwards",
                    }}
                >
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            style={{
                                padding: "48px 40px",
                                textAlign: "center",
                                borderRight:
                                    index < stats.length - 1
                                        ? "1px solid rgba(255, 255, 255, 0.05)"
                                        : "none",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "var(--font-heading)",
                                    fontSize: "42px",
                                    fontWeight: 800,
                                    color: "var(--g7-white)",
                                    lineHeight: 1,
                                    marginBottom: "8px",
                                    letterSpacing: "-1px",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "11px",
                                    letterSpacing: "3px",
                                    textTransform: "uppercase",
                                    color: "var(--g7-gray-500)",
                                }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
