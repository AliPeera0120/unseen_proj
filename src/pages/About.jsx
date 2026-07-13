import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, Truck, Eye, Heart, ArrowRight } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

const processSteps = [
  {
    icon: Package,
    num: "01",
    title: "Donation",
    desc: "Community members drop off eyeglasses and cases at collection boxes placed in schools, businesses, and community centers throughout Philadelphia.",
  },
  {
    icon: Truck,
    num: "02",
    title: "Collection",
    desc: "Our team regularly visits each site to collect donated items and transport them to our sorting facility.",
  },
  {
    icon: Eye,
    num: "03",
    title: "Sorting",
    desc: "Each pair of glasses is cleaned, categorized by prescription type, and prepared for distribution.",
  },
  {
    icon: Heart,
    num: "04",
    title: "Distribution",
    desc: "Sorted eyeglasses are delivered to homeless shelters across Philadelphia, matched to individuals in need.",
  },
];

export default function About() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              About Us
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Helping communities <span className="text-primary">see clearly</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              The Unseen Project was born from a simple observation: millions of eyeglasses sit unused in drawers 
              while people experiencing homelessness struggle with impaired vision every day. We bridge that gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Our Mission"
              title="Vision care for everyone"
              description="We believe that clear vision is a basic human need, not a luxury. Our mission is to collect 
              unused eyeglasses from the community and deliver them to homeless shelters — empowering 
              individuals to read, find work, and navigate the world with dignity."
            />
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 lg:py-28 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
                Our Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-tight mb-6">
                How it all started
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  It started with a school project and a simple question: what happens to all the eyeglasses 
                  people no longer use? We discovered that most go in a drawer or the trash, while thousands 
                  of people in our own city can't afford the vision care they desperately need.
                </p>
                <p>
                  We placed our first donation box in a local high school in Philadelphia. Within weeks, it 
                  was full. That one box showed us the power of community generosity — and the urgent need 
                  for accessible vision care.
                </p>
                <p>
                  Today, The Unseen Project operates donation boxes across schools, businesses, and community 
                  centers throughout Philadelphia, connecting unused eyeglasses with the homeless shelters that 
                  need them most.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="From donation to impact"
            description="A simple four-step process that turns unused eyeglasses into life-changing tools."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <span className="text-5xl font-serif font-bold text-muted/60">{step.num}</span>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-4">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Ready to make a difference?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Whether you have glasses to donate or want to host a collection box, we'd love to hear from you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 gap-2">
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/map">
              <Button variant="outline" className="rounded-xl px-8 gap-2 border-border">
                Find a Box
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}