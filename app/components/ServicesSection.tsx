"use client";
import { useEffect, useRef } from "react";

const services = [
    {
        number: "01",
        title: "Frontend Engineering",
        description:
            "Pixel-perfect interfaces with fluid animations, responsive design, and buttery-smooth interactions. React, Next.js, and cutting-edge web technologies.",
        tags: ["React", "Next.js", "TypeScript", "WebGL", "Three.js"],
        icon: (
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            >
                <rect x="4" y="4" width="40" height="28" rx="2" />
                <line x1="4" y1="36" x2="44" y2="36" />
                <line x1="18" y1="36" x2="18" y2="44" />
                <line x1="30" y1="36" x2="30" y2="44" />
                <line x1="14" y1="44" x2="34" y2="44" />
                <polygon points="14,14 14,24 22,19" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Backend Architecture",
        description:
            "Scalable APIs, microservices, and robust server infrastructure that powers millions. Node.js, Python, Go, and cloud-native solutions.",
        tags: ["Node.js", "Python", "Go", "PostgreSQL", "AWS"],
        icon: (
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            >
                <rect x="8" y="4" width="32" height="12" rx="2" />
                <rect x="8" y="20" width="32" height="12" rx="2" />
                <rect x="8" y="36" width="32" height="8" rx="2" />
                <circle cx="14" cy="10" r="2" fill="currentColor" />
                <circle cx="14" cy="26" r="2" fill="currentColor" />
                <circle cx="14" cy="40" r="2" fill="currentColor" />
                <line x1="20" y1="10" x2="34" y2="10" />
                <line x1="20" y1="26" x2="34" y2="26" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Game Development",
        description:
            "Immersive game experiences from concept to launch. 2D and 3D game development, physics engines, and interactive worlds that captivate players.",
        tags: ["Unity", "Unreal", "C#", "C++", "WebGL"],
        icon: (
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            >
                <path d="M24 4L44 16V32L24 44L4 32V16L24 4Z" />
                <path d="M24 4V20" />
                <path d="M44 16L24 28" />
                <path d="M4 16L24 28" />
                <path d="M24 28V44" />
                <circle cx="24" cy="20" r="3" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "System Design",
        description:
            "End-to-end system architecture — from database modeling to distributed systems. We engineer solutions that scale from MVP to enterprise.",
        tags: ["Architecture", "DevOps", "CI/CD", "Docker", "K8s"],
        icon: (
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            >
                <circle cx="24" cy="24" r="6" />
                <circle cx="12" cy="8" r="4" />
                <circle cx="36" cy="8" r="4" />
                <circle cx="12" cy="40" r="4" />
                <circle cx="36" cy="40" r="4" />
                <line x1="15" y1="11" x2="21" y2="19" />
                <line x1="33" y1="11" x2="27" y2="19" />
                <line x1="15" y1="37" x2="21" y2="29" />
                <line x1="33" y1="37" x2="27" y2="29" />
            </svg>
        ),
    },
];

export default function ServicesSection() {
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
            id="services"
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

            {/* Section header */}
            <div
                className="animate-on-scroll animate-slide-up"
                style={{
                    maxWidth: "var(--container-max)",
                    margin: "0 auto",
                    marginBottom: "80px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }}
            >
                <div>
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
                                fontWeight: 400,
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                color: "var(--g7-gray-500)",
                            }}
                        >
                            What We Do
                        </span>
                    </div>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(36px, 4vw, 56px)",
                            fontWeight: 700,
                            letterSpacing: "-1px",
                            lineHeight: 1.1,
                        }}
                    >
                        <span style={{ color: "var(--g7-white)" }}>Our </span>
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, #ffffff, #666666)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Services
                        </span>
                    </h2>
                </div>
                <p
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        fontWeight: 300,
                        color: "var(--g7-gray-400)",
                        maxWidth: "400px",
                        lineHeight: 1.7,
                        textAlign: "right",
                    }}
                >
                    Engineering excellence across every layer of the stack. From interface
                    to infrastructure.
                </p>
            </div>

            {/* Services grid */}
            <div
                style={{
                    maxWidth: "var(--container-max)",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "24px",
                }}
            >
                {services.map((service, index) => (
                    <div
                        key={service.number}
                        className="animate-on-scroll animate-slide-up glass-card"
                        style={{
                            padding: "48px",
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer",
                            animationDelay: `${index * 0.15}s`,
                            animationFillMode: "forwards",
                        }}
                    >
                        {/* Number */}
                        <span
                            style={{
                                position: "absolute",
                                top: "24px",
                                right: "24px",
                                fontFamily: "var(--font-mono)",
                                fontSize: "64px",
                                fontWeight: 700,
                                color: "rgba(255, 255, 255, 0.03)",
                                lineHeight: 1,
                            }}
                        >
                            {service.number}
                        </span>

                        {/* Corner accent */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "60px",
                                height: "60px",
                                borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "60px",
                                height: "60px",
                                borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
                                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                            }}
                        />

                        {/* Icon */}
                        <div
                            style={{
                                marginBottom: "28px",
                                color: "var(--g7-gray-400)",
                            }}
                        >
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "24px",
                                fontWeight: 600,
                                color: "var(--g7-white)",
                                marginBottom: "16px",
                                letterSpacing: "-0.5px",
                            }}
                        >
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                fontWeight: 300,
                                color: "var(--g7-gray-400)",
                                lineHeight: 1.8,
                                marginBottom: "28px",
                            }}
                        >
                            {service.description}
                        </p>

                        {/* Tags */}
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "8px",
                            }}
                        >
                            {service.tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        padding: "4px 12px",
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "11px",
                                        fontWeight: 400,
                                        color: "var(--g7-gray-400)",
                                        border: "1px solid rgba(255, 255, 255, 0.06)",
                                        borderRadius: "0px",
                                        letterSpacing: "1px",
                                        background: "rgba(255, 255, 255, 0.02)",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
