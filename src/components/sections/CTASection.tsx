"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { EASE_POWER } from "@/lib/motion";

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: "var(--sp-primary-container)" }}
    >
      {/* Web pattern overlay */}
      <div className="web-pattern absolute inset-0 pointer-events-none" />

      {/* Diagonal accent edge at top */}
      <div
        className="absolute top-0 left-0 right-0 h-2"
        style={{
          background: "linear-gradient(90deg, #ffb3ad, #ff544e, #003061)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_POWER }}
            className="font-body text-xs tracking-[0.4em] uppercase"
            style={{ color: "var(--sp-on-primary-fixed)" }}
          >
            The City Awaits
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_POWER }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] uppercase leading-none"
            style={{ color: "var(--sp-on-primary-fixed)" }}
          >
            Ready to{" "}
            <span
              className="block"
              style={{
                background: "linear-gradient(15deg, #131313, #353534)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Swing?
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_POWER }}
            className="font-body text-base sm:text-lg max-w-md"
            style={{ color: "color-mix(in srgb, #410003 70%, #131313)" }}
          >
            The city is waiting for its hero. Grab your first issue and join the
            Brand New Day.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_POWER }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="font-display tracking-widest uppercase text-sm px-10 group shadow-cinematic"
              style={{
                background: "var(--background)",
                color: "var(--sp-primary-container)",
              }}
            >
              Start Reading
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="font-display tracking-widest uppercase text-sm px-10 transition-colors duration-300"
              style={{
                color: "var(--sp-on-primary-fixed)",
                border: "1px solid color-mix(in srgb, #410003 30%, transparent)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "color-mix(in srgb, #131313 20%, transparent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              View All Issues
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
