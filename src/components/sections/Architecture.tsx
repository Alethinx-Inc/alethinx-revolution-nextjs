"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProductDrawer } from "@/components/ui/ProductDrawer";

const LAYERS = [
  {
    label: "FOUNDATION",
    color: "#902DCE",
    items: [
      { key: "alethinx", name: "Alethinx AI\u2122", desc: "M&A Intelligence Platform" },
      { key: "sophynx", name: "Sophynx\u2122", desc: "Business AI Operating System" },
      { key: "logynx", name: "Logynx\u2122", desc: "Intelligence Orchestration" },
    ],
  },
  {
    label: "DISCOVERY + INTELLIGENCE",
    color: "#0F6E56",
    items: [
      { key: "gnosix", name: "GNOSIX\u2122", desc: "Market Intelligence" },
      { key: "urimyx", name: "URIMYX\u2122", desc: "Predictions" },
      { key: "thummix", name: "THUMMIX\u2122", desc: "Outcomes" },
    ],
  },
  {
    label: "APPLICATION",
    color: "#185FA5",
    items: [
      { key: "autopilot", name: "Autopilot\u2122", desc: "AI CEO Operations" },
      { key: "koinonyx", name: "KOINONYX\u2122", desc: "Enterprise API" },
      { key: "shamarix", name: "SHAMARIX\u2122", desc: "Compliance" },
      { key: "agornyx", name: "AGORNYX\u2122", desc: "Lender Marketplace" },
    ],
  },
  {
    label: "DATA MOAT",
    color: "#C9971A",
    items: [
      { key: "masoryx", name: "Masoryx\u2122", desc: "Compounding Intelligence" },
    ],
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <p className="text-center font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            The Big Picture
          </p>
          <h2 className="mt-3 text-center font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            One Click. Full Intelligence.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-[15px] text-white/50">
            Click any component to see what it does, why it matters, and what it
            costs.
          </p>
        </AnimatedSection>

        <div className="mt-12 space-y-4">
          {LAYERS.map((layer, li) => (
            <AnimatedSection key={layer.label} delay={li * 0.1}>
              <div className="rounded-xl border border-white/5 bg-[#0f0430]/40 p-4">
                <p
                  className="mb-3 font-mono-brand text-[9px] uppercase tracking-[0.2em]"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </p>
                <div className={`grid gap-3 ${
                  layer.items.length === 1
                    ? "grid-cols-1"
                    : layer.items.length === 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-3"
                }`}>
                  {layer.items.map((item) => (
                    <ProductDrawer key={item.key} productKey={item.key}>
                      <div
                        className="group cursor-pointer rounded-lg border border-white/5 bg-[#08021a]/60 px-4 py-3 transition-all hover:border-opacity-40"
                        style={{ borderColor: `${layer.color}15` }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-sm font-bold text-white/80 group-hover:text-white">
                              {item.name}
                            </h4>
                            <p className="text-[11px] text-white/35">{item.desc}</p>
                          </div>
                          <span className="text-xs text-white/20 transition-colors group-hover:text-[#902DCE]">
                            &rarr;
                          </span>
                        </div>
                      </div>
                    </ProductDrawer>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="mt-6 text-center font-mono-brand text-[10px] uppercase tracking-[0.15em] text-white/25">
            &uarr; Click any component to explore full details
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
