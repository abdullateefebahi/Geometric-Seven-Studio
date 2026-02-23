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
