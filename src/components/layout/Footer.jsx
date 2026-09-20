import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  ["About", "/about"],
  ["Impact", "/impact"],
  ["Donation locations", "/map"],
  ["Events", "/events"],
  ["Get involved", "/get-involved"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-[1.4fr_0.6fr_0.7fr] lg:gap-20">
          <div>
            <img src="/images/logo.png" alt="The Unseen Project" className="h-16 w-16 bg-white object-contain" />
            <p className="mt-7 max-w-xl font-serif text-4xl leading-[1.02] sm:text-5xl">
              A clearer future begins with a pair already in your drawer.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Explore</p>
            <div className="mt-5 space-y-3">
              {links.map(([label, path]) => (
                <Link key={path} to={path} className="block text-sm text-white/65 transition-colors hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Say hello</p>
            <a
              href="mailto:theunseenprojectofficial@gmail.com"
              className="mt-5 inline-flex max-w-full items-start gap-2 break-all text-sm text-white/70 hover:text-white"
            >
              theunseenprojectofficial@gmail.com <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
            </a>
            <p className="mt-5 text-sm text-white/50">Philadelphia area</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Unseen Project</p>
          <p>Student-led. Community-powered.</p>
        </div>
      </div>
    </footer>
  );
}
