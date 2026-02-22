import Image from "next/image";
import GeometricCanvas from "./components/GeometricCanvas";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StudioSection from "./components/StudioSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <div className="geo-grid" />
      <GeometricCanvas />

      {/* Fixed center watermark — barely visible, sparks wow when noticed */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "min(55vw, 600px)",
            height: "min(55vw, 600px)",
            position: "relative",
            opacity: 0.025,
            animation: "pulse-glow 10s ease-in-out infinite",
          }}
        >
          <Image
            src="/g7logo.png"
            alt=""
            fill
            style={{
              objectFit: "contain",
              filter: "grayscale(1) brightness(2)",
            }}
            aria-hidden="true"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main style={{ position: "relative", zIndex: 2 }}>
        <HeroSection />
        <StudioSection />
        <ServicesSection />
        <ProcessSection />
        <WorkSection />
        <ContactSection />
      </main>
    </>
  );
}
