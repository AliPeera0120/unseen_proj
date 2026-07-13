
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Hero image on desktop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[70%] hidden lg:block">
        <div className="w-full h-full rounded-l-3xl overflow-hidden opacity-90">
          <img 
            src="https://media.base44.com/images/public/69e83cf8c4dd316fee3a8deb/656fe3f9d_generated_1380d52c.png" 
            alt="Community members donating eyeglasses" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
            <img
              src="https://media.base44.com/images/public/69ebed55a2b77ce4342a0caf/5249a9601_UnseenLogo.png"
              alt="The Unseen Project"
              className="h-20 w-20 object-contain"
            />
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Philadelphia, PA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight"
          >
            Restoring Vision.{" "}
            <span className="text-primary">Empowering Lives.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
          >
            We collect donated eyeglasses from schools and community locations across Philadelphia and 
            distribute them to homeless shelters — because everyone deserves to see clearly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/map">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 h-13 text-base gap-2 shadow-lg shadow-primary/20">
                <MapPin className="w-5 h-5" />
                Find a Donation Box
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="rounded-xl px-8 h-13 text-base gap-2 border-border hover:bg-muted">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}