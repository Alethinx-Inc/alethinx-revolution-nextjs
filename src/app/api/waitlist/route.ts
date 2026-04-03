import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // Save to Supabase if configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      await fetch(`${supabaseUrl}/rest/v1/revolution_waitlist`, {
        method: "POST",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email, source: "revolution" }),
      });
    }

    // Send welcome email via Resend if configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "revolution@alethinx.ai",
          to: [email],
          subject: "Welcome to ALETHINX AI REVOLUTION\u2122",
          html: `<div style="font-family:system-ui;max-width:500px;margin:0 auto;padding:32px;background:#08021a;color:#e0e0e0;">
<h1 style="color:#902DCE;font-size:24px;margin-bottom:16px;">Welcome to the Revolution.</h1>
<p style="line-height:1.6;">You're now part of the early access community building the future of M&A intelligence.</p>
<p style="line-height:1.6;">The compounding data moat starts Day 1. Every day earlier means a deeper advantage for you.</p>
<a href="https://app.alethinx.ai" style="display:inline-block;margin-top:20px;padding:12px 24px;background:#902DCE;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">Explore the Platform \u2192</a>
<hr style="border:1px solid #1a1a2e;margin:24px 0;"/>
<p style="font-size:11px;color:#666;">\u00a9 2026 Alethinx, Inc. \u00b7 Patent Pending</p>
</div>`,
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
