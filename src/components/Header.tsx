"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Approche", href: "#approche" },
    { label: "Méthodologie", href: "#methodologie" },
    { label: "Résultats", href: "#resultats" },
    { label: "Équipe", href: "/equipe" },
    { label: "Ressources", href: "#", hasDropdown: true },
  ];

  return (
    <>
      {/* Top banner */}
      <div className="bg-primary text-black text-center py-2 px-4 text-sm font-medium">
        <Link href="https://calendly.com/sbdrteam" className="hover:underline">
          Diagnostic commercial gratuit pour les entreprises B2B en transformation. Réservez votre créneau.
        </Link>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-xl font-bold text-white">SBDR</span>
              <span className="text-xl text-muted">Team</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              href="https://calendly.com/sbdrteam"
              className="hidden md:inline-flex items-center px-4 py-2 border border-white/30 rounded-full text-sm text-white hover:bg-white/10 transition-colors"
            >
              Diagnostic gratuit
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-muted hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="https://calendly.com/sbdrteam"
                className="block w-full text-center px-4 py-2 border border-white/30 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                Diagnostic gratuit
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
