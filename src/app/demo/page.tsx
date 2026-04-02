"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, TrendingUp, Shield, Brain, Zap, ChevronRight,
  BarChart3, FileText, CheckCircle2, AlertTriangle, Lock,
  DollarSign, Users, Target, ArrowRight,
} from "lucide-react";

// ─── Mock Deal Data ──────────────────────────────────────────────
const MOCK_DEAL = {
  name: "McKinney Auto Parts LLC",
  industry: "Automotive Aftermarket",
  revenue: "$4.2M",
  ebitda: "$820K",
  askingPrice: "$3.1M",
  dscr: "1.47x",
  employees: 22,
  location: "McKinney, TX",
  yearsInBusiness: 18,
};

const AI_VERDICTS = [
  { persona: "Financial Analyst", icon: BarChart3, color: "#0F6E56", verdict: "BUY", confidence: 87, note: "Strong cash flow. DSCR of 1.47x exceeds SBA minimum of 1.25x. Seller discretionary earnings support the asking price at a 3.8x multiple." },
  { persona: "Operations Expert", icon: Users, color: "#185FA5", verdict: "BUY", confidence: 79, note: "22 employees with low turnover. Key-man risk is moderate \u2014 owner handles 30% of wholesale accounts. Transition plan needed for top 5 accounts." },
  { persona: "Legal Counsel", icon: Shield, color: "#C9971A", verdict: "CONDITIONAL", confidence: 72, note: "Clean entity structure. One pending warranty claim ($45K) needs resolution before close. Commercial lease has 6 years remaining \u2014 favorable." },
  { persona: "Market Strategist", icon: Target, color: "#902DCE", verdict: "BUY", confidence: 83, note: "Aftermarket parts demand growing 4.2% YoY. Local competition is fragmented \u2014 3 independents, no national chains within 15 miles. Strong moat." },
  { persona: "Risk Assessor", icon: AlertTriangle, color: "#C04828", verdict: "CAUTION", confidence: 65, note: "EV adoption could reduce traditional parts demand by 12-18% over 10 years. Mitigation: expand into EV-compatible parts and fleet services." },
];

const CLAW_STEPS = [
  { act: "I", name: "FIND", color: "#0F6E56", icon: Search, status: "complete", desc: "SEEKER\u2122 matched this deal to your Dream Acquisition Profile based on industry, geography, revenue range, and DSCR threshold." },
  { act: "II", name: "BUY", color: "#185FA5", icon: FileText, status: "active", desc: "Multi-perspective AI analysis complete. 5 AI personas have deliberated. Due diligence checklist 78% complete." },
  { act: "III", name: "RUN", color: "#C04828", icon: Zap, status: "locked", desc: "Autopilot\u2122 will activate at close with full acquisition context. 7 agents ready. CEO brief starts Day 1." },
  { act: "IV", name: "DATA", color: "#C9971A", icon: Brain, status: "locked", desc: "Every data point from this analysis compounds into MASORYX\u2122. Future deals in automotive aftermarket get smarter." },
];

// ─── Components ──────────────────────────────────────────────────

function DealCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-[#902DCE]/20 bg-gradient-to-br from-[#0f0430] to-[#08021a] p-6"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#902DCE]">
            Deal Analysis &middot; SEEKER&trade; Match
          </p>
          <h3 className="mt-1 font-[var(--font-playfair)] text-2xl font-black text-white">
            {MOCK_DEAL.name}
          </h3>
          <p className="mt-0.5 text-sm text-white/40">{MOCK_DEAL.industry} &middot; {MOCK_DEAL.location}</p>
        </div>
        <span className="rounded-full bg-green-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-400">
          92% Match
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Revenue", value: MOCK_DEAL.revenue, icon: DollarSign },
          { label: "EBITDA", value: MOCK_DEAL.ebitda, icon: BarChart3 },
          { label: "DSCR", value: MOCK_DEAL.dscr, icon: TrendingUp },
          { label: "Asking", value: MOCK_DEAL.askingPrice, icon: Target },
        ].map((metric) => (
          <div key={metric.label} className="rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
            <metric.icon className="mb-1.5 h-4 w-4 text-[#902DCE]/50" />
            <div className="font-mono text-lg font-bold text-white">{metric.value}</div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-white/30">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-4 text-xs text-white/30">
        <span>{MOCK_DEAL.employees} employees</span>
        <span>&middot;</span>
        <span>{MOCK_DEAL.yearsInBusiness} years in business</span>
      </div>
    </motion.div>
  );
}

