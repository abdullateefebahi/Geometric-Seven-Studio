"use client";
import { useEffect, useRef } from "react";

const steps = [
    {
        phase: "Phase 01",
        title: "Discovery",
        description:
            "We dive deep into your vision, market, and objectives. Understanding the DNA of your project before writing a single line of code.",
        duration: "1–2 Weeks",
        deliverables: ["Project Brief", "Technical Spec", "Architecture Plan"],
    },
    {
        phase: "Phase 02",
        title: "Blueprint",
        description:
            "System architecture, tech stack selection, and detailed wireframes. Every decision is deliberate, every choice engineered for scale.",
        duration: "1–3 Weeks",
        deliverables: ["System Design", "UI/UX Wireframes", "API Contracts"],
    },
    {
        phase: "Phase 03",
        title: "Build",
        description:
            "Rapid, iterative development with weekly demos. Clean code, comprehensive testing, and relentless attention to detail.",
        duration: "4–12 Weeks",
        deliverables: ["Working Software", "Test Coverage", "CI/CD Pipeline"],
    },
    {
        phase: "Phase 04",
        title: "Launch & Scale",
        description:
            "Deployment, monitoring, and optimization. We don't just ship — we ensure your product dominates in the real world.",
        duration: "Ongoing",
        deliverables: ["Production Deploy", "Performance Tuning", "Growth Support"],
    },
];

export default function ProcessSection() {
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
            id="process"
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
                {/* Section header */}
                <div
                    className="animate-on-scroll animate-slide-up"
                    style={{
                        marginBottom: "80px",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
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
                            How We Work
                        </span>
                        <div
                            style={{
                                width: "40px",
                                height: "1px",
                                background: "var(--g7-gray-500)",
                            }}
                        />
                    </div>
                    <h2
                        style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "clamp(36px, 4vw, 56px)",
                            fontWeight: 700,
                            letterSpacing: "-1px",
                            lineHeight: 1.1,
                            marginBottom: "20px",
                        }}
                    >
                        <span style={{ color: "var(--g7-white)" }}>Our </span>
                        <span
                            style={{
                                background: "linear-gradient(135deg, #ffffff, #666666)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Process
                        </span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "16px",
                            fontWeight: 300,
                            color: "var(--g7-gray-400)",
                            maxWidth: "500px",
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        A battle-tested methodology that transforms ideas into reality with
                        precision and speed.
                    </p>
                </div>

                {/* Process timeline */}
                <div style={{ position: "relative" }}>
                    {/* Vertical line */}
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "0",
                            bottom: "0",
                            width: "1px",
                            background:
                                "linear-gradient(180deg, transparent, rgba(255,255,255,0.08), transparent)",
                            transform: "translateX(-50%)",
                        }}
                    />

                    {steps.map((step, index) => (
                        <div
                            key={step.phase}
                            className="animate-on-scroll animate-slide-up"
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 80px 1fr",
                                gap: "0",
                                alignItems: "center",
                                marginBottom: index < steps.length - 1 ? "60px" : "0",
                                animationDelay: `${index * 0.15}s`,
                                animationFillMode: "forwards",
                            }}
                        >
                            {/* Left content (even) or empty */}
                            <div
                                style={{
                                    textAlign: "right",
                                    padding: "40px",
                                    ...(index % 2 !== 0 ? { visibility: "hidden" as const } : {}),
                                }}
                            >
                                {index % 2 === 0 && (
                                    <div className="glass-card" style={{ padding: "40px", textAlign: "left" }}>
                                        <div
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "11px",
                                                letterSpacing: "3px",
                                                textTransform: "uppercase",
                                                color: "var(--g7-gray-600)",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            {step.phase} — {step.duration}
                                        </div>
                                        <h3
                                            style={{
                                                fontFamily: "var(--font-heading)",
                                                fontSize: "28px",
                                                fontWeight: 700,
                                                color: "var(--g7-white)",
                                                marginBottom: "12px",
                                                letterSpacing: "-0.5px",
                                            }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-body)",
                                                fontSize: "14px",
                                                fontWeight: 300,
                                                color: "var(--g7-gray-400)",
                                                lineHeight: 1.8,
                                                marginBottom: "20px",
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                            {step.deliverables.map((d) => (
                                                <span
                                                    key={d}
                                                    style={{
                                                        padding: "4px 12px",
                                                        fontFamily: "var(--font-mono)",
                                                        fontSize: "10px",
                                                        letterSpacing: "1px",
                                                        color: "var(--g7-gray-400)",
                                                        border: "1px solid rgba(255,255,255,0.06)",
                                                        background: "rgba(255,255,255,0.02)",
                                                    }}
                                                >
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Center dot */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "relative",
                                    zIndex: 2,
                                }}
                            >
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        border: "1px solid rgba(255, 255, 255, 0.15)",
                                        background: "var(--g7-black)",
                                        clipPath:
                                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-mono)",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            color: "var(--g7-white)",
                                        }}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                            </div>

                            {/* Right content (odd) or empty */}
                            <div
                                style={{
                                    padding: "40px",
                                    ...(index % 2 === 0 ? { visibility: "hidden" as const } : {}),
                                }}
                            >
                                {index % 2 !== 0 && (
                                    <div className="glass-card" style={{ padding: "40px" }}>
                                        <div
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "11px",
                                                letterSpacing: "3px",
                                                textTransform: "uppercase",
                                                color: "var(--g7-gray-600)",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            {step.phase} — {step.duration}
                                        </div>
                                        <h3
                                            style={{
                                                fontFamily: "var(--font-heading)",
                                                fontSize: "28px",
                                                fontWeight: 700,
                                                color: "var(--g7-white)",
                                                marginBottom: "12px",
                                                letterSpacing: "-0.5px",
                                            }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontFamily: "var(--font-body)",
                                                fontSize: "14px",
                                                fontWeight: 300,
                                                color: "var(--g7-gray-400)",
                                                lineHeight: 1.8,
                                                marginBottom: "20px",
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                            {step.deliverables.map((d) => (
                                                <span
                                                    key={d}
                                                    style={{
                                                        padding: "4px 12px",
                                                        fontFamily: "var(--font-mono)",
                                                        fontSize: "10px",
                                                        letterSpacing: "1px",
                                                        color: "var(--g7-gray-400)",
                                                        border: "1px solid rgba(255,255,255,0.06)",
                                                        background: "rgba(255,255,255,0.02)",
                                                    }}
                                                >
                                                    {d}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
