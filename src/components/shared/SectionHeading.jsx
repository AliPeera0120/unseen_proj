import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, centered = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${centered ? "text-center max-w-2xl mx-auto" : ""}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}