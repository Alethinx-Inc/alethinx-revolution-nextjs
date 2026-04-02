"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, TrendingUp, Shield, Brain, Zap, ChevronRight, ChevronDown,
  BarChart3, FileText, CheckCircle2, AlertTriangle, Lock,
  DollarSign, Users, Target, ArrowRight, Clock, MapPin,
  Building2, Calendar,
} from "lucide-react";

// ─── Deal Data ───────────────────────────────────────────────────
const DEAL = {
  name: "McKinney Auto Parts LLC",
  industry: "Automotive Aftermarket",
  revenue: "$4.2M",
  ebitda: "$820K",
  askingPrice: "$3.1M",
  multiple: "3.8\u00d7",
  dscr: 1.47,
  employees: 22,
  location: "McKinney, TX",
  yearsInBusiness: 18,
  matchScore: 92,
  sde: "$940K",
};

// ─── AI Board ────────────────────────────────────────────────────
const AI_BOARD = [
  {
    persona: "Financial Analyst",
    icon: BarChart3,
    color: "#0F6E56",
    verdict: "BUY" as const,
    confidence: 87,
    summary: "Strong cash flow supports acquisition at current terms.",
    detail: "DSCR of 1.47\u00d7 exceeds SBA 7(a) minimum of 1.25\u00d7 with comfortable margin. Seller discretionary earnings of $940K support the $3.1M asking price at a 3.3\u00d7 SDE multiple \u2014 below the industry median of 3.8\u00d7. Working capital appears adequate. Accounts receivable aging is clean: 92% current, 6% 30-day, 2% 60-day. Recommend: proceed with LOI at asking price. Negotiate earnout on the remaining wholesale accounts.",
  },
  {
    persona: "Operations Expert",
    icon: Users,
    color: "#185FA5",
    verdict: "BUY" as const,
    confidence: 79,
    summary: "Solid team. Moderate key-man risk needs transition plan.",
    detail: "22 employees with average tenure of 4.3 years and annual turnover under 15%. Key-man risk is moderate \u2014 owner personally manages 30% of wholesale accounts ($1.26M revenue). Recommend: 90-day transition period with owner introducing buyer to all wholesale accounts. Three shift leads are promotion-ready for management roles. Inventory management system (Epicor) is current and well-maintained. Facility lease: 6 years remaining at $8.50/sqft \u2014 below market rate of $11.20/sqft.",
  },
  {
    persona: "General Counsel",
    icon: Shield,
    color: "#C9971A",
    verdict: "CONDITIONAL" as const,
    confidence: 72,
    summary: "One pending claim needs resolution. EPA compliance requires verification.",
    detail: "Entity structure is clean \u2014 single-member LLC, no subsidiaries, no pending litigation except one warranty claim ($45K, filed 2025-Q3, insurance carrier engaged). Recommend: require seller to resolve or escrow 1.5\u00d7 claim value ($67.5K) at close. Environmental: auto parts facilities require EPA Form 24 Used Oil Generator compliance \u2014 verify current certification before LOI. Commercial lease assignment clause is favorable: landlord consent required but not unreasonably withheld. Non-compete: draft 3-year, 25-mile radius.",
  },
  {
    persona: "Market Strategist",
    icon: Target,
    color: "#902DCE",
    verdict: "BUY" as const,
    confidence: 83,
    summary: "Growing market. Fragmented local competition. Strong positioning.",
    detail: "U.S. automotive aftermarket growing 4.2% CAGR (2024-2029). Average vehicle age hit 12.6 years in 2025 \u2014 highest ever, driving parts demand. Local competitive landscape: 3 independent shops within 10 miles, nearest AutoZone 8 miles. No NAPA or O'Reilly within 15-mile radius. McKinney population growth: +18% since 2020 (Census). Strategic opportunity: expand into fleet services (3 logistics companies within 5 miles) and add EV-compatible parts inventory to future-proof.",
  },
  {
    persona: "Risk Assessor",
    icon: AlertTriangle,
    color: "#C04828",
    verdict: "CAUTION" as const,
    confidence: 65,
    summary: "EV transition risk is real. Mitigation path exists but requires action.",
    detail: "Primary risk: EV adoption could reduce traditional parts demand by 12-18% over the next decade. Texas EV penetration is currently 4.8% (below national 8.1%) but accelerating. Mitigation: allocate $150K Y1 capex to add EV brake, suspension, and tire inventory (EVs still need these). Secondary risk: owner concentration in wholesale accounts \u2014 if 2+ accounts churn during transition, DSCR drops to 1.30\u00d7 (SBA early warning threshold). Recommend: structure earnout tied to wholesale account retention at 12 months post-close.",
  },
];

