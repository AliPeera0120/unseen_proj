import React from "react";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { teamMembers } from "@/data/teamMembers";

function Portrait({ member, className = "" }) {
  if (member.image) {
    return (
      <img
        src={member.image}
        alt={`${member.name} headshot`}
        className={`h-full w-full object-cover object-center ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative grid h-full w-full place-items-center overflow-hidden bg-secondary text-foreground ${className}`}
      role="img"
      aria-label={`${member.name} portrait placeholder`}
    >
      <span className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-primary/25" />
      <span className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full border border-foreground/10" />
      <span className="font-serif text-7xl tracking-[-0.06em] text-primary sm:text-8xl">{member.initials}</span>
    </div>
  );
}

function LinkedInLink({ member }) {
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="rule-link w-fit"
      aria-label={`View ${member.name} on LinkedIn`}
    >
      <Linkedin className="h-4 w-4" /> View LinkedIn <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export default function Team() {
  const [founder, ...directors] = teamMembers;

  return (
    <div>
      <section className="page-intro">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow">Meet the team</p>
            <h1 className="page-title mt-6">Students turning an idea into action.</h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            The Unseen Project is led by students working across design, operations, outreach, and communications to grow a practical community mission.
          </p>
        </div>
      </section>

      <section className="site-container pb-20 lg:pb-32">
        <article className="grid border-y border-foreground/15 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:py-16">
          <div className="aspect-[4/5] max-h-[720px]">
            <Portrait member={founder} />
          </div>
          <div className="flex flex-col justify-center py-10 lg:py-0">
            <p className="eyebrow">Founder</p>
            <h2 className="mt-5 font-serif text-6xl leading-[0.92] tracking-[-0.045em] sm:text-7xl">{founder.name}</h2>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-primary">{founder.role}</p>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">{founder.description}</p>

            <div className="mt-9 grid gap-3 border-y border-foreground/15 py-6 text-sm sm:grid-cols-2">
              <a href={`mailto:${founder.email}`} className="flex items-center gap-3 font-semibold hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> {founder.email}
              </a>
              <a href={`tel:${founder.phoneHref}`} className="flex items-center gap-3 font-semibold hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {founder.phone}
              </a>
            </div>
            <div className="mt-8"><LinkedInLink member={founder} /></div>
          </div>
        </article>
      </section>

      <section className="bg-white section-space">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <p className="eyebrow">Leadership team</p>
            <h2 className="section-title">Working across every part of the mission.</h2>
          </div>

          <div className="mt-14 grid border-y border-foreground/15 md:grid-cols-3">
            {directors.map((member, index) => (
              <article key={member.name} className={`py-10 md:px-7 lg:px-9 ${index ? "border-t border-foreground/15 md:border-l md:border-t-0" : ""}`}>
                <div className="aspect-[4/5]"><Portrait member={member} /></div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-primary">{member.role}</p>
                <h3 className="mt-3 font-serif text-4xl leading-none tracking-[-0.035em]">{member.name}</h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">{member.description}</p>
                <div className="mt-7"><LinkedInLink member={member} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-white">
        <div className="site-container grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:py-24">
          <div>
            <p className="eyebrow text-primary">Build with us</p>
            <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">Good work grows when more people take part.</h2>
          </div>
          <Link to="/get-involved" className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary hover:text-white">
            Get involved <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
