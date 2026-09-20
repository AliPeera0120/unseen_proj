import React from "react";
import { impact, publicCollectionBoxCount } from "@/data/siteData";

const stats = [
  { value: impact.glassesLabel, label: "Pairs of glasses collected" },
  { value: impact.casesLabel, label: "Eyeglass cases collected" },
  { value: `${publicCollectionBoxCount}+`, label: "Collection boxes" },
];

export default function StatsSection() {
  return (
    <section id="impact" className="bg-foreground text-white">
      <div className="site-container py-16 lg:py-20">
        <p className="eyebrow text-primary">Community impact</p>
        <div className="mt-8 grid border-y border-white/15 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`py-9 sm:px-8 lg:py-12 ${index ? "border-t border-white/15 sm:border-l sm:border-t-0" : ""}`}>
              <p className="font-serif text-6xl leading-none tracking-[-0.04em] text-white lg:text-8xl">{stat.value}</p>
              <p className="mt-3 max-w-[12rem] text-sm leading-5 text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-white/40">Collection-box figure is calculated from the active locations listed on our map.</p>
      </div>
    </section>
  );
}
