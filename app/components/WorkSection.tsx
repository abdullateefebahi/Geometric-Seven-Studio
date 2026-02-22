"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
    {
        id: 1,
        title: "Inferno Engine",
        category: "Game Development",
        description:
            "A native C++ 3D game engine built from scratch. OpenGL rendering, physics systems, terrain editing, and a full editor experience rivaling industry tools.",
        tags: ["C++", "OpenGL", "Physics", "3D Engine"],
        year: "2026",
        color: "#1a1a1a",
    },
    {
        id: 2,
        title: "Project Monocle",
        category: "Full-Stack Platform",
        description:
            "A cross-platform social application with real-time features, community management, and gamification systems. Flutter frontend with a robust backend.",
        tags: ["Flutter", "Dart", "Node.js", "Firebase"],
        year: "2026",
        color: "#111111",
    },
    {
        id: 3,
        title: "Neural Interface",
        category: "Frontend Engineering",
        description:
            "A next-generation dashboard with real-time data visualization, WebGL-powered charts, and an AI-assisted workflow engine.",
        tags: ["React", "WebGL", "Three.js", "AI"],
        year: "2025",
        color: "#0d0d0d",
    },
];

export default function WorkSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
            id="work"
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
                                    letterSpacing: "4px",
                                    textTransform: "uppercase",
                                    color: "var(--g7-gray-500)",
                                }}
                            >
                                Portfolio
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
                            <span style={{ color: "var(--g7-white)" }}>Selected </span>
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #ffffff, #666666)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Work
                            </span>
                        </h2>
                    </div>
                    <a
                        href="#contact"
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "12px",
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "var(--g7-gray-400)",
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "var(--g7-white)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "var(--g7-gray-400)";
                        }}
                    >
                        View All Projects
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>

                {/* Project cards */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                    }}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="animate-on-scroll animate-slide-up"
                            style={{
                                animationDelay: `${index * 0.15}s`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <div
                                id={`project-${project.id}`}
                                style={{
                                    padding: "48px",
                                    background:
                                        hoveredProject === project.id
                                            ? "rgba(255, 255, 255, 0.04)"
                                            : "rgba(255, 255, 255, 0.01)",
                                    border: "1px solid rgba(255, 255, 255, 0.04)",
                                    display: "grid",
                                    gridTemplateColumns: "auto 1fr auto",
                                    gap: "48px",
                                    alignItems: "center",
                                    cursor: "pointer",
                                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                                onMouseEnter={(e) => {
                                    setHoveredProject(project.id);
                                    e.currentTarget.style.borderColor =
                                        "rgba(255, 255, 255, 0.08)";
                                    e.currentTarget.style.transform = "translateX(8px)";
                                }}
                                onMouseLeave={(e) => {
                                    setHoveredProject(null);
                                    e.currentTarget.style.borderColor =
                                        "rgba(255, 255, 255, 0.04)";
                                    e.currentTarget.style.transform = "translateX(0)";
                                }}
                            >
                                {/* Hover accent line */}
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: hoveredProject === project.id ? "3px" : "0px",
                                        background: "var(--g7-white)",
                                        transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                    }}
                                />

                                {/* Project number */}
                                <div
                                    style={{
                                        fontFamily: "var(--font-heading)",
                                        fontSize: "48px",
                                        fontWeight: 800,
                                        color: "rgba(255, 255, 255, 0.06)",
                                        lineHeight: 1,
                                        minWidth: "80px",
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                {/* Project info */}
                                <div>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "16px",
                                            marginBottom: "8px",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "10px",
                                                letterSpacing: "3px",
                                                textTransform: "uppercase",
                                                color: "var(--g7-gray-500)",
                                            }}
                                        >
                                            {project.category}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: "10px",
                                                color: "var(--g7-gray-700)",
                                            }}
                                        >
                                            {project.year}
                                        </span>
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-heading)",
                                            fontSize: "28px",
                                            fontWeight: 700,
                                            color: "var(--g7-white)",
                                            marginBottom: "8px",
                                            letterSpacing: "-0.5px",
                                            transition: "transform 0.3s ease",
                                            transform:
                                                hoveredProject === project.id
                                                    ? "translateX(8px)"
                                                    : "translateX(0)",
                                        }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-body)",
                                            fontSize: "14px",
                                            fontWeight: 300,
                                            color: "var(--g7-gray-400)",
                                            lineHeight: 1.7,
                                            maxWidth: "500px",
                                            opacity: hoveredProject === project.id ? 1 : 0.7,
                                            transition: "opacity 0.3s ease",
                                        }}
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tags & Arrow */}
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-end",
                                        gap: "16px",
                                    }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        style={{
                                            color: "var(--g7-gray-600)",
                                            transition: "all 0.3s ease",
                                            transform:
                                                hoveredProject === project.id
                                                    ? "translate(4px, -4px)"
                                                    : "translate(0, 0)",
                                            opacity: hoveredProject === project.id ? 1 : 0.5,
                                        }}
                                    >
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "6px",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    padding: "3px 10px",
                                                    fontFamily: "var(--font-mono)",
                                                    fontSize: "9px",
                                                    letterSpacing: "1px",
                                                    color: "var(--g7-gray-500)",
                                                    border: "1px solid rgba(255,255,255,0.05)",
                                                    background: "rgba(255,255,255,0.02)",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
