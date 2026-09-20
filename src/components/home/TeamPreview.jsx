import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { teamMembers } from "@/data/teamMembers";

export default function TeamPreview() {
  const founder = teamMembers[0];

  return (
    <section className="section-space bg-secondary/60">
      <div className="site-container grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
        <figure className="relative aspect-[4/5] max-h-[680px] overflow-hidden bg-muted sm:aspect-[5/4] lg:aspect-[4/5]">
          <img
            src={founder.image}
            alt={`${founder.name}, founder of The Unseen Project`}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
          <div className="image-wash absolute inset-0" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{founder.role}</p>
            <p className="mt-2 font-serif text-4xl leading-none tracking-[-0.035em] sm:text-5xl">{founder.name}</p>
          </figcaption>
        </figure>

        <div>
          <p className="eyebrow">The people behind the project</p>
          <h2 className="section-title mt-5">
            <Link to="/team" className="inline-flex items-end gap-3 transition-colors hover:text-primary">
              Meet the team <ArrowUpRight className="mb-1 h-7 w-7 shrink-0 sm:h-9 sm:w-9" />
            </Link>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
            Meet the student leaders behind The Unseen Project and the work we do to expand access to vision care.
          </p>
          <Link to="/team" className="brand-button mt-9">
            Meet everyone <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
