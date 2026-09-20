import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Impact", path: "/impact" },
  { label: "Locations", path: "/map" },
  { label: "Events", path: "/events" },
  { label: "Meet the Team", path: "/team" },
  { label: "Get Involved", path: "/get-involved" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="The Unseen Project home">
          <img src="/images/logo.png" alt="" className="h-11 w-11 object-contain" />
          <span className="font-serif text-lg font-semibold leading-none sm:text-xl">The Unseen Project</span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-[0.82rem] font-semibold transition-colors hover:text-primary ${active ? "text-primary" : "text-foreground/70"}`}
              >
                {link.label}
                {active && <span className="absolute inset-x-0 -bottom-[19px] h-0.5 bg-primary" />}
              </Link>
            );
          })}
        </nav>

        <Link to="/map" className="brand-button hidden lg:inline-flex">
          Find a box <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-foreground/15 xl:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-foreground/10 bg-background xl:hidden"
            aria-label="Mobile navigation"
          >
            <div className="site-container py-5">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between border-b border-foreground/10 py-4 text-lg font-semibold ${location.pathname === link.path ? "text-primary" : ""}`}
                >
                  <span><span className="mr-4 text-xs text-foreground/35">0{index + 1}</span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
              <Link to="/map" className="brand-button mt-5 w-full">Find a donation box</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
