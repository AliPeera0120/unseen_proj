import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  ["01", "Donate", "Community members bring eyeglasses and cases to collection boxes in schools, businesses, and gathering places."],
  ["02", "Collect", "Our team gathers the donations from host sites and brings them together for preparation."],
  ["03", "Sort", "Volunteers clean, organize, and prepare each usable pair for distribution."],
  ["04", "Share", "Prepared eyewear is brought to community partners and distribution events for people in need."],
];

export default function About() {
  return (
    <div>
      <section className="page-intro">
        <div className="site-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">About The Unseen Project</p>
            <h1 className="page-title mt-6">A simple idea, put into action.</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Usable glasses sit forgotten in drawers while people in our communities live with impaired vision. We connect one with the other.
          </p>
        </div>
      </section>

      <section className="site-container">
        <img src="/images/community/team-at-service.jpg" alt="The Unseen Project student team at a community service event" className="h-[65vh] min-h-[500px] w-full object-cover object-[center_34%]" />
      </section>

      <section className="section-space">
        <div className="site-container grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div><p className="eyebrow">Our mission</p></div>
          <div>
            <h2 className="section-title">Make clear vision more accessible through community collection.</h2>
            <div className="mt-10 grid gap-7 text-base leading-8 text-muted-foreground md:grid-cols-2">
              <p>We collect unused prescription glasses, reading glasses, sunglasses, and cases, then prepare them for redistribution to people who need them.</p>
              <p>The model is deliberately simple: local host sites make it easy to donate, and student volunteers keep the work moving from box to distribution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-white section-space">
        <div className="site-container grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow text-primary">Our story</p>
            <h2 className="section-title mt-5">It started with a question.</h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-white/65">
            <p>What happens to the eyeglasses people no longer use? Too often, perfectly good pairs remain forgotten while people nearby cannot access the vision support they need.</p>
            <p>The Unseen Project began with a collection box at a school in the Philadelphia suburbs. It filled within weeks, showing both the scale of the unused supply and the community’s willingness to help.</p>
            <p>Today, collection boxes across schools, businesses, and community spaces turn that willingness into a practical network of support.</p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title mt-5 max-w-3xl">From the back of a drawer to a clearer day.</h2>
          <ol className="mt-14 grid border-y border-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description], index) => (
              <li key={number} className={`py-8 sm:px-7 lg:py-10 ${index ? "border-t border-foreground/15 sm:border-l sm:border-t-0" : ""}`}>
                <span className="font-serif text-3xl text-primary">{number}</span>
                <h3 className="mt-7 font-serif text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-secondary/60">
        <div className="site-container grid lg:grid-cols-2">
          <img src="/images/community/volunteer-sorting.jpg" alt="A student volunteer sorting donated eyeglasses" loading="lazy" className="h-[620px] w-full object-cover" />
          <div className="flex flex-col justify-center px-0 py-16 sm:px-12 lg:px-20">
            <p className="eyebrow">Student leadership</p>
            <h2 className="section-title mt-5">Young people doing tangible work.</h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">Our volunteers do more than raise awareness. They place boxes, collect donations, sort eyewear, and help bring distribution events to life.</p>
            <Link to="/get-involved" className="rule-link mt-8 w-fit">Work with us <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
