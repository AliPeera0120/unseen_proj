import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-primary text-white">
      <div className="site-container grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Put an old pair to work</p>
          <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            Help make clear sight more accessible.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link to="/map" className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-foreground hover:text-white">
            Find a box <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex min-h-12 items-center justify-center border border-white/45 px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-foreground">
            Host a collection
          </Link>
        </div>
      </div>
    </section>
  );
}
