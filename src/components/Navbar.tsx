"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Comics", href: "#story" },
  { label: "Movies", href: "#characters" },
  { label: "Characters", href: "#characters" },
  { label: "Store", href: "#cta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-outline-variant/20 py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className="font-display text-lg sm:text-xl tracking-widest uppercase"
            style={{ color: "var(--sp-primary-container)" }}
          >
            Spider-Man
          </span>
          <span
            className="hidden sm:block font-display text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--sp-on-surface-variant)" }}
          >
            Brand New Day
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "web-underline font-body text-sm tracking-widest uppercase transition-colors duration-200",
              )}
              style={{ color: "var(--sp-on-surface-variant)" }}
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="font-display tracking-widest uppercase text-xs px-6"
            style={{
              background: "var(--sp-primary-container)",
              color: "var(--sp-on-primary-fixed)",
            }}
          >
            Get Comic
          </Button>
        </nav>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2"
              style={{ color: "var(--sp-on-surface)" }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-l border-outline-variant/20 p-0"
            style={{ background: "var(--surface-low)" }}
          >
            <div className="flex flex-col h-full p-8 pt-16">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4"
                style={{ color: "var(--sp-on-surface-variant)" }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl uppercase tracking-widest"
                    style={{ color: "var(--sp-on-surface)" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Button
                  className="w-full font-display tracking-widest uppercase"
                  style={{
                    background: "var(--sp-primary-container)",
                    color: "var(--sp-on-primary-fixed)",
                  }}
                >
                  Get Comic
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
