"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EASE_POWER } from "@/lib/motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: EASE_POWER,
    },
  }),
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Diagonal red accent bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, #ff544e 8%, transparent) 0%, transparent 50%)",
        }}
      />

      {/* Halftone texture overlay */}
      <div className="halftone-fade absolute inset-0" />

      {/* Content wrapper */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">

          {/* Text column */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:py-32">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <span
                className="inline-block font-body text-xs tracking-[0.3em] uppercase px-3 py-1"
                style={{
                  background: "var(--sp-secondary-container)",
                  color: "var(--sp-secondary)",
                }}
              >
                Marvel Comics — 2024
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] tracking-tight uppercase"
              style={{ color: "var(--sp-on-surface)" }}
            >
              Spider-Man
              <br />
              <span
                className="block mt-2"
                style={{
                  background: "linear-gradient(15deg, #ff544e 0%, #ffb3ad 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Brand New Day
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-body text-base sm:text-lg max-w-md leading-relaxed"
              style={{ color: "var(--sp-on-surface-variant)" }}
            >
              The world has changed. The web is expanding. Experience the dawn
              of a heroic era where every choice resonates through the city
              streets.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="font-display tracking-widest uppercase text-sm px-8 group"
                style={{
                  background: "var(--sp-primary-container)",
                  color: "var(--sp-on-primary-fixed)",
                }}
              >
                Read Now
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="ghost-border font-display tracking-widest uppercase text-sm px-8 transition-colors duration-300"
                style={{
                  color: "var(--sp-secondary)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--sp-secondary-container)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                Meet the Icons
              </Button>
            </motion.div>
          </div>

          {/* Visual column — decorative panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE_POWER }}
            className="relative hidden lg:flex justify-end items-center h-full"
          >
            <div
              className="relative w-full max-w-lg h-[70vh]"
              style={{ background: "var(--surface)" }}
            >
              {/* Giant decorative number */}
              <div
                className="absolute -top-8 -left-12 font-display text-[14rem] leading-none font-bold select-none pointer-events-none z-0"
                style={{
                  color: "color-mix(in srgb, #ff544e 6%, transparent)",
                  lineHeight: 1,
                }}
              >
                #1
              </div>

              {/* Inner card */}
              <div
                className="absolute inset-8 flex flex-col justify-end p-8"
                style={{ background: "var(--surface-high)" }}
              >
                <div
                  className="font-body text-xs tracking-[0.3em] uppercase mb-3"
                  style={{ color: "var(--sp-primary-container)" }}
                >
                  Issue #001 — 2024
                </div>
                <div
                  className="font-display text-3xl uppercase mb-2"
                  style={{ color: "var(--sp-on-surface)" }}
                >
                  The Hero Returns
                </div>
                <div
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "var(--sp-on-surface-variant)" }}
                >
                  A new chapter begins for the wall-crawler.
                </div>
                {/* Diagonal accent strip */}
                <div
                  className="absolute top-0 right-0 w-1 h-full"
                  style={{
                    background: "linear-gradient(15deg, #ff544e, #ffb3ad)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={20} style={{ color: "var(--sp-outline-variant)" }} />
      </motion.div>
    </section>
  );
}
