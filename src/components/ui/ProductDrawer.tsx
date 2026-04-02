"use client";

// SECURITY: This component NEVER imports products.ts directly.
// Product data is fetched server-side via /api/product?key=X on click.

import { useState, useCallback } from "react";
import { X, ExternalLink } from "lucide-react";

interface ProductStep { t: string; d: string; }
interface ProductPricing { n: string; p: string; d: string; }

interface ProductData {
  key: string;
  eyebrow: string;
  name: string;
  root: string;
  badge: string;
  tagline: string;
  desc: string;
  steps: ProductStep[];
  benefits: string[];
  pricing: ProductPricing[];
  engines: string[];
  cta: { text: string; url: string };
}

const BADGE_STYLES: Record<string, string> = {
  live: "bg-green-500/20 text-green-400 border-green-500/30",
  building: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  roadmap: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  core: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

export function ProductDrawer({ productKey, children }: { productKey: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = useCallback(async () => {
    setOpen(true);
    if (!data) {
      setLoading(true);
      try {
        const res = await fetch(`/api/product?key=${productKey}`);
        if (res.ok) setData(await res.json());
      } finally {
        setLoading(false);
      }
    }
  }, [data, productKey]);

  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer">
        {children}
      </div>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-[200]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 flex w-full max-w-[540px] flex-col border-l border-[#902DCE]/10 bg-[#08021a] shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 z-10 border-b border-white/5 bg-[#08021a]/95 px-6 py-5 backdrop-blur-sm">
              <div className="flex items-start justify-between">
                <div>
                  {data && (
                    <>
                      <p className="font-mono-brand text-[9px] uppercase tracking-[0.2em] text-[#902DCE]">
                        {data.eyebrow}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-black text-white">
                        {data.name}
                      </h3>
                      <p className="mt-0.5 font-display text-xs italic text-white/30">
                        {data.root}
                      </p>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {data && (
                    <span className={`rounded-full border px-3 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${BADGE_STYLES[data.badge] ?? BADGE_STYLES.roadmap}`}>
                      {data.badge}
                    </span>
                  )}
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-white/10 p-1.5 text-white/40 transition-colors hover:border-white/20 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {loading && (
                <div className="flex items-center justify-center py-20">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#902DCE] border-t-transparent" />
                </div>
              )}

              {data && (
                <div className="space-y-6">
                  {/* Tagline */}
                  <div className="border-b border-white/5 pb-4">
                    <p className="text-sm leading-relaxed text-white/60">{data.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/45">{data.desc}</p>

                  {/* Steps */}
                  {data.steps.length > 0 && (
                    <div>
                      <h4 className="mb-3 font-mono-brand text-[10px] uppercase tracking-[0.18em] text-white/30">
                        How It Works
                      </h4>
                      <div className="space-y-3">
                        {data.steps.map((step, i) => (
                          <div key={i} className="flex gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#902DCE]/20 text-[10px] font-bold text-[#902DCE]">
                              {i + 1}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white/80">{step.t}</p>
                              <p className="mt-0.5 text-xs text-white/40">{step.d}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits */}
                  {data.benefits.length > 0 && (
                    <div>
                      <h4 className="mb-3 font-mono-brand text-[10px] uppercase tracking-[0.18em] text-white/30">
                        Key Benefits
                      </h4>
                      <ul className="space-y-1.5">
                        {data.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/50">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F6E56]" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Engines */}
                  {data.engines.length > 0 && (
                    <div>
                      <h4 className="mb-3 font-mono-brand text-[10px] uppercase tracking-[0.18em] text-white/30">
                        Intelligence Engines
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {data.engines.map((e) => (
                          <span key={e} className="rounded-full border border-[#902DCE]/20 bg-[#902DCE]/10 px-3 py-1 text-[10px] font-medium text-[#902DCE]">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pricing */}
                  {data.pricing.length > 0 && (
                    <div>
                      <h4 className="mb-3 font-mono-brand text-[10px] uppercase tracking-[0.18em] text-white/30">
                        Pricing
                      </h4>
                      <div className="grid gap-2">
                        {data.pricing.map((p) => (
                          <div key={p.n} className="rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-white/80">{p.n}</span>
                              <span className="font-mono-brand text-sm font-bold text-[#902DCE]">{p.p}</span>
                            </div>
                            <p className="mt-0.5 text-xs text-white/35">{p.d}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* CTA */}
            {data?.cta && (
              <div className="sticky bottom-0 border-t border-white/5 bg-[#08021a]/95 px-6 py-4 backdrop-blur-sm">
                <a
                  href={data.cta.url}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#902DCE] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#a040e0]"
                >
                  {data.cta.text}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
