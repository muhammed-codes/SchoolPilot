"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm shadow-slate-200/50 border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 cursor-pointer" aria-label="SchoolPilot home">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <ShieldCheck className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <span className="font-bold text-xl tracking-tight text-secondary" style={{ fontFamily: "var(--font-heading)" }}>
            SchoolPilot
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium text-foreground-muted hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-full text-sm font-semibold shadow-md shadow-primary/20 transition-all duration-200 cursor-pointer"
          >
            Get Started Free
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" aria-hidden="true" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <ul className="px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-3 text-sm font-medium text-foreground-muted hover:text-primary hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-slate-100">
              <a
                href="#contact"
                className="block w-full py-3 px-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-semibold text-center transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started Free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