function AIBoardPanel() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#902DCE]">
        AI Board of Advisors &middot; Multi-Perspective Analysis
      </p>

      <div className="space-y-2">
        {AI_VERDICTS.map((v, i) => {
          const isOpen = expanded === i;
          return (
            <motion.button
              key={v.persona}
              onClick={() => setExpanded(isOpen ? null : i)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="w-full rounded-xl border border-white/5 bg-[#0f0430]/60 text-left transition-all hover:border-white/10"
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: v.color + "20" }}
                >
                  <v.icon className="h-4 w-4" style={{ color: v.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white/80">{v.persona}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                        v.verdict === "BUY"
                          ? "bg-green-500/20 text-green-400"
                          : v.verdict === "CONDITIONAL"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {v.verdict}
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-2">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: v.color }}
                        initial={{ width: 0 }}
                        animate={{ width: v.confidence + "%" }}
                        transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-white/30">{v.confidence}%</span>
                  </div>
                </div>
                <ChevronRight
                  className={`h-4 w-4 text-white/20 transition-transform ${isOpen ? "rotate-90" : ""}`}
                />
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/5 px-4 py-3 text-xs leading-relaxed text-white/50">
                      {v.note}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      {/* Consensus */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 rounded-xl border border-green-500/20 bg-green-500/5 px-5 py-4"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-400" />
          <div>
            <div className="text-sm font-bold text-green-300">
              AI Board Consensus: PROCEED WITH OFFER
            </div>
            <div className="mt-0.5 font-mono text-[10px] text-green-300/50">
              4/5 advisors recommend &middot; 1 caution flag &middot; Avg confidence: 77%
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CLAWTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#902DCE]">
        CLAW Architecture&trade; &middot; Lifecycle Position
      </p>

      <div className="flex flex-col gap-2 sm:flex-row">
        {CLAW_STEPS.map((step, i) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`relative flex-1 rounded-xl border p-4 ${
              step.status === "active"
                ? "border-[" + step.color + "]/40 bg-[" + step.color + "]/5"
                : step.status === "complete"
                ? "border-green-500/20 bg-green-500/5"
                : "border-white/5 bg-white/[0.01] opacity-50"
            }`}
            style={{
              borderColor: step.status === "active" ? step.color + "60" : undefined,
              backgroundColor: step.status === "active" ? step.color + "08" : undefined,
            }}
          >
            <div className="mb-2 flex items-center gap-2">
              {step.status === "complete" ? (
                <CheckCircle2 className="h-4 w-4 text-green-400" />
              ) : step.status === "locked" ? (
                <Lock className="h-4 w-4 text-white/20" />
              ) : (
                <step.icon className="h-4 w-4" style={{ color: step.color }} />
              )}
              <span className="font-mono text-[9px] uppercase tracking-wider text-white/30">
                Act {step.act}
              </span>
            </div>
            <h4
              className="text-sm font-bold"
              style={{ color: step.status === "locked" ? "rgba(255,255,255,0.3)" : step.color }}
            >
              {step.name}
            </h4>
            <p className="mt-1 text-[11px] leading-relaxed text-white/35">
              {step.desc}
            </p>
            {step.status === "active" && (
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[9px] font-medium text-white/50">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                In Progress
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main Demo Page ──────────────────────────────────────────────

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#08021a] px-4 pb-32 pt-28 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#902DCE]">
            Interactive Demo &middot; ALETHINX AI REVOLUTION&trade;
          </p>
          <h1 className="mt-3 font-[var(--font-playfair)] text-[clamp(28px,5vw,48px)] font-black leading-tight text-white">
            See What Your AI Board
            <br />
            <span className="text-[#902DCE]">Sees in Every Deal</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/45">
            This is a real analysis flow. Five AI perspectives. One unified verdict.
            Powered by the CLAW Architecture&trade;.
          </p>
        </motion.div>

        {/* CLAW Timeline */}
        <div className="mb-8">
          <CLAWTimeline />
        </div>

        {/* Deal Card */}
        <div className="mb-8">
          <DealCard />
        </div>

        {/* AI Board */}
        <div className="mb-10">
          <AIBoardPanel />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <a
            href="https://app.alethinx.ai"
            className="inline-flex items-center gap-2 rounded-full bg-[#902DCE] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#a040e0] hover:shadow-[0_0_40px_rgba(144,45,206,0.3)]"
          >
            Analyze Your First Deal Free
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.1em] text-white/20">
            No credit card required &middot; AI analysis in under 60 seconds
          </p>
        </motion.div>

        {/* Disclaimer */}
        <p className="mt-16 text-center font-mono text-[8px] uppercase tracking-[0.1em] text-white/10">
          Demo uses simulated deal data for illustration purposes &middot; Actual
          analysis powered by multi-model AI &middot; Patent Pending 64/024,148
        </p>
      </div>
    </div>
  );
}
