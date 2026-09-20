import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { collectionBoxCount, collectionLocationCount, impact, publicCollectionBoxCount } from "@/data/siteData";

const metrics = [
  [impact.glassesLabel, "Pairs of glasses collected", "Prescription glasses, readers, and sunglasses donated by the community."],
  [impact.casesLabel, "Eyeglass cases collected", "Protective cases gathered alongside eyewear for safer handling and distribution."],
  [`${publicCollectionBoxCount}+`, "Collection boxes", `${collectionBoxCount} physical boxes across ${collectionLocationCount} active locations in the current directory.`],
];

export default function Impact() {
  return (
    <div>
      <section className="page-intro">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow">Our impact</p>
            <h1 className="page-title mt-6">Small objects. Real momentum.</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">Every collection box gives a community an easy way to act. Every usable pair moves that action toward a person who needs it.</p>
        </div>
      </section>

      <section className="site-container pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
          <img src="/images/community/glasses-selection.jpg" alt="A large selection of collected eyeglasses" className="h-[620px] w-full object-cover" />
          <div className="flex flex-col justify-end bg-primary p-8 text-white sm:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">What progress looks like</p>
            <p className="mt-7 font-serif text-4xl leading-[1.08] sm:text-5xl">A table full of donated glasses is not the finish line. It is the beginning of someone’s clearer view.</p>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-white section-space">
        <div className="site-container">
          <div className="grid border-y border-white/15 lg:grid-cols-3">
            {metrics.map(([value, label, description], index) => (
              <article key={label} className={`py-10 lg:px-10 lg:py-14 ${index ? "border-t border-white/15 lg:border-l lg:border-t-0" : ""}`}>
                <p className="font-serif text-7xl tracking-[-0.045em] text-primary lg:text-8xl">{value}</p>
                <h2 className="mt-5 text-lg font-semibold">{label}</h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow">The network effect</p>
            <h2 className="section-title mt-5">Built one host site at a time.</h2>
            <p className="mt-6 leading-7 text-muted-foreground">Schools, businesses, libraries, faith communities, and other local spaces make the project visible and keep donating convenient.</p>
            <Link to="/map" className="rule-link mt-8">View every location <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/community/collection-box-cinema.jpg" alt="Collection box at a cinema" loading="lazy" className="h-[500px] w-full object-cover" />
            <img src="/images/community/collection-box-gym.jpg" alt="Collection box at a local gym" loading="lazy" className="mt-20 h-[500px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/15">
        <div className="site-container flex flex-col gap-7 py-14 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <h2 className="max-w-3xl font-serif text-4xl leading-none sm:text-5xl">The next pair can come from you.</h2>
          <Link to="/get-involved" className="brand-button shrink-0">Take part <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