// ─── CLAW Steps ──────────────────────────────────────────────────
const CLAW_STEPS = [
  { act: "I", name: "FIND", color: "#0F6E56", icon: Search, status: "complete" as const, label: "SEEKER\u2122 matched this deal to your profile" },
  { act: "II", name: "BUY", color: "#185FA5", icon: FileText, status: "active" as const, label: "AI Board analysis complete \u2014 78% diligence done" },
  { act: "III", name: "RUN", color: "#C04828", icon: Zap, status: "locked" as const, label: "Autopilot\u2122 activates at close" },
  { act: "IV", name: "DATA", color: "#C9971A", icon: Brain, status: "locked" as const, label: "Compounds into MASORYX\u2122" },
];

// ─── DSCR Gauge ──────────────────────────────────────────────────
function DSCRGauge({ value }: { value: number }) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAnimated(true), 600); return () => clearTimeout(t); }, []);

  const min = 0.8;
  const max = 2.2;
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  const thresholdPct = ((1.25 - min) / (max - min)) * 100;
  const warningPct = ((1.30 - min) / (max - min)) * 100;

  const isAboveThreshold = value >= 1.25;

  return (
    <div className="rounded-2xl border border-white/5 bg-[#0f0430]/60 p-6">
      <div className="mb-1 flex items-center justify-between">
        <div>
          <p className="font-[var(--font-dm-mono)] text-[9px] uppercase tracking-[0.2em] text-white/30">
            Debt Service Coverage Ratio
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <motion.span
              className="font-[var(--font-playfair)] text-4xl font-black tabular-nums"
              style={{ color: isAboveThreshold ? "#16a34a" : "#dc2626" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {animated ? value.toFixed(2) : "0.00"}\u00d7
            </motion.span>
            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${isAboveThreshold ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
              {isAboveThreshold ? "SBA Qualified" : "Below Threshold"}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="font-[var(--font-dm-mono)] text-[9px] text-white/20">SBA 7(a) Minimum</p>
          <p className="font-[var(--font-dm-mono)] text-lg font-bold text-red-400/60">1.25\u00d7</p>
        </div>
      </div>

      {/* Gauge bar */}
      <div className="relative mt-4 h-3 overflow-hidden rounded-full bg-white/5">
        {/* SBA threshold line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-red-500"
          style={{ left: thresholdPct + "%" }}
        />
        {/* Warning threshold */}
        <div
          className="absolute top-0 bottom-0 z-10 w-px bg-amber-500/40"
          style={{ left: warningPct + "%" }}
        />
        {/* Fill */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 rounded-full"
          style={{
            background: isAboveThreshold
              ? "linear-gradient(90deg, #dc2626 0%, #d97706 30%, #16a34a 70%)"
              : "linear-gradient(90deg, #dc2626 0%, #d97706 100%)",
          }}
          initial={{ width: 0 }}
          animate={{ width: animated ? pct + "%" : "0%" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        />
      </div>

      {/* Scale labels */}
      <div className="mt-2 flex justify-between font-[var(--font-dm-mono)] text-[8px] text-white/15">
        <span>0.8\u00d7</span>
        <span style={{ marginLeft: thresholdPct - 8 + "%" }} className="text-red-400/40">
          1.25\u00d7 SBA min
        </span>
        <span>2.2\u00d7</span>
      </div>

      {/* Insight */}
      <div className="mt-4 rounded-lg border border-green-500/10 bg-green-500/5 px-4 py-2">
        <p className="text-[11px] leading-relaxed text-green-300/70">
          <span className="font-semibold text-green-300">+0.22\u00d7 above SBA minimum.</span>{" "}
          Comfortable margin. Even if 2 wholesale accounts churn during transition, DSCR projects to 1.30\u00d7 \u2014 still above covenant.
        </p>
      </div>
    </div>
  );
}

// ─── AI Board Card ───────────────────────────────────────────────
function BoardCard({ member, index }: { member: typeof AI_BOARD[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full rounded-xl border border-white/5 bg-[#0f0430]/60 text-left transition-all hover:border-white/10"
      >
        <div className="flex items-center gap-3 px-5 py-4">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: member.color + "15" }}
          >
            <member.icon className="h-5 w-5" style={{ color: member.color }} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white/80">{member.persona}</span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                  member.verdict === "BUY"
                    ? "bg-green-500/15 text-green-400 ring-1 ring-green-500/20"
                    : member.verdict === "CONDITIONAL"
                    ? "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/20"
                    : "bg-red-500/15 text-red-400 ring-1 ring-red-500/20"
                }`}
              >
                {member.verdict}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-white/35">{member.summary}</p>

            {/* Confidence bar */}
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: member.color }}
                  initial={{ width: 0 }}
                  animate={{ width: member.confidence + "%" }}
                  transition={{ duration: 1, delay: 1 + index * 0.12, ease: "easeOut" }}
                />
              </div>
              <span className="font-[var(--font-dm-mono)] text-[10px] tabular-nums text-white/25">
                {member.confidence}%
              </span>
            </div>
          </div>

          <ChevronDown
            className={`h-4 w-4 shrink-0 text-white/15 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="border-t border-white/5 px-5 py-4">
                <p className="text-xs leading-[1.7] text-white/50">{member.detail}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </motion.div>
  );
}

// ─── Consensus Reveal ────────────────────────────────────────────
function ConsensusReveal() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => { const t = setTimeout(() => setRevealed(true), 2200); return () => clearTimeout(t); }, []);

  const votes = AI_BOARD.map((m) => m.verdict);
  const buyCount = votes.filter((v) => v === "BUY").length;
  const avgConfidence = Math.round(AI_BOARD.reduce((s, m) => s + m.confidence, 0) / AI_BOARD.length);

  return (
    <AnimatePresence>
      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/5 to-green-500/[0.02] p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-[var(--font-playfair)] text-lg font-black text-green-300">
                AI Board Consensus: PROCEED WITH OFFER
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                {/* Vote chips */}
                {AI_BOARD.map((m, i) => (
                  <motion.span
                    key={m.persona}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      m.verdict === "BUY"
                        ? "bg-green-500/15 text-green-400"
                        : m.verdict === "CONDITIONAL"
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    <span className="h-1 w-1 rounded-full" style={{ backgroundColor: m.color }} />
                    {m.verdict}
                  </motion.span>
                ))}
              </div>
              <p className="mt-3 font-[var(--font-dm-mono)] text-[11px] text-green-300/40">
                {buyCount}/5 recommend &middot; 1 conditional &middot; 1 caution flag &middot; Avg confidence: {avgConfidence}%
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/40">
                Recommended next step: Submit LOI at $3.1M with 90-day transition period,
                $67.5K warranty escrow, and 12-month earnout on wholesale account retention.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── CLAW Timeline ───────────────────────────────────────────────
function CLAWTimeline() {
  return (
    <div className="flex gap-1">
      {CLAW_STEPS.map((step, i) => (
        <motion.div
          key={step.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.08 }}
          className={`relative flex-1 rounded-xl border px-3 py-3 ${
            step.status === "active"
              ? "border-opacity-30"
              : step.status === "complete"
              ? "border-green-500/15 bg-green-500/[0.03]"
              : "border-white/[0.03] bg-white/[0.005] opacity-40"
          }`}
          style={{
            borderColor: step.status === "active" ? step.color + "40" : undefined,
            backgroundColor: step.status === "active" ? step.color + "06" : undefined,
          }}
        >
          <div className="flex items-center gap-1.5">
            {step.status === "complete" ? (
              <CheckCircle2 className="h-3 w-3 text-green-400/60" />
            ) : step.status === "locked" ? (
              <Lock className="h-3 w-3 text-white/15" />
            ) : (
              <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: step.color }} />
            )}
            <span className="font-[var(--font-dm-mono)] text-[8px] uppercase tracking-wider text-white/25">
              Act {step.act}
            </span>
          </div>
          <h4
            className="mt-1 text-[11px] font-bold"
            style={{ color: step.status === "locked" ? "rgba(255,255,255,0.2)" : step.color }}
          >
            {step.name}
          </h4>
          <p className="mt-0.5 text-[9px] leading-snug text-white/20">{step.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Main Demo Page ──────────────────────────────────────────────
export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#08021a] px-4 pb-32 pt-28 sm:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="font-[var(--font-dm-mono)] text-[10px] uppercase tracking-[0.25em] text-[#902DCE]">
            Live Demo &middot; ALETHINX AI
          </p>
          <h1 className="mt-4 font-[var(--font-playfair)] text-[clamp(28px,5vw,48px)] font-black leading-[1.05] text-white">
            See What Your AI Board
            <br />
            <span className="text-[#902DCE]">Sees in Every Deal</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/40">
            Five AI perspectives. Real diligence reasoning. One unified verdict.
            This is how institutional buyers will analyze acquisitions in 2026.
          </p>
        </motion.div>

        {/* CLAW Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <CLAWTimeline />
        </motion.div>

        {/* Deal Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 rounded-2xl border border-[#902DCE]/15 bg-gradient-to-br from-[#0f0430] to-[#08021a] p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-[var(--font-dm-mono)] text-[9px] uppercase tracking-[0.2em] text-[#902DCE]">
                SEEKER&trade; Match &middot; {DEAL.matchScore}% Profile Fit
              </p>
              <h2 className="mt-1 font-[var(--font-playfair)] text-2xl font-black text-white">
                {DEAL.name}
              </h2>
              <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-white/30">
                <span className="flex items-center gap-1"><Building2 className="h-3 w-3" />{DEAL.industry}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{DEAL.location}</span>
                <span className="flex items-center gap-1"><Users className="h-3 w-3" />{DEAL.employees} employees</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{DEAL.yearsInBusiness} years</span>
              </div>
            </div>
            <span className="rounded-full bg-green-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-green-400 ring-1 ring-green-500/20">
              {DEAL.matchScore}% Match
            </span>
          </div>

          {/* Metrics grid */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[
              { label: "Revenue", value: DEAL.revenue },
              { label: "EBITDA", value: DEAL.ebitda },
              { label: "SDE", value: DEAL.sde },
              { label: "Asking", value: DEAL.askingPrice },
              { label: "Multiple", value: DEAL.multiple },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-white/[0.04] bg-white/[0.015] px-3 py-2.5">
                <div className="font-[var(--font-dm-mono)] text-base font-bold tabular-nums text-white">{m.value}</div>
                <div className="font-[var(--font-dm-mono)] text-[8px] uppercase tracking-wider text-white/20">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* DSCR Gauge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <DSCRGauge value={DEAL.dscr} />
        </motion.div>

        {/* AI Board */}
        <div className="mb-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-3 font-[var(--font-dm-mono)] text-[9px] uppercase tracking-[0.2em] text-[#902DCE]"
          >
            AI Board of Advisors &middot; Click any to read full reasoning
          </motion.p>
          <div className="space-y-2">
            {AI_BOARD.map((member, i) => (
              <BoardCard key={member.persona} member={member} index={i} />
            ))}
          </div>
        </div>

        {/* Consensus */}
        <div className="mb-12">
          <ConsensusReveal />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="text-center"
        >
          <a
            href="https://app.alethinx.ai"
            className="inline-flex items-center gap-2 rounded-full bg-[#902DCE] px-8 py-4 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(144,45,206,0.3)] transition-all hover:bg-[#a040e0] hover:shadow-[0_0_40px_rgba(144,45,206,0.25)]"
          >
            Analyze Your First Deal Free
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 font-[var(--font-dm-mono)] text-[9px] uppercase tracking-[0.12em] text-white/15">
            No credit card required &middot; AI analysis in under 60 seconds &middot; SBA qualification instant
          </p>
        </motion.div>

        {/* Disclaimer */}
        <p className="mt-20 text-center font-[var(--font-dm-mono)] text-[7px] uppercase tracking-[0.12em] text-white/8">
          Demo uses simulated deal data for illustration &middot; Actual analysis
          powered by multi-model AI &middot; Patent Pending 64/024,148 &middot;
          &copy; 2026 Alethinx, Inc.
        </p>
      </div>
    </div>
  );
}
