"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StorySection() {
  return (
    <section
      id="story"
      className="relative py-24 lg:py-36 overflow-hidden clip-diagonal"
      style={{ background: "var(--surface)" }}
    >
      {/* Halftone overlay */}
      <div className="halftone-fade absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — label + body */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="flex flex-col gap-6"
          >
            {/* Label */}
            <span
              className="font-body text-xs tracking-[0.35em] uppercase"
              style={{ color: "var(--sp-primary-container)" }}
            >
              Chapter One
            </span>

            {/* Headline */}
            <h2
              className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight"
              style={{ color: "var(--sp-on-surface)" }}
            >
              The{" "}
              <span
                style={{
                  background: "linear-gradient(15deg, #ff544e, #ffb3ad)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Story
              </span>
            </h2>

            <p
              className="font-body text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--sp-on-surface-variant)" }}
            >
              Peter Parker's life has been rebooted. The memories are fresh, the
              stakes are higher, and the city he loves has never felt more
              dangerous. Dive into the panels of a Brand New Day.
            </p>

            {/* Divider — no line, tonal shift */}
            <div className="flex items-center gap-4 pt-2">
              <div
                className="w-12 h-px"
                style={{ background: "var(--sp-primary-container)" }}
              />
              <span
                className="font-body text-xs tracking-widest uppercase"
                style={{ color: "var(--sp-on-surface-variant)" }}
              >
                No More Secrets
              </span>
            </div>

            <p
              className="font-body text-sm leading-relaxed"
              style={{ color: "var(--sp-on-surface-variant)" }}
            >
              The status quo has shifted. No more secrets, just the raw reality
              of the mask. Every rooftop, every alley is a new battleground.
            </p>
          </motion.div>

          {/* Right — editorial accent panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Main panel */}
            <div
              className="relative p-8 sm:p-12 card-accent"
              style={{ background: "var(--surface-high)" }}
            >
              {/* Giant quote */}
              <div
                className="font-display text-[7rem] sm:text-[10rem] leading-[0.8] font-bold select-none opacity-10 absolute -top-4 -left-4"
                style={{ color: "var(--sp-primary)" }}
              >
                "
              </div>
              <blockquote className="relative z-10">
                <p
                  className="font-display text-xl sm:text-2xl uppercase leading-snug mb-6"
                  style={{ color: "var(--sp-on-surface)" }}
                >
                  The web is expanding. Experience the dawn of a heroic era.
                </p>
                <footer
                  className="font-body text-xs tracking-widest uppercase"
                  style={{ color: "var(--sp-primary-container)" }}
                >
                  — Brand New Day, Issue #1
                </footer>
              </blockquote>
            </div>

            {/* Floating stat blocks */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              {[
                { value: "2024", label: "Year of the Reboot" },
                { value: "100+", label: "Issues Planned" },
              ].map((stat) => (
                <div
                  key={stat.value}
                  className="p-6"
                  style={{ background: "var(--surface-low)" }}
                >
                  <div
                    className="font-display text-3xl mb-1"
                    style={{ color: "var(--sp-primary-container)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-body text-xs tracking-wider uppercase"
                    style={{ color: "var(--sp-on-surface-variant)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
