"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProductDrawer } from "@/components/ui/ProductDrawer";

const PRODUCT_CARDS = [
  { key: "alethinx", name: "Alethinx AI\u2122", root: "ALETHEIA", desc: "M&A Intelligence Platform", badge: "live" as const },
  { key: "sophynx", name: "Sophynx\u2122", root: "SOPHIA", desc: "AI Business Operating System", badge: "live" as const },
  { key: "autopilot", name: "Autopilot\u2122", root: "HEGEOMAI", desc: "AI CEO \u2014 Autonomous Operations", badge: "live" as const },
  { key: "logynx", name: "Logynx\u2122", root: "LOGOS", desc: "Central Intelligence Orchestration", badge: "core" as const },
  { key: "masoryx", name: "Masoryx\u2122", root: "MASORAH", desc: "Compounding Data Moat Engine", badge: "building" as const },
  { key: "urimyx", name: "URIMYX\u2122", root: "URIM", desc: "Predictive Intelligence Engine", badge: "roadmap" as const },
  { key: "thummix", name: "THUMMIX\u2122", root: "THUMMIM", desc: "Outcome Validation Database", badge: "roadmap" as const },
  { key: "gnosix", name: "GNOSIX\u2122", root: "GNOSIS", desc: "Real-Time Market Intelligence", badge: "building" as const },
  { key: "koinonyx", name: "KOINONYX\u2122", root: "KOINONIA", desc: "Enterprise API Platform", badge: "roadmap" as const },
  { key: "shamarix", name: "SHAMARIX\u2122", root: "SHAMAR", desc: "Autonomous Compliance Guardian", badge: "roadmap" as const },
];

const BADGE_STYLES: Record<string, string> = {
  live: "bg-green-500/20 text-green-400",
  building: "bg-amber-500/20 text-amber-400",
  roadmap: "bg-purple-500/20 text-purple-300",
  core: "bg-amber-500/20 text-amber-400",
};

export function Products() {
  return (
    <section className="relative bg-[#0f0430] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            10 Products &middot; Click any to explore
          </p>
          <h2 className="mt-3 font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            The Complete Ecosystem
          </h2>
          <p className="mt-3 max-w-lg text-[15px] text-white/50">
            Every product is live, building, or on the roadmap. Together they form
            an ecosystem no competitor can replicate.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCT_CARDS.map((product, i) => (
            <AnimatedSection key={product.key} delay={i * 0.05}>
              <ProductDrawer productKey={product.key}>
                <div className="group rounded-xl border border-white/5 bg-[#08021a]/60 p-5 transition-all hover:border-[#902DCE]/20 hover:bg-[#08021a]/80">
                  <div className="mb-3 flex items-center justify-between">
                    <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${BADGE_STYLES[product.badge]}`}>
                      {product.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#902DCE]">
                    {product.name}
                  </h3>
                  <p className="mt-0.5 font-display text-[10px] italic text-white/25">
                    {product.root}
                  </p>
                  <p className="mt-2 text-xs text-white/45">
                    {product.desc}
                  </p>
                  <p className="mt-3 text-[10px] font-medium text-[#902DCE] opacity-0 transition-opacity group-hover:opacity-100">
                    View details &rarr;
                  </p>
                </div>
              </ProductDrawer>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
