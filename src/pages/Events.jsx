import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Glasses, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Give the Gift of Vision",
    date: "July 21, 2026",
    time: "12:00 PM – 1:00 PM",
    location: "St. John's Hospice",
    address: "1221 Race St, Philadelphia, PA 19107",
    description:
      "The Unseen Project is giving away glasses and sunglasses to people in need — completely free. Every pair of glasses can change a life. Be the reason someone sees a better tomorrow.",
    poster: "/images/gift-of-vision-poster.png",
  },
  {
    title: "Glasses & Sunglasses Giveaway",
    date: "July 29, 2026",
    time: "1:00 PM – 2:00 PM",
    location: "Covenant House",
    address: "31 E Armat St, Philadelphia, PA",
    description:
      "We're bringing free glasses and sunglasses to Covenant House, continuing our mission to restore vision for people in need across Philadelphia.",
    poster: null,
  },
];

export default function Events() {
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
              Events
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground">
              See good. Do good. In person.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join us at our giveaway events, where we distribute free glasses and
              sunglasses to people in need across Philadelphia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid ${event.poster ? "md:grid-cols-5" : ""}`}>
                    {event.poster && (
                      <div className="md:col-span-2 bg-muted/50">
                        <img
                          src={event.poster}
                          alt={`${event.title} poster`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`${event.poster ? "md:col-span-3" : ""} p-8 lg:p-10`}>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4">
                        Free Event
                      </Badge>
                      <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
                        {event.title}
                      </h2>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>

                      <div className="mt-6 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-foreground">
                          <Calendar className="w-4 h-4 text-primary shrink-0" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-foreground">
                          <Clock className="w-4 h-4 text-primary shrink-0" />
                          {event.time}
                        </div>
                        <div className="flex items-start gap-3 text-sm text-foreground">
                          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            <strong>{event.location}</strong>
                            <br />
                            {event.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Glasses className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground">
              Can't make it? You can still help.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Drop off your unused eyeglasses at any of our collection boxes, or get
              involved as a volunteer.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl gap-2">
                <Link to="/map">
                  Find a Donation Box <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <Link to="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
