import React from "react";
import { motion } from "framer-motion";
import { MapPin, Glasses, Briefcase } from "lucide-react";
import AnimatedCounter from "../shared/AnimatedCounter";

const stats = [
  { icon: MapPin, value: 15, suffix: "+", label: "Donation Sites", color: "bg-primary/10 text-primary" },
  { icon: Glasses, value: 250, suffix: "+", label: "Eyeglasses Collected", color: "bg-accent/10 text-accent" },
  { icon: Briefcase, value: 100, suffix: "+", label: "Cases Collected", color: "bg-chart-3/10 text-chart-3" },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl lg:text-5xl font-serif font-semibold text-foreground">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}