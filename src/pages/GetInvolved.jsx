import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const paths = [
  {
    number: "01",
    title: "Host a collection box",
    description: "Bring a collection point to your school, business, office, library, clinic, or community space.",
    items: ["We provide a branded collection box", "Boxes fit in lobbies, classrooms, and waiting areas", "Our team coordinates collection and pickup"],
    cta: "Request a box",
    href: "/contact",
    image: "/images/community/collection-box-school.jpg",
    alt: "A collection box at a school",
  },
  {
    number: "02",
    title: "Donate eyewear",
    description: "Give prescription glasses, reading glasses, sunglasses, or cases a useful next chapter.",
    items: ["Prescription glasses in usable condition", "Reading glasses and sunglasses", "Hard or soft eyeglass cases"],
    cta: "Find a drop-off",
    href: "/map",
    image: "/images/community/glasses-selection.jpg",
    alt: "Collected eyeglasses arranged for selection",
  },
  {
    number: "03",
    title: "Work with us",
    description: "Connect your shelter, clinic, school, or community organization with a practical service project.",
    items: ["Host or co-organize a collection drive", "Ask about distribution opportunities", "Bring volunteers into the work"],
    cta: "Start a conversation",
    href: "/contact",
    image: "/images/community/team-at-service.jpg",
    alt: "Student volunteers at a community service event",
  },
];

export default function GetInvolved() {
  return (
    <div>
      <section className="page-intro">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div><p className="eyebrow">Get involved</p><h1 className="page-title mt-6">A place, a pair, or your time.</h1></div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">There is more than one way into the work. Choose the action that fits your school, organization, or everyday routine.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="site-container editorial-rule">
          {paths.map((path, index) => (
            <article key={path.number} className="grid gap-9 border-b border-foreground/15 py-12 lg:grid-cols-[0.1fr_0.48fr_0.42fr] lg:gap-14 lg:py-20">
              <p className="font-serif text-3xl text-primary">{path.number}</p>
              <div className={index % 2 ? "lg:order-3" : ""}>
                <img src={path.image} alt={path.alt} loading={index ? "lazy" : "eager"} className="h-[420px] w-full object-cover sm:h-[540px]" />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="font-serif text-4xl leading-none tracking-[-0.025em] sm:text-5xl">{path.title}</h2>
                <p className="mt-6 max-w-lg leading-7 text-muted-foreground">{path.description}</p>
                <ul className="mt-7 space-y-3">
                  {path.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
                </ul>
                <Link to={path.href} className="brand-button mt-9 w-fit">{path.cta} <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="site-container py-16 text-center sm:py-20 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/65">Not sure where to begin?</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-none sm:text-6xl">Tell us what you have in mind.</h2>
          <Link to="/contact" className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-foreground hover:text-white">Contact our team <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
