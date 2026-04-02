import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#902DCE]/10 bg-[#08021a] px-6 py-16 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
              Products
            </h4>
            <div className="flex flex-col gap-2">
              <a href="https://app.alethinx.ai" className="text-sm text-white/40 hover:text-white/60">Alethinx AI</a>
              <a href="https://sophynx.alethinx.ai" className="text-sm text-white/40 hover:text-white/60">Sophynx</a>
              <span className="text-sm text-white/40">Autopilot</span>
              <span className="text-sm text-white/40">Logynx</span>
              <span className="text-sm text-white/40">Masoryx</span>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
              Company
            </h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@alethinx.ai" className="text-sm text-white/40 hover:text-white/60">Contact</a>
              <span className="text-sm text-white/40">Security</span>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
              Platform
            </h4>
            <div className="flex flex-col gap-2">
              <a href="https://app.alethinx.ai" className="text-sm text-white/40 hover:text-white/60">Start Free</a>
              <a href="#pricing" className="text-sm text-white/40 hover:text-white/60">Pricing</a>
              <a href="#architecture" className="text-sm text-white/40 hover:text-white/60">Architecture</a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-sm text-white/40 hover:text-white/60">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-sm text-white/40 hover:text-white/60">Terms of Service</Link>
              <Link href="/cookie-policy" className="text-sm text-white/40 hover:text-white/60">Cookie Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <p className="text-center font-mono-brand text-[9px] uppercase tracking-[0.12em] text-white/25">
            &copy; 2026 Alethinx, Inc. &middot; Patent Pending 64/024,148
            &middot; McKinney, Texas &middot; All rights reserved
          </p>
          <p className="mt-2 text-center font-mono-brand text-[8px] uppercase tracking-[0.1em] text-white/15">
            All referenced trademarks are property of their respective owners.
            Alethinx has no affiliation with any referenced company.
          </p>
        </div>
      </div>
    </footer>
  );
}
