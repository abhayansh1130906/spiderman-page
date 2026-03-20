"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Eye } from "lucide-react";

const episodes = [
  {
    id: "identity-crisis",
    icon: Eye,
    badge: "Arc 1",
    title: "Identity Crisis",
    description:
      "Peter Parker navigates a world that has forgotten his secret. The mask is gone but the danger remains. How do you fight when no one knows who you are?",
    issue: "Issues #001–#008",
    color: "#ff544e",
  },
  {
    id: "night-watch",
    icon: Moon,
    badge: "Arc 2",
    title: "Night Watch",
    description:
      "A new threat emerges from the shadows of New York's underworld. Spider-Man must forge uneasy alliances to survive the longest night of his career.",
    issue: "Issues #009–#018",
    color: "#a7c8ff",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function EpisodesSection() {
  return (
    <section
      id="episodes"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span
            className="font-body text-xs tracking-[0.35em] uppercase block mb-4"
            style={{ color: "var(--sp-primary-container)" }}
          >
            Waking Up in a New World
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase"
            style={{ color: "var(--sp-on-surface)" }}
          >
            Story Arcs
          </h2>
        </motion.div>

        {/* Episode cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {episodes.map((ep) => {
            const Icon = ep.icon;
            return (
              <motion.div key={ep.id} variants={cardVariants}>
                <Card
                  className="card-accent relative overflow-hidden border-0 group cursor-pointer transition-all duration-500"
                  style={{ background: "var(--surface-high)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 20px 40px color-mix(in srgb, #0e0e0e 60%, transparent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <CardContent className="p-8 sm:p-10">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="p-3"
                        style={{ background: "var(--surface-lowest)" }}
                      >
                        <Icon size={20} style={{ color: ep.color }} />
                      </div>
                      <Badge
                        className="font-body text-xs tracking-widest uppercase border-0"
                        style={{
                          background: "var(--sp-secondary-container)",
                          color: "var(--sp-secondary)",
                        }}
                      >
                        {ep.badge}
                      </Badge>
                    </div>

                    {/* Issue label */}
                    <div
                      className="font-body text-xs tracking-[0.3em] uppercase mb-3"
                      style={{ color: ep.color }}
                    >
                      {ep.issue}
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display text-2xl sm:text-3xl uppercase mb-4"
                      style={{ color: "var(--sp-on-surface)" }}
                    >
                      {ep.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="font-body text-sm leading-relaxed"
                      style={{ color: "var(--sp-on-surface-variant)" }}
                    >
                      {ep.description}
                    </p>

                    {/* Diagonal accent at right edge is applied via card-accent ::before */}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
