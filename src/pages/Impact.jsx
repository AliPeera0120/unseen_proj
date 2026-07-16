import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Glasses, Briefcase, TrendingUp, Users, Building2, ArrowRight } from "lucide-react";
import AnimatedCounter from "../components/shared/AnimatedCounter";
import SectionHeading from "../components/shared/SectionHeading";

const mainStats = [
  { icon: MapPin, value: 25, suffix: "+", label: "Donation Sites", desc: "Across Philadelphia schools and businesses" },
  { icon: Glasses, value: 1000, suffix: "+", label: "Eyeglasses Collected", desc: "Donated by our generous community" },
  { icon: Briefcase, value: 500, suffix: "+", label: "Cases Collected", desc: "Protecting glasses during distribution" },
];

const growthMetrics = [
  { label: "Partner Shelters", value: 2, suffix: "", icon: Building2 },
  { label: "Volunteers", value: 30, suffix: "+", icon: Users },
  { label: "Items Collected", value: 1500, suffix: "+", icon: TrendingUp },
];

const milestones = [
  { date: "2025", title: "First Donation Box", desc: "Placed our first collection box at a school in the Philadelphia suburbs — it filled up within weeks." },
  { date: "Early 2026", title: "25+ Locations", desc: "Expanded to more than 25 donation sites across schools, businesses, and community centers." },
  { date: "2026", title: "1,000+ Glasses", desc: "Passed 1,000 eyeglasses and 500 cases collected from our generous community." },
  { date: "Summer 2026", title: "First Giveaway Events", desc: "Began distributing free glasses and sunglasses directly to people in need at St. John's Hospice and Covenant House." },
];

export default function Impact() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-accent/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Our Impact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight max-w-3xl mx-auto">
              Measuring what <span className="text-primary">matters</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every pair of donated eyeglasses represents someone who can now read, navigate the world, 
              and take one more step toward independence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Stats */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {mainStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-5xl font-serif font-semibold text-foreground">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-2 font-semibold text-foreground">{stat.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{stat.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Growth"
            title="Building momentum"
            description="Our community continues to grow as more people join the mission."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {growthMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-3xl font-serif font-semibold text-foreground">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Milestones"
            title="Our journey so far"
          />
          <div className="max-w-2xl mx-auto space-y-0">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10 pb-10 last:pb-0"
              >
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                {i < milestones.length - 1 && (
                  <div className="absolute left-[11px] top-7 w-0.5 h-full bg-border" />
                )}
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.date}</span>
                <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Help us grow the impact
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Every donation box, every volunteer, and every pair of glasses moves us closer to our goal.
          </p>
          <Link to="/get-involved" className="inline-block mt-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 gap-2">
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}