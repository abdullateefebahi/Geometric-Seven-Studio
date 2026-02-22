"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const roles = [
    "Frontend Engineering",
    "Backend Architecture",
    "Game Development",
    "Digital Experiences",
    "System Design",
];

export default function HeroSection() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    // Typewriter effect
    useEffect(() => {
        const role = roles[currentRole];
        const speed = isDeleting ? 40 : 80;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(role.substring(0, displayText.length + 1));
                if (displayText === role) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(role.substring(0, displayText.length - 1));
                if (displayText === "") {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole]);

    // Parallax scroll
    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrollY = window.scrollY;
                const elements = heroRef.current.querySelectorAll("[data-speed]");
                elements.forEach((el) => {
                    const speed = parseFloat(
                        (el as HTMLElement).dataset.speed || "0"
                    );
                    (el as HTMLElement).style.transform = `translateY(${scrollY * speed
                        }px)`;
                });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                padding: "0 60px",
            }}
        >
            {/* Decorative geometric shapes */}
            <div
                data-speed="-0.1"
                style={{
                    position: "absolute",
                    top: "15%",
                    right: "8%",
                    width: "300px",
                    height: "300px",
                    border: "1px solid rgba(255, 255, 255, 0.04)",
                    clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    animation: "hexagon-spin 30s linear infinite",
                }}
            />
            <div
                data-speed="-0.15"
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "15%",
                    width: "200px",
                    height: "200px",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    animation: "hexagon-spin 25s linear infinite reverse",
                }}
            />
            <div
                data-speed="-0.05"
                style={{
                    position: "absolute",
                    bottom: "20%",
                    left: "5%",
                    width: "150px",
                    height: "150px",
                    border: "1px solid rgba(255, 255, 255, 0.03)",
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                    animation: "spin-slow 20s linear infinite",
                }}
            />

            {/* Large "G7" watermark */}
            <div
                data-speed="0.05"
                style={{
                    position: "absolute",
                    right: "-5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    opacity: 0.03,
                    zIndex: 0,
                }}
            >
                <Image
                    src="/g7logo.png"
                    alt=""
                    width={700}
                    height={700}
                    style={{ objectFit: "contain", filter: "grayscale(1)" }}
                    aria-hidden="true"
                />
            </div>

            {/* Vertical line accent */}
            <div
                style={{
                    position: "absolute",
                    left: "60px",
                    top: "30%",
                    bottom: "30%",
                    width: "1px",
                    background:
                        "linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)",
                }}
            />

            {/* Main content */}
            <div
                style={{
                    maxWidth: "900px",
                    position: "relative",
                    zIndex: 2,
                    paddingLeft: "40px",
                }}
            >
                {/* Tagline top */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        marginBottom: "32px",
                        animation: "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
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
                            color: "var(--g7-gray-400)",
                        }}
                    >
                        Software Development Studio
                    </span>
                </div>

                {/* Main heading */}
                <h1
                    style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(52px, 6vw, 88px)",
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: "-2px",
                        marginBottom: "28px",
                        animation:
                            "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards",
                        opacity: 0,
                        animationFillMode: "forwards",
                    }}
                >
                    <span style={{ color: "var(--g7-white)" }}>We Build</span>
                    <br />
                    <span
                        style={{
                            background:
                                "linear-gradient(135deg, #ffffff 0%, #888888 50%, #ffffff 100%)",
                            backgroundSize: "200% 200%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            animation: "border-trace 4s ease infinite",
                        }}
                    >
                        Digital Empires
                    </span>
                </h1>

                {/* Typewriter */}
                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "18px",
                        fontWeight: 400,
                        color: "var(--g7-gray-300)",
                        marginBottom: "40px",
                        minHeight: "28px",
                        animation:
                            "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
                        opacity: 0,
                        animationFillMode: "forwards",
                    }}
                >
                    <span style={{ color: "var(--g7-gray-600)" }}>{"// "}</span>
                    <span>{displayText}</span>
                    <span
                        style={{
                            borderRight: "2px solid var(--g7-white)",
                            animation: "pulse-glow 1s infinite",
                            marginLeft: "2px",
                        }}
                    >
                        &nbsp;
                    </span>
                </div>

                {/* Description */}
                <p
                    style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "17px",
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: "var(--g7-gray-400)",
                        maxWidth: "560px",
                        marginBottom: "50px",
                        animation:
                            "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards",
                        opacity: 0,
                        animationFillMode: "forwards",
                    }}
                >
                    We craft premium software solutions — from pixel-perfect frontends to
                    battle-tested backends and immersive game experiences. Where talent
                    meets craftsmanship.
                </p>

                {/* CTA buttons */}
                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        animation:
                            "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards",
                        opacity: 0,
                        animationFillMode: "forwards",
                    }}
                >
                    <a
                        href="#services"
                        id="hero-cta-explore"
                        style={{
                            padding: "16px 36px",
                            background: "var(--g7-white)",
                            color: "var(--g7-black)",
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            fontWeight: 600,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            clipPath:
                                "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "var(--g7-gray-200)";
                            el.style.transform = "translateY(-2px)";
                            el.style.boxShadow = "0 10px 40px rgba(255,255,255,0.1)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.background = "var(--g7-white)";
                            el.style.transform = "translateY(0)";
                            el.style.boxShadow = "none";
                        }}
                    >
                        Explore Services
                    </a>
                    <a
                        href="#work"
                        id="hero-cta-work"
                        style={{
                            padding: "16px 36px",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            background: "transparent",
                            color: "var(--g7-white)",
                            fontFamily: "var(--font-body)",
                            fontSize: "13px",
                            fontWeight: 500,
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            clipPath:
                                "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget;
                            el.style.borderColor = "rgba(255, 255, 255, 0.4)";
                            el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget;
                            el.style.borderColor = "rgba(255, 255, 255, 0.15)";
                            el.style.transform = "translateY(0)";
                        }}
                    >
                        View Our Work
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: "absolute",
                    bottom: "40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    animation:
                        "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards, float 3s ease-in-out 1s infinite",
                    opacity: 0,
                    animationFillMode: "forwards",
                }}
            >
                <span
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        color: "var(--g7-gray-600)",
                    }}
                >
                    Scroll
                </span>
                <div
                    style={{
                        width: "1px",
                        height: "40px",
                        background:
                            "linear-gradient(180deg, var(--g7-gray-500), transparent)",
                    }}
                />
            </div>
        </section>
    );
}
