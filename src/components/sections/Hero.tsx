"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const STATS = [
  { value: "10", label: "PRODUCTS" },
  { value: "22+", label: "AUTONOMOUS AGENTS" },
  { value: "Patent", label: "PENDING" },
  { value: "39/39", label: "QA GREEN" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 gradient-glow" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Eyebrow */}
        <AnimatedSection delay={0}>
          <p className="mb-6 font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            Patent Pending 64/024,148 &middot; Alethinx, Inc. &middot; McKinney,
            Texas
          </p>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={0.1}>
          <h1 className="font-display text-[clamp(40px,7vw,82px)] font-black leading-[0.95] tracking-tight">
            <span className="text-white">The AI Operating System</span>
            <br />
            <span className="text-[#902DCE]">for M&amp;A</span>
          </h1>
        </AnimatedSection>

        {/* Subheadline */}
        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl font-display text-lg italic text-white/60">
            Find the right deal. Buy with confidence.
            <br />
            Run with autonomous intelligence.
          </p>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection delay={0.3}>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/40">
            One platform covering the complete acquisition lifecycle &mdash; from
            first search to Day-1,000 of autonomous operations.
          </p>
        </AnimatedSection>

        {/* Stats bar */}
        <AnimatedSection delay={0.4}>
          <div className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display text-2xl font-black text-white md:text-3xl">
                  {stat.value}
                </div>
                <div className="font-mono-brand text-[9px] uppercase tracking-[0.18em] text-white/30">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={0.5}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://app.alethinx.ai"
              className="rounded-full bg-[#902DCE] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#a040e0] hover:shadow-[0_0_30px_rgba(144,45,206,0.3)]"
            >
              Start Free &mdash; No Credit Card
            </a>
            <a
              href="#architecture"
              className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-white/70 transition-all hover:border-white/30 hover:text-white"
            >
              Explore the Architecture &rarr;
            </a>
          </div>
        </AnimatedSection>

        {/* Trust disclaimer */}
        <AnimatedSection delay={0.6}>
          <p className="mt-8 font-mono-brand text-[8px] uppercase tracking-[0.1em] text-white/20">
            &copy; 2026 Alethinx, Inc. &middot; All referenced trademarks are
            property of their respective owners &middot; Not affiliated with any
            referenced companies
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
