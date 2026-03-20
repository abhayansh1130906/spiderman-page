"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Camera, Heart, AlertTriangle } from "lucide-react";

const characters = [
  {
    id: "peter-parker",
    name: "Peter Parker",
    role: "The Hero Under the Mask",
    description:
      "Struggling freelance photographer by day, legendary wall-crawler by night.",
    icon: Camera,
    badge: "Protagonist",
    badgeColor: "var(--sp-primary-container)",
    badgeTextColor: "var(--sp-on-primary-fixed)",
    accentColor: "#ff544e",
    panelBg: "var(--surface-high)",
    iconBg: "var(--sp-primary-container)",
    iconColor: "var(--sp-on-primary-fixed)",
  },
  {
    id: "aunt-may",
    name: "Aunt May",
    role: "The Guiding Light",
    description: `"Peter, you have a heart that could save the whole world."`,
    icon: Heart,
    badge: "Ally",
    badgeColor: "var(--sp-secondary-container)",
    badgeTextColor: "var(--sp-secondary)",
    accentColor: "#a7c8ff",
    panelBg: "var(--surface)",
    iconBg: "var(--sp-secondary-container)",
    iconColor: "var(--sp-secondary)",
  },
  {
    id: "classified",
    name: "Classified",
    role: "New Threat Detected",
    description:
      "A shadow moves through the city. Identity unknown. Motives unclear. Danger: extreme.",
    icon: AlertTriangle,
    badge: "Villain",
    badgeColor: "var(--sp-primary-container)",
    badgeTextColor: "var(--sp-on-primary-fixed)",
    accentColor: "#ff544e",
    panelBg: "var(--surface-lowest)",
    iconBg: "var(--surface-high)",
    iconColor: "var(--sp-primary-container)",
    classified: true,
  },
  {
    id: "web-tech",
    name: "Web Tech",
    role: "Advanced Engineering Division",
    description:
      "Cutting-edge technology meets street-level heroism. The suit evolves.",
    icon: Shield,
    badge: "Tech",
    badgeColor: "var(--sp-secondary-container)",
    badgeTextColor: "var(--sp-secondary)",
    accentColor: "#a7c8ff",
    panelBg: "var(--surface)",
    iconBg: "var(--surface-high)",
    iconColor: "var(--sp-secondary)",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function CharactersSection() {
  return (
    <section
      id="characters"
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: "var(--surface-low)" }}
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
            The Universe
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase"
            style={{ color: "var(--sp-on-surface)" }}
          >
            Meet the{" "}
            <span
              style={{
                background: "linear-gradient(15deg, #ff544e, #ffb3ad)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Icons
            </span>
          </h2>
        </motion.div>

        {/* Character cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {characters.map((char) => {
            const Icon = char.icon;
            return (
              <motion.div key={char.id} variants={cardVariants}>
                <Card
                  className="card-accent relative border-0 overflow-hidden group cursor-pointer transition-all duration-500 h-full"
                  style={{ background: char.panelBg }}
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
                  {/* Classified blur overlay */}
                  {char.classified && (
                    <div
                      className="absolute inset-0 z-10 flex items-center justify-center"
                      style={{
                        backdropFilter: "blur(6px)",
                        background:
                          "color-mix(in srgb, #0e0e0e 50%, transparent)",
                      }}
                    >
                      <div
                        className="font-display text-xs tracking-[0.4em] uppercase px-4 py-2"
                        style={{
                          background: "var(--sp-primary-container)",
                          color: "var(--sp-on-primary-fixed)",
                          transform: "rotate(-12deg)",
                        }}
                      >
                        Classified
                      </div>
                    </div>
                  )}

                  <CardContent className="p-7 flex flex-col gap-4 h-full">
                    {/* Icon + Badge row */}
                    <div className="flex items-center justify-between">
                      <div
                        className="p-3"
                        style={{ background: char.iconBg }}
                      >
                        <Icon size={20} style={{ color: char.iconColor }} />
                      </div>
                      <Badge
                        className="font-body text-xs tracking-widest uppercase border-0"
                        style={{
                          background: char.badgeColor,
                          color: char.badgeTextColor,
                        }}
                      >
                        {char.badge}
                      </Badge>
                    </div>

                    {/* Accent line */}
                    <div
                      className="w-8 h-px"
                      style={{ background: char.accentColor }}
                    />

                    {/* Name */}
                    <h3
                      className="font-display text-xl uppercase leading-tight"
                      style={{ color: "var(--sp-on-surface)" }}
                    >
                      {char.name}
                    </h3>

                    {/* Role */}
                    <div
                      className="font-body text-xs tracking-widest uppercase"
                      style={{ color: char.accentColor }}
                    >
                      {char.role}
                    </div>

                    {/* Description */}
                    <p
                      className="font-body text-sm leading-relaxed mt-auto"
                      style={{ color: "var(--sp-on-surface-variant)" }}
                    >
                      {char.description}
                    </p>
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
