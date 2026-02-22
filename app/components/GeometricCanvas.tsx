"use client";
import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    shape: "hexagon" | "triangle" | "diamond" | "line" | "dot";
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    opacityDirection: number;
}

export default function GeometricCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleMouse = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouse);

        // Initialize particles
        const shapes: Particle["shape"][] = [
            "hexagon",
            "triangle",
            "diamond",
            "line",
            "dot",
        ];
        const particles: Particle[] = [];
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 20 + 5,
                shape: shapes[Math.floor(Math.random() * shapes.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.02,
                opacity: Math.random() * 0.15 + 0.02,
                opacityDirection: Math.random() > 0.5 ? 1 : -1,
            });
        }
        particlesRef.current = particles;

        const drawHexagon = (
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            size: number
        ) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i - Math.PI / 6;
                const px = x + size * Math.cos(angle);
                const py = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
        };

        const drawTriangle = (
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            size: number
        ) => {
            ctx.beginPath();
            for (let i = 0; i < 3; i++) {
                const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
                const px = x + size * Math.cos(angle);
                const py = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
        };

        const drawDiamond = (
            ctx: CanvasRenderingContext2D,
            x: number,
            y: number,
            size: number
        ) => {
            ctx.beginPath();
            ctx.moveTo(x, y - size);
            ctx.lineTo(x + size * 0.7, y);
            ctx.lineTo(x, y + size);
            ctx.lineTo(x - size * 0.7, y);
            ctx.closePath();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;

            // Draw connections between close particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 200) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 200) * 0.06
                            })`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw and update particles
            for (const p of particles) {
                // Mouse interaction — gentle repulsion
                const mdx = p.x - mouse.x;
                const mdy = p.y - mouse.y;
                const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                if (mDist < 200 && mDist > 0) {
                    const force = (200 - mDist) / 200;
                    p.vx += (mdx / mDist) * force * 0.08;
                    p.vy += (mdy / mDist) * force * 0.08;
                }

                // Update position
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;

                // Friction
                p.vx *= 0.995;
                p.vy *= 0.995;

                // Pulse opacity
                p.opacity += p.opacityDirection * 0.001;
                if (p.opacity > 0.18) p.opacityDirection = -1;
                if (p.opacity < 0.02) p.opacityDirection = 1;

                // Wrap around edges
                if (p.x < -50) p.x = canvas.width + 50;
                if (p.x > canvas.width + 50) p.x = -50;
                if (p.y < -50) p.y = canvas.height + 50;
                if (p.y > canvas.height + 50) p.y = -50;

                // Draw
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.lineWidth = 0.8;

                switch (p.shape) {
                    case "hexagon":
                        drawHexagon(ctx, 0, 0, p.size);
                        ctx.stroke();
                        break;
                    case "triangle":
                        drawTriangle(ctx, 0, 0, p.size);
                        ctx.stroke();
                        break;
                    case "diamond":
                        drawDiamond(ctx, 0, 0, p.size);
                        ctx.stroke();
                        break;
                    case "line":
                        ctx.beginPath();
                        ctx.moveTo(-p.size, 0);
                        ctx.lineTo(p.size, 0);
                        ctx.stroke();
                        break;
                    case "dot":
                        ctx.beginPath();
                        ctx.arc(0, 0, p.size * 0.3, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                        ctx.fill();
                        break;
                }

                ctx.restore();
            }

            // Draw mouse trail — geometric cursor effect
            if (mouse.x > 0 && mouse.y > 0) {
                ctx.save();
                ctx.translate(mouse.x, mouse.y);
                ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
                ctx.lineWidth = 0.5;
                drawHexagon(ctx, 0, 0, 30);
                ctx.stroke();
                ctx.restore();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouse);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1,
                pointerEvents: "none",
            }}
        />
    );
}
