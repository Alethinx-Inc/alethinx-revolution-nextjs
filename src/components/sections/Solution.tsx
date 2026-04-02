"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const ACTS = [
  { act: "I", name: "FIND", color: "#0F6E56", desc: "AI-powered deal discovery. Semantic matching by intent, not keywords. Your Dream Acquisition Profile surfaces deals before you find them manually." },
  { act: "II", name: "BUY", color: "#185FA5", desc: "Institutional due diligence in hours. Proprietary compliance engine, multi-perspective AI analysis, financial modeling, and guided acquisition execution." },
  { act: "III", name: "RUN", color: "#C04828", desc: "Autopilot activates at acquisition close. Autonomous agents run nightly. Your AI CEO is fully briefed from Day 1 via our patented memory architecture." },
  { act: "IV", name: "DATA", color: "#C9971A", desc: "Every action deepens the intelligence moat. The compounding data advantage that makes every future analysis smarter. A temporal advantage no competitor can replicate." },
];

export function Solution() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            CLAW Architecture&trade; &middot; Patent Pending 64/024,148
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            One Platform. Four Acts. Complete Lifecycle.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-white/50">
            Contextual Learning and Action Workflow &mdash; the only architecture
            connecting deal discovery to autonomous operations.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ACTS.map((act, i) => (
            <AnimatedSection key={act.name} delay={i * 0.1}>
              <div
                className="group rounded-xl border border-white/5 bg-[#0f0430]/60 p-6 transition-all hover:border-opacity-40"
                style={{ borderColor: `${act.color}20` }}
              >
                <div
                  className="mb-3 font-mono-brand text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: act.color }}
                >
                  Act {act.act}
                </div>
                <h3 className="mb-3 font-display text-2xl font-black text-white">
                  {act.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/45">
                  {act.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
