import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="section-space">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
        <div className="relative pb-10 sm:pr-20">
          <img
            src="/images/community/team-at-service.jpg"
            alt="The Unseen Project student volunteers at a community service event"
            loading="lazy"
            className="h-[620px] w-full object-cover object-[center_35%]"
          />
          <img
            src="/images/community/collection-box-cinema.jpg"
            alt="A community eyeglass collection box"
            loading="lazy"
            className="absolute bottom-0 right-0 hidden h-60 w-48 border-8 border-background object-cover sm:block"
          />
        </div>
        <div>
          <p className="eyebrow">Why it matters</p>
          <h2 className="section-title mt-5">One unused pair can become someone’s next clear view.</h2>
          <p className="mt-7 text-lg leading-8 text-muted-foreground">
            The Unseen Project turns a simple household donation into practical support. Our student volunteers place collection boxes, gather donations, and sort each pair for distribution.
          </p>
          <blockquote className="mt-10 border-l-2 border-primary pl-6 font-serif text-2xl leading-snug sm:text-3xl">
            “Clear vision is a basic need, not a luxury.”
          </blockquote>
          <Link to="/about" className="rule-link mt-10">Read our story <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  );
}
