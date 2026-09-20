import React from "react";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "@/data/events";

function EventDetails({ event }) {
  if (!event.date) return <p className="eyebrow mt-6">{event.status}</p>;
  return (
    <dl className="mt-7 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
      <div className="flex gap-2"><CalendarDays className="h-4 w-4 shrink-0 text-primary" /><span>{event.date}</span></div>
      <div className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-primary" /><span>{event.time}</span></div>
      <div className="flex gap-2 sm:col-span-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span><strong className="font-semibold text-foreground">{event.location}</strong><br />{event.address}</span></div>
    </dl>
  );
}

export default function Events() {
  return (
    <div>
      <section className="page-intro pb-10 lg:pb-14">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Events & field notes</p>
              <h1 className="page-title mt-6">This is what community looks like.</h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:pb-2">
              From school-wide drives to direct distribution, our work happens face to face. Watch a recent news feature, then explore a selection of community activities.
            </p>
          </div>
        </div>
      </section>

      <section className="site-container pb-20 lg:pb-28">
        <div className="relative overflow-hidden bg-foreground">
          <video
            className="aspect-video w-full bg-black object-contain"
            controls
            playsInline
            preload="metadata"
            poster="/images/community/events-video-poster.jpg"
            aria-label="News coverage of students providing donated glasses to an unhoused community"
          >
            <source src="/video/community-news-feature.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>
        <div className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">Community news feature</p>
          <p className="text-muted-foreground">Students provide donated glasses in Center City</p>
        </div>
      </section>

      <section className="bg-white section-space">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow">Featured activity</p>
            <h2 className="section-title mt-5">Drives and distributions.</h2>
          </div>

          <div className="mt-14 editorial-rule">
            {events.map((event, index) => (
              <article key={event.title} className="grid gap-8 border-b border-foreground/15 py-10 lg:grid-cols-[0.13fr_0.42fr_0.45fr] lg:gap-12 lg:py-16">
                <p className="font-serif text-3xl text-primary">0{index + 1}</p>
                <div className={index % 2 ? "lg:order-3" : ""}>
                  <img src={event.image} alt={event.imageAlt} loading="lazy" className="h-[360px] w-full object-cover object-center sm:h-[460px]" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-4xl leading-none tracking-[-0.025em] sm:text-5xl">{event.title}</h3>
                  <p className="mt-6 max-w-xl leading-7 text-muted-foreground">{event.description}</p>
                  <EventDetails event={event} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-secondary/60">
        <div className="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="eyebrow">And this is only part of the story</p>
            <h2 className="section-title mt-5">More boxes. More hands. More moments of connection.</h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              These featured moments represent a wider rhythm of collection, sorting, and community support made possible by volunteers and host sites.
            </p>
            <Link to="/get-involved" className="rule-link mt-8">Join the next chapter <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/community/volunteer-sorting.jpg" alt="Student volunteer sorting donated eyewear" loading="lazy" className="h-[470px] w-full object-cover" />
            <img src="/images/community/collection-box-gym.jpg" alt="Eyeglass collection box at a local business" loading="lazy" className="mt-16 h-[470px] w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
