import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import AboutPreview from "../components/home/AboutPreview";
import MapPreview from "../components/home/MapPreview";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <MapPreview />
      <CTASection />
    </div>
  );
}