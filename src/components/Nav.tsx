"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Architecture", href: "#architecture" },
  { label: "The Vision", href: "#story" },
  { label: "Valuation", href: "#valuation" },
  { label: "Pricing", href: "#pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08021a]/90 backdrop-blur-xl border-b border-[#902DCE]/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="text-lg font-semibold tracking-wide text-white">
          ALETHINX{" "}
          <span className="text-[#902DCE]">AI</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-brand text-[11px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://sophynx.alethinx.ai"
            className="rounded-full bg-[#902DCE] px-5 py-2 text-[11px] font-semibold uppercase tracking-wider text-white transition-all hover:bg-[#a040e0] hover:shadow-[0_0_20px_rgba(144,45,206,0.3)]"
          >
            Join the Revolution
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-[#902DCE]/10 bg-[#08021a]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 font-mono-brand text-xs uppercase tracking-wider text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://sophynx.alethinx.ai"
              className="mt-2 rounded-full bg-[#902DCE] px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white"
            >
              Join the Revolution
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
