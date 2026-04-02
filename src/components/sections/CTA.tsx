"use client";

import { useState, type FormEvent } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Loader2, Check } from "lucide-react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="cta" className="relative px-6 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 gradient-glow-bottom" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <AnimatedSection>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-black text-white">
            The Impossible Ecosystem Is Live.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/50">
            Four products deployed. Patent pending. 39/39 QA green. The compounding
            data moat starts Day 1.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {status === "success" ? (
            <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-4">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium text-green-300">
                Welcome to the Revolution. We&apos;ll be in touch.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#902DCE] focus:ring-1 focus:ring-[#902DCE]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 rounded-xl bg-[#902DCE] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#a040e0] disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Join the Revolution \u2192"
                )}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-2 text-xs text-red-400">{errorMsg}</p>
          )}

          <p className="mt-4 font-mono-brand text-[9px] uppercase tracking-[0.1em] text-white/20">
            No credit card required &middot; Free to start
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
