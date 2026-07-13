import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, Eye, Heart } from "lucide-react";

const steps = [
  { icon: Package, title: "Donate", desc: "Drop off eyeglasses at any collection box" },
  { icon: Truck, title: "Collect", desc: "We gather and sort all donations" },
  { icon: Eye, title: "Distribute", desc: "Glasses reach those who need them most" },
  { icon: Heart, title: "Impact", desc: "Lives changed through restored vision" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
              Bridging the gap between{" "}
              <span className="text-primary">unused eyeglasses</span> and those in need
            </h2>
            <p className="mt-5 text-muted-foreground text-base leading-relaxed">
              Many families have drawers full of old eyeglasses while people experiencing homelessness 
              struggle with impaired vision every day. The Unseen Project connects these two worlds through 
              a simple, community-powered collection network across Philadelphia.
            </p>
            <Link to="/about" className="inline-block mt-8">
              <Button variant="outline" className="rounded-xl gap-2 border-border hover:bg-muted">
                Read Our Story
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{step.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}