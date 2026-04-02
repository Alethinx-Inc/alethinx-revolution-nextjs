export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32">
      <p className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-[#902DCE]">
        Legal
      </p>
      <h1 className="mt-3 font-display text-4xl font-black text-white">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-white/40">
        Last updated: April 2, 2026
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/60">
        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            Information We Collect
          </h2>
          <p>
            When you join our waitlist or use our platform, we collect your email
            address and any information you voluntarily provide. We also collect
            standard web analytics data (page views, browser type, referring URL)
            through Vercel Analytics, which is privacy-friendly and does not use
            cookies for tracking.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            How We Use Your Information
          </h2>
          <p>
            We use your email address solely to send product updates, early access
            invitations, and important service communications. We do not sell,
            trade, or rent your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            Data Storage and Security
          </h2>
          <p>
            Your data is stored securely using industry-standard encryption and
            hosted on infrastructure with SOC 2 compliance. We retain your data
            only as long as necessary to provide our services or as required by
            law.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            Your Rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of your personal
            data at any time by contacting us at hello@alethinx.ai. California
            residents have additional rights under the CCPA. EU residents have
            additional rights under the GDPR.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-lg font-semibold text-white/80">
            Contact
          </h2>
          <p>
            Alethinx, Inc.
            <br />
            McKinney, Texas
            <br />
            hello@alethinx.ai
          </p>
        </section>
      </div>
    </div>
  );
}
