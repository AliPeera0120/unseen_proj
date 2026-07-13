import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, Glasses, Handshake, CheckCircle2, ArrowRight, MapPin } from "lucide-react";

const sections = [
  {
    icon: Package,
    title: "Host a Donation Box",
    desc: "Place a collection box at your school, business, or community center. We provide the box and handle pickups.",
    items: [
      "We deliver a branded collection box to your location",
      "Boxes are compact and fit in lobbies, classrooms, or waiting areas",
      "We schedule regular pickups so you never have to worry",
      "Great for schools, offices, libraries, and clinics",
    ],
    cta: "Request a Box",
    ctaLink: "/contact",
  },
  {
    icon: Glasses,
    title: "Donate Eyeglasses",
    desc: "Drop off your unused prescription glasses, reading glasses, or sunglasses at any of our collection sites.",
    items: [
      "Prescription glasses (any strength)",
      "Reading glasses",
      "Sunglasses",
      "Eyeglass cases (hard or soft)",
    ],
    cta: "Find a Drop-off",
    ctaLink: "/map",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    desc: "If you run a shelter, clinic, or community organization, we'd love to work together to distribute eyeglasses.",
    items: [
      "Shelters can request glasses for residents",
      "Clinics can refer patients who need affordable eyewear",
      "Community orgs can co-host collection drives",
      "Corporate partners can sponsor collection campaigns",
    ],
    cta: "Contact Us",
    ctaLink: "/contact",
  },
];

export default function GetInvolved() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 block">
              Get Involved
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight max-w-3xl mx-auto">
              There are many ways to <span className="text-primary">help</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you host a box, donate a pair, or partner with us — every action brings vision 
              to someone who needs it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three sections */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                      <section.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {section.desc}
                    </p>
                    <Link to={section.ctaLink} className="inline-block mt-6">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-6 gap-2">
                        {section.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="md:col-span-3 p-8 lg:p-10 flex items-center">
                    <ul className="space-y-4 w-full">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm lg:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            Ready to take action?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Find the nearest donation box or reach out to our team.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/map">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 gap-2">
                <MapPin className="w-4 h-4" />
                Find a Box
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-xl px-8 gap-2 border-border">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}