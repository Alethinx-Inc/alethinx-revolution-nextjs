"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const COMPS = [
  { name: "Harvey AI", category: "Legal AI", multiple: "40\u00d7+", valuation: "$8\u201311B" },
  { name: "Cursor", category: "Code AI", multiple: "50\u00d7+", valuation: "$29\u201330B" },
  { name: "Palantir", category: "Data Intelligence", multiple: "25\u00d7", valuation: "$300B+" },
  { name: "Databricks", category: "Data + AI", multiple: "35\u00d7", valuation: "$62B" },
];

const RESEARCH = [
  "Epoch AI \u2014 AI Compute Trends 2026",
  "Stanford HAI \u2014 AI Index Report",
  "McKinsey \u2014 State of AI",
  "Pitchbook \u2014 AI Valuations",
  "CB Insights \u2014 AI Unicorn Tracker",
  "Harvard Business Review \u2014 AI in M&A",
];

export function Valuation() {
  return (
    <section id="valuation" className="relative bg-[#160840] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            Enterprise Valuation &middot; AI Agentic Premium
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            Not SaaS. 30&ndash;40&times; ARR.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-white/50">
            ALETHINX is an AI Agentic Autonomous Platform. This changes the
            valuation multiple by 3&ndash;5&times; vs traditional SaaS.
          </p>
        </AnimatedSection>

        {/* Quote block */}
        <AnimatedSection delay={0.15}>
          <blockquote className="mx-auto mt-10 max-w-2xl rounded-xl border-l-4 border-[#902DCE] bg-[#902DCE]/5 px-6 py-5">
            <p className="font-display text-lg italic text-white/70">
              &ldquo;AI companies that automate entire workflows command fundamentally
              different valuations than traditional software companies.&rdquo;
            </p>
            <cite className="mt-3 block font-mono-brand text-[10px] uppercase tracking-wider text-white/30">
              &mdash; Industry Analysis, AI Agentic Platforms 2026
            </cite>
          </blockquote>
        </AnimatedSection>

        {/* Comparison table */}
        <AnimatedSection delay={0.25}>
          <div className="mt-10 overflow-hidden rounded-xl border border-white/5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 bg-[#0f0430]/60">
                  <th className="px-5 py-3 text-left font-mono-brand text-[10px] uppercase tracking-wider text-white/40">Company</th>
                  <th className="px-5 py-3 text-left font-mono-brand text-[10px] uppercase tracking-wider text-white/40">Category</th>
                  <th className="px-5 py-3 text-right font-mono-brand text-[10px] uppercase tracking-wider text-white/40">Multiple</th>
                  <th className="hidden px-5 py-3 text-right font-mono-brand text-[10px] uppercase tracking-wider text-white/40 sm:table-cell">Valuation</th>
                </tr>
              </thead>
              <tbody>
                {COMPS.map((c) => (
                  <tr key={c.name} className="border-b border-white/[0.03]">
                    <td className="px-5 py-3 font-medium text-white/70">{c.name}</td>
                    <td className="px-5 py-3 text-white/40">{c.category}</td>
                    <td className="px-5 py-3 text-right font-mono-brand font-bold text-[#902DCE]">{c.multiple}</td>
                    <td className="hidden px-5 py-3 text-right text-white/35 sm:table-cell">{c.valuation}</td>
                  </tr>
                ))}
                <tr className="bg-[#902DCE]/5">
                  <td className="px-5 py-3 font-bold text-[#902DCE]">Alethinx AI</td>
                  <td className="px-5 py-3 text-[#902DCE]/70">M&amp;A AI Platform</td>
                  <td className="px-5 py-3 text-right font-mono-brand font-bold text-[#902DCE]">30&ndash;40&times;</td>
                  <td className="hidden px-5 py-3 text-right text-[#902DCE]/60 sm:table-cell">$1B+ Target</td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Research badges */}
        <AnimatedSection delay={0.35}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {RESEARCH.map((r) => (
              <span key={r} className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-[10px] text-white/30">
                {r}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Disclaimer */}
        <AnimatedSection delay={0.4}>
          <p className="mt-6 text-center font-mono-brand text-[8px] uppercase tracking-[0.1em] text-white/15">
            All referenced companies used as market comparables only. Alethinx, Inc.
            has no affiliation with any referenced company. All trademarks are
            property of their respective owners.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
