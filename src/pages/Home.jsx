import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import AboutPreview from "../components/home/AboutPreview";
import MapPreview from "../components/home/MapPreview";
import TeamPreview from "../components/home/TeamPreview";
import CTASection from "../components/home/CTASection";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ActivityPreview() {
  return (
    <section className="section-space">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Recently in the community</p>
            <h2 className="section-title mt-5 max-w-3xl">Collection in motion.</h2>
          </div>
          <Link to="/events" className="rule-link">See all featured activity <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <Link to="/events" className="group relative min-h-[520px] overflow-hidden bg-muted">
            <img src="/images/community/glasses-selection.jpg" alt="Rows of donated eyeglasses ready to be selected" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="image-wash absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-9">
              <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">Distribution</p><h3 className="mt-2 font-serif text-3xl sm:text-4xl">Helping people find their pair</h3></div>
              <ArrowUpRight className="h-6 w-6" />
            </div>
          </Link>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <Link to="/events" className="group relative min-h-[250px] overflow-hidden bg-muted">
              <img src="/images/community/collection-box-school.jpg" alt="The Unseen Project school collection box" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="image-wash absolute inset-0" />
              <h3 className="absolute bottom-0 p-6 font-serif text-2xl text-white">Community collection drives</h3>
            </Link>
            <Link to="/events" className="group relative min-h-[250px] overflow-hidden bg-muted">
              <img src="/images/community/team-at-service.jpg" alt="Student volunteers together at a service event" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="image-wash absolute inset-0" />
              <h3 className="absolute bottom-0 p-6 font-serif text-2xl text-white">Students showing up to serve</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <MapPreview />
      <ActivityPreview />
      <TeamPreview />
      <CTASection />
    </div>
  );
}
