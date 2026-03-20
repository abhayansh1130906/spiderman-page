"use client";

import Link from "next/link";
import { Share2, Globe, Mail } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact Support", href: "#" },
  { label: "Press Kit", href: "#" },
];

const socialLinks = [
  { Icon: Share2, label: "Share", href: "#" },
  { Icon: Globe, label: "Web", href: "#" },
  { Icon: Mail, label: "Email", href: "#" },
];

const navCols = [
  {
    title: "Explore",
    links: ["Comics", "Characters", "Movies", "Games"],
  },
  {
    title: "Marvel",
    links: ["About Marvel", "Careers", "Press", "Advertising"],
  },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--surface-lowest)" }}
    >
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--sp-primary-container), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand col */}
          <div className="flex flex-col gap-4">
            <div>
              <div
                className="font-display text-2xl uppercase tracking-widest"
                style={{ color: "var(--sp-primary-container)" }}
              >
                Spider-Man
              </div>
              <div
                className="font-body text-xs tracking-[0.3em] uppercase mt-1"
                style={{ color: "var(--sp-on-surface-variant)" }}
              >
                Brand New Day
              </div>
            </div>
            <p
              className="font-body text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--sp-on-surface-variant)" }}
            >
              The world has changed. The web is expanding. A new dawn for your
              friendly neighborhood Spider-Man.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 transition-colors duration-200"
                  style={{
                    background: "var(--surface-high)",
                    color: "var(--sp-on-surface-variant)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--sp-primary-container)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--sp-on-surface-variant)";
                  }}
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <div
                className="font-display text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--sp-primary-container)" }}
              >
                {col.title}
              </div>
              <nav className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="font-body text-sm web-underline inline-block transition-colors duration-200"
                    style={{ color: "var(--sp-on-surface-variant)" }}
                  >
                    {link}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTop:
              "1px solid color-mix(in srgb, var(--sp-outline-variant) 20%, transparent)",
          }}
        >
          <p
            className="font-body text-xs tracking-wider"
            style={{ color: "var(--sp-on-surface-variant)" }}
          >
            © 2024 MARVEL. SPIDER-MAN: BRAND NEW DAY.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-xs tracking-wider web-underline"
                style={{ color: "var(--sp-on-surface-variant)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
