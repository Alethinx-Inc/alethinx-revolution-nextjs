"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PLANS = [
  {
    name: "Explorer",
    price: "Free",
    period: "",
    desc: "Start analyzing deals with AI",
    features: ["Basic deal analysis", "Single AI engine", "Community access", "5 analyses/month"],
    cta: "Start Free",
    href: "https://app.alethinx.ai",
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    desc: "Full multi-AI analysis suite",
    features: ["Multi-perspective AI analysis", "Priority support", "Unlimited analyses", "Financial modeling", "SEEKER\u2122 deal matching"],
    cta: "Start Pro",
    href: "https://app.alethinx.ai",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$399",
    period: "/month",
    desc: "Complete platform + Autopilot",
    features: ["Everything in Pro", "Autopilot\u2122 agents", "Custom integrations", "Dedicated success manager", "API access", "SLA guarantee"],
    cta: "Contact Sales",
    href: "mailto:hello@alethinx.ai",
    popular: false,
  },
  {
    name: "Autopilot",
    price: "$99\u2013999",
    period: "/month",
    desc: "AI CEO for acquired businesses",
    features: ["7 autonomous agents", "Daily CEO brief", "Covenant monitoring", "Revenue optimization", "Custom agent configuration"],
    cta: "Activate",
    href: "https://app.alethinx.ai",
    popular: false,
  },
  {
    name: "Sophynx Business",
    price: "$149",
    period: "/month",
    desc: "AI Operating System for your business",
    features: ["Unlimited AI Council", "AI CFO (Nathan)", "All 8 Growth Agents", "5 team seats", "Business DNA unlimited"],
    cta: "Try Sophynx",
    href: "https://sophynx.alethinx.ai",
    popular: false,
  },
  {
    name: "Deal Coworker",
    price: "$299",
    period: "/deal",
    desc: "Guided acquisition execution",
    features: ["Guided execution phases", "Compliance engine", "Document automation", "Closing checklist", "Post-close transition"],
    cta: "Start a Deal",
    href: "https://app.alethinx.ai",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection>
          <p className="text-center font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
            Pricing
          </p>
          <h2 className="mt-3 text-center font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            Start Free. Scale to Empire.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-[15px] text-white/50">
            Every plan offers a clear path from first deal analysis to autonomous operations.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.06}>
              <div
                className={`relative flex flex-col rounded-xl border p-6 transition-colors ${
                  plan.popular
                    ? "border-[#902DCE]/40 bg-[#902DCE]/5 ring-1 ring-[#902DCE]/20"
                    : "border-white/5 bg-[#0f0430]/60 hover:border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#902DCE] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-black text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-white/40">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-xs text-white/40">{plan.desc}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-white/50">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#0F6E56]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  className={`mt-6 block rounded-lg px-6 py-2.5 text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-[#902DCE] text-white hover:bg-[#a040e0]"
                      : "border border-white/10 text-white/70 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
