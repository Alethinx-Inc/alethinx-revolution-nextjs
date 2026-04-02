"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Shield, Clock, Network, Lock, Brain, Layers, Globe, Zap } from "lucide-react";

const MOATS = [
  { icon: Shield, title: "Patent Protection", desc: "Provisional patent 64/024,148 covers the CLAW Architecture and memory handoff mechanism." },
  { icon: Clock, title: "Temporal Data Moat", desc: "Every day of compounding deal data creates an advantage no competitor can replicate by starting later." },
  { icon: Network, title: "Network Effect", desc: "More deals analyzed \u2192 smarter predictions \u2192 better outcomes \u2192 more deals. Self-reinforcing loop." },
  { icon: Lock, title: "OS Lock-In", desc: "Once Autopilot runs your business, switching costs become prohibitive. The AI knows your business better than you do." },
  { icon: Brain, title: "Multi-Model Architecture", desc: "Orchestrating multiple specialized AI models creates compound intelligence no single model can match." },
  { icon: Layers, title: "Full-Stack Integration", desc: "Find + Buy + Run + Data in one platform. No competitor offers the complete lifecycle." },
  { icon: Globe, title: "Biblical Brand Architecture", desc: "10 products with deep etymological roots create a cohesive brand narrative competitors can\u2019t replicate." },
  { icon: Zap, title: "Speed to Market", desc: "First mover in AI-native M&A. Every day of market presence compounds the data and brand advantage." },
];

export function Moats() {
  return (
    <section id="moats" className="relative bg-[#0f0430] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            8 Structural Competitive Moats
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            Eight Reasons No Competitor Can Win
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {MOATS.map((moat, i) => (
            <AnimatedSection key={moat.title} delay={i * 0.06}>
              <div className="flex gap-4 rounded-xl border border-white/5 bg-[#08021a]/60 p-5 transition-colors hover:border-[#902DCE]/15">
                <moat.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#902DCE]/60" />
                <div>
                  <h3 className="text-sm font-bold text-white/80">{moat.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/40">{moat.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
