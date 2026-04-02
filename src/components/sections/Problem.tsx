"use client";

import { Search, PieChart, TrendingDown, Database } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PAIN_POINTS = [
  {
    icon: Search,
    title: "Manual Discovery",
    desc: "Buyers manually screen hundreds of listings to find one viable deal. No semantic matching. No AI prioritization.",
  },
  {
    icon: PieChart,
    title: "Fragmented Analysis",
    desc: "DSCR in one spreadsheet. Legal review by hand. Financial modeling in another tab. No single source of truth.",
  },
  {
    icon: TrendingDown,
    title: "No Post-Close Intelligence",
    desc: "After you close, you're on your own. No AI. No monitoring. No covenant compliance. Just hope and spreadsheets.",
  },
  {
    icon: Database,
    title: "Zero Compounding Data",
    desc: "Every deal analyzed, every lesson learned \u2014 lost. No platform captures what actually happened post-acquisition.",
  },
];

export function Problem() {
  return (
    <section className="relative bg-[#0f0430] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            The M&amp;A Problem
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            M&amp;A Still Runs on 1990s Tools
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PAIN_POINTS.map((point, i) => (
            <AnimatedSection key={point.title} delay={i * 0.1}>
              <div className="rounded-xl border border-white/5 bg-[#08021a]/60 p-6 transition-colors hover:border-[#902DCE]/20">
                <point.icon className="mb-4 h-8 w-8 text-[#902DCE]/60" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {point.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="mx-auto mt-12 max-w-lg text-center font-display text-lg italic text-white/50">
            What if one platform covered every phase &mdash; and got smarter with
            every deal it processed?
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
