import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-[780px] overflow-hidden bg-background pt-[76px] lg:min-h-screen">
      <div className="site-container grid min-h-[704px] items-stretch lg:min-h-[calc(100vh-76px)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex flex-col justify-center py-16 pr-0 lg:py-24 lg:pr-16">
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
            Student-led · Philadelphia area
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="display-title mt-6 max-w-3xl"
          >
            Restoring vision.<br />
            <span className="text-primary">Empowering lives.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            We collect gently used eyeglasses and cases through a growing community network, then prepare them for people who need clearer sight.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link to="/map" className="brand-button"><MapPin className="h-4 w-4" /> Find a donation box</Link>
            <Link to="/get-involved" className="light-button">Get involved <ArrowUpRight className="h-4 w-4" /></Link>
          </motion.div>
          <a href="#impact" className="mt-14 inline-flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-foreground/45 hover:text-primary">
            See our impact <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative -mx-5 min-h-[460px] sm:-mx-8 lg:mx-0 lg:min-h-0"
        >
          <img
            src="/images/community/sorting-day.jpg"
            alt="A student volunteer sorting donated eyeglasses"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <p className="max-w-xs text-sm leading-6">Every donated pair is cleaned, sorted, and prepared with care.</p>
            <span className="hidden border-l border-white/50 pl-5 text-xs uppercase tracking-[0.16em] sm:block">In the community</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
