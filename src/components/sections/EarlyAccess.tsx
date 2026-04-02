"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const STATS = [
  { value: "Patent Pending", label: "64/024,148" },
  { value: "39/39", label: "QA GREEN" },
  { value: "4", label: "LIVE DOMAINS" },
];

export function EarlyAccess() {
  return (
    <section className="relative bg-[#0f0430] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSection>
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            Early Access
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            Join the Revolution Early
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] text-white/50">
            The MASORYX data moat starts compounding on Day 1. Every day earlier
            means a deeper moat advantage for you.
          </p>
        </AnimatedSection>

        {/* Real stats only */}
        <AnimatedSection delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-xl font-black text-white">
                  {stat.value}
                </div>
                <div className="font-mono-brand text-[9px] uppercase tracking-[0.18em] text-white/30">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <p className="mx-auto mt-8 max-w-md text-sm text-white/40">
            Join the early access community building the future of M&amp;A
            intelligence.
          </p>
          <a
            href="#cta"
            className="mt-6 inline-block rounded-full bg-[#902DCE] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#a040e0] hover:shadow-[0_0_30px_rgba(144,45,206,0.3)]"
          >
            Get Early Access &mdash; Free
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
