"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const MEMORY_LAYERS = [
  { name: "Active Context", desc: "Current operational state and recent interactions", color: "#902DCE" },
  { name: "Cycle History", desc: "Complete history of all agent cycles and decisions", color: "#7c3aed" },
  { name: "Business Profile", desc: "Deep understanding of the acquired business", color: "#185FA5" },
  { name: "Acquisition Intelligence", desc: "Full deal context transferred at close (Patented)", color: "#C9971A" },
  { name: "Network Intelligence", desc: "Cross-portfolio insights from the ecosystem", color: "#0F6E56" },
];

const AGENTS = [
  { name: "Operator", icon: "\u2699\ufe0f", desc: "Daily operations monitoring and optimization" },
  { name: "Revenue", icon: "\ud83d\udcb0", desc: "Revenue tracking, forecasting, and growth levers" },
  { name: "Cashflow", icon: "\ud83d\udcb3", desc: "Cash position, burn rate, and runway analysis" },
  { name: "Growth", icon: "\ud83d\udcc8", desc: "Market expansion and customer acquisition" },
  { name: "CustomerAI", icon: "\ud83d\udc65", desc: "Customer health, churn prediction, NPS tracking" },
  { name: "Compliance", icon: "\ud83d\udee1\ufe0f", desc: "Regulatory monitoring and covenant tracking" },
  { name: "ReportAI", icon: "\ud83d\udcca", desc: "Automated reporting and executive briefs" },
];

export function Autopilot() {
  return (
    <section className="relative bg-[#08021a] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            Autopilot&trade; &middot; Patent Pending
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            Your AI CEO. From Day 1.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-white/50">
            The moment you close, Autopilot activates &mdash; fully briefed on your
            acquisition via our patented memory architecture. No ramp-up. No
            learning curve.
          </p>
        </AnimatedSection>

        {/* Memory Layers */}
        <AnimatedSection delay={0.2}>
          <div className="mt-12 rounded-2xl border border-white/5 bg-[#0f0430]/60 p-8">
            <h3 className="mb-6 font-mono-brand text-[10px] uppercase tracking-[0.18em] text-white/40">
              Multi-Layer Memory Architecture (Patented)
            </h3>
            <div className="space-y-3">
              {MEMORY_LAYERS.map((layer, i) => (
                <div
                  key={layer.name}
                  className="flex items-center gap-4 rounded-lg border border-white/5 bg-[#08021a]/40 px-5 py-3"
                >
                  <div
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: layer.color }}
                  />
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-white/80">
                      Layer {i + 1}: {layer.name}
                    </span>
                    <span className="ml-3 text-xs text-white/35">{layer.desc}</span>
                  </div>
                  {layer.name === "Acquisition Intelligence" && (
                    <span className="rounded-full bg-[#C9971A]/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#C9971A]">
                      Patented
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Agents Grid */}
        <AnimatedSection delay={0.3}>
          <div className="mt-10">
            <h3 className="mb-6 font-mono-brand text-[10px] uppercase tracking-[0.18em] text-white/40">
              7 Autonomous Agents
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {AGENTS.map((agent) => (
                <div
                  key={agent.name}
                  className="rounded-xl border border-white/5 bg-[#0f0430]/40 p-4 transition-colors hover:border-[#902DCE]/20"
                >
                  <div className="mb-2 text-2xl">{agent.icon}</div>
                  <h4 className="text-sm font-bold text-white/80">{agent.name}</h4>
                  <p className="mt-1 text-[11px] text-white/35">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CEO Brief highlight */}
        <AnimatedSection delay={0.4}>
          <div className="mt-10 rounded-xl border border-[#C9971A]/20 bg-[#C9971A]/5 px-6 py-4 text-center">
            <p className="font-display text-lg font-bold italic text-[#C9971A]">
              &ldquo;6am CEO brief. Every morning. Before you start your day.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
