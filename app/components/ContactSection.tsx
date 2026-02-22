"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ContactSection() {
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
            id="contact"
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
                {/* Big CTA */}
                <div
                    className="animate-on-scroll animate-slide-up"
                    style={{
                        textAlign: "center",
                        marginBottom: "100px",
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
                            Let&apos;s Connect
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
                            fontSize: "clamp(40px, 5vw, 72px)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: "-2px",
                            marginBottom: "28px",
                        }}
                    >
                        <span style={{ color: "var(--g7-white)" }}>Ready to Build</span>
                        <br />
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg, #ffffff 0%, #666666 50%, #ffffff 100%)",
                                backgroundSize: "200% 200%",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                                animation: "border-trace 4s ease infinite",
                            }}
                        >
                            Something Legendary?
                        </span>
                    </h2>
                    <p
                        style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "17px",
                            fontWeight: 300,
                            color: "var(--g7-gray-400)",
                            maxWidth: "560px",
                            margin: "0 auto 50px",
                            lineHeight: 1.8,
                        }}
                    >
                        Whether you need a full product built from scratch or a team to
                        scale your existing vision — we&apos;re ready to deploy.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <a
                            href="mailto:hello@geometricseven.studio"
                            id="cta-email"
                            style={{
                                padding: "18px 48px",
                                background: "var(--g7-white)",
                                color: "var(--g7-black)",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                fontWeight: 600,
                                letterSpacing: "3px",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                clipPath:
                                    "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.background = "var(--g7-gray-200)";
                                el.style.transform = "translateY(-3px)";
                                el.style.boxShadow = "0 15px 50px rgba(255,255,255,0.1)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.background = "var(--g7-white)";
                                el.style.transform = "translateY(0)";
                                el.style.boxShadow = "none";
                            }}
                        >
                            Start a Project
                        </a>
                        <a
                            href="mailto:hello@geometricseven.studio"
                            id="cta-schedule"
                            style={{
                                padding: "18px 48px",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                background: "transparent",
                                color: "var(--g7-white)",
                                fontFamily: "var(--font-body)",
                                fontSize: "14px",
                                fontWeight: 500,
                                letterSpacing: "3px",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                clipPath:
                                    "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "rgba(255, 255, 255, 0.4)";
                                el.style.transform = "translateY(-3px)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.borderColor = "rgba(255, 255, 255, 0.15)";
                                el.style.transform = "translateY(0)";
                            }}
                        >
                            Schedule a Call
                        </a>
                    </div>
                </div>

                {/* Info grid */}
                <div
                    className="animate-on-scroll animate-slide-up"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "24px",
                        marginBottom: "100px",
                        animationFillMode: "forwards",
                    }}
                >
                    {[
                        {
                            label: "Email",
                            value: "hello@geometricseven.studio",
                            icon: "→",
                        },
                        { label: "Location", value: "Remote-First · Worldwide", icon: "◆" },
                        { label: "Availability", value: "Open for Projects", icon: "●" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="glass-card"
                            style={{ padding: "36px", textAlign: "center" }}
                        >
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
                                {item.icon} {item.label}
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--font-body)",
                                    fontSize: "15px",
                                    fontWeight: 400,
                                    color: "var(--g7-gray-300)",
                                }}
                            >
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══════════════════════
           FOOTER
         ═══════════════════════ */}
            <footer
                style={{
                    maxWidth: "var(--container-max)",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "1px",
                        background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                        marginBottom: "48px",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* Logo */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                        }}
                    >
                        <Image
                            src="/g7logo.png"
                            alt="Geometric Seven"
                            width={32}
                            height={32}
                            style={{ objectFit: "contain", opacity: 0.4 }}
                        />
                        <span
                            style={{
                                fontFamily: "var(--font-heading)",
                                fontSize: "12px",
                                fontWeight: 400,
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                color: "var(--g7-gray-600)",
                            }}
                        >
                            Geometric Seven Studio
                        </span>
                    </div>

                    {/* Copyright */}
                    <span
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            color: "var(--g7-gray-700)",
                            letterSpacing: "1px",
                        }}
                    >
                        © 2024 — {new Date().getFullYear()} G7 Studio. All rights reserved.
                    </span>

                    {/* Social links placeholder */}
                    <div
                        style={{
                            display: "flex",
                            gap: "24px",
                        }}
                    >
                        {["GitHub", "Twitter", "LinkedIn"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "11px",
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: "var(--g7-gray-600)",
                                    textDecoration: "none",
                                    transition: "color 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--g7-white)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--g7-gray-600)";
                                }}
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom padding */}
                <div style={{ height: "40px" }} />
            </footer>
        </section>
    );
}
