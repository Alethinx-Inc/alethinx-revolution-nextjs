export default function CookiePolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32">
      <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-black text-white">
        Cookie Policy
      </h1>
      <p className="mt-2 text-sm text-white/40">
        Last updated: April 2, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/60">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            Cookies We Use
          </h2>
          <p>
            revolution.alethinx.ai uses minimal cookies. We use Vercel Analytics,
            which is a privacy-friendly analytics solution that does not use
            cookies for visitor tracking. Essential cookies may be used for
            security and session management only.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            Third-Party Cookies
          </h2>
          <p>
            We do not use third-party advertising cookies. We do not sell data to
            advertisers. We do not participate in ad exchanges or retargeting
            networks.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            Managing Cookies
          </h2>
          <p>
            You can control cookies through your browser settings. Disabling
            cookies will not affect the core functionality of our platform.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            Contact
          </h2>
          <p>
            For questions about our cookie practices, contact hello@alethinx.ai.
          </p>
        </section>
      </div>
    </div>
  );
}
