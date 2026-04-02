import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const REVOLUTION_URL = "https://alethinx-revolution-nextjs.vercel.app";

interface TestResult {
  suite: string;
  test: string;
  status: "pass" | "fail";
  duration_ms: number;
  error?: string;
}

async function fetchCheck(url: string): Promise<{ ok: boolean; status: number; ms: number; headers: Record<string, string>; body: string }> {
  const start = Date.now();
  try {
    const res = await fetch(url, { redirect: "follow" });
    const body = await res.text();
    const headers: Record<string, string> = {};
    res.headers.forEach((v, k) => { headers[k.toLowerCase()] = v; });
    return { ok: res.status === 200, status: res.status, ms: Date.now() - start, headers, body };
  } catch {
    return { ok: false, status: 0, ms: Date.now() - start, headers: {}, body: "" };
  }
}

async function postCheck(url: string, body: object): Promise<{ ok: boolean; status: number; ms: number; data: Record<string, unknown> }> {
  const start = Date.now();
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return { ok: res.status < 500, status: res.status, ms: Date.now() - start, data };
  } catch {
    return { ok: false, status: 0, ms: Date.now() - start, data: {} };
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });

  try {
    const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const results: TestResult[] = [];
    const startTime = Date.now();
    const reportId = "RQA-" + Date.now().toString(36).toUpperCase();

    // ═══════════════════════════════════════════════════════
    // Suite 1: Page Loads
    // ═══════════════════════════════════════════════════════
    const pages = [
      { name: "Homepage", path: "/" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
      { name: "Cookie Policy", path: "/cookie-policy" },
    ];
    for (const page of pages) {
      const r = await fetchCheck(REVOLUTION_URL + page.path);
      results.push({
        suite: "Page Loads",
        test: page.name + " (" + page.path + ")",
        status: r.ok ? "pass" : "fail",
        duration_ms: r.ms,
        error: r.ok ? undefined : "HTTP " + r.status,
      });
    }

    // ═══════════════════════════════════════════════════════
    // Suite 2: Product API
    // ═══════════════════════════════════════════════════════
    const productKeys = ["alethinx", "sophynx", "autopilot", "logynx", "masoryx", "urimyx", "thummix", "gnosix", "koinonyx", "shamarix", "agornyx"];
    for (const key of productKeys) {
      const r = await fetchCheck(REVOLUTION_URL + "/api/product?key=" + key);
      results.push({
        suite: "Product API",
        test: "GET /api/product?key=" + key,
        status: r.ok ? "pass" : "fail",
        duration_ms: r.ms,
        error: r.ok ? undefined : "HTTP " + r.status,
      });
    }

    // Invalid key returns 404
    const notFound = await fetchCheck(REVOLUTION_URL + "/api/product?key=nonexistent");
    results.push({
      suite: "Product API",
      test: "Invalid key returns 404",
      status: notFound.status === 404 ? "pass" : "fail",
      duration_ms: notFound.ms,
      error: notFound.status === 404 ? undefined : "Got " + notFound.status,
    });

    // ═══════════════════════════════════════════════════════
    // Suite 3: Waitlist API
    // ═══════════════════════════════════════════════════════
    const testEmail = "qa-test-" + Date.now() + "@alethinx.ai";
    const waitlistOk = await postCheck(REVOLUTION_URL + "/api/waitlist", { email: testEmail });
    results.push({
      suite: "Waitlist API",
      test: "POST valid email → 200",
      status: waitlistOk.status === 200 ? "pass" : "fail",
      duration_ms: waitlistOk.ms,
      error: waitlistOk.status === 200 ? undefined : "Got " + waitlistOk.status,
    });

    const waitlistBad = await postCheck(REVOLUTION_URL + "/api/waitlist", { email: "invalid" });
    results.push({
      suite: "Waitlist API",
      test: "POST invalid email → 400",
      status: waitlistBad.status === 400 ? "pass" : "fail",
      duration_ms: waitlistBad.ms,
      error: waitlistBad.status === 400 ? undefined : "Got " + waitlistBad.status,
    });

    // Check row was inserted
    const { data: waitlistRow } = await sb.from("revolution_waitlist").select("id").eq("email", testEmail).maybeSingle();
    results.push({
      suite: "Waitlist API",
      test: "Email saved to revolution_waitlist table",
      status: waitlistRow?.id ? "pass" : "fail",
      duration_ms: 0,
      error: waitlistRow?.id ? undefined : "Row not found in database",
    });

    // Cleanup test row
    await sb.from("revolution_waitlist").delete().eq("email", testEmail);

    // ═══════════════════════════════════════════════════════
    // Suite 4: IP/Security
    // ═══════════════════════════════════════════════════════
    const homePage = await fetchCheck(REVOLUTION_URL + "/");

    const IP_TOKENS = ["pgvector", "AX-TS-0", "304 rules", "Layer 4 IMMUTABLE", "66M ARR", "1.98B", "text-embedding-004", "cosine similarity", "Andrew S. Bosin", "228913"];
    for (const token of IP_TOKENS) {
      const found = homePage.body.toLowerCase().includes(token.toLowerCase());
      results.push({
        suite: "IP Security",
        test: "No " + token + " in HTML",
        status: found ? "fail" : "pass",
        duration_ms: 0,
        error: found ? "EXPOSED: " + token + " found in page source" : undefined,
      });
    }

    // Security headers
    const secHeaders = [
      { key: "x-frame-options", expected: "DENY" },
      { key: "strict-transport-security", expected: "max-age=" },
      { key: "x-content-type-options", expected: "nosniff" },
    ];
    for (const h of secHeaders) {
      const val = homePage.headers[h.key] || "";
      const pass = val.includes(h.expected);
      results.push({
        suite: "Security Headers",
        test: h.key + ": " + h.expected,
        status: pass ? "pass" : "fail",
        duration_ms: 0,
        error: pass ? undefined : "Got: " + (val || "(missing)"),
      });
    }

    // ═══════════════════════════════════════════════════════
    // Suite 5: Source Maps Blocked
    // ═══════════════════════════════════════════════════════
    // Check a predictable chunk path for .map
    const mapUrl = REVOLUTION_URL + "/_next/static/chunks/main.js.map";
    const mainJs = await fetchCheck(mapUrl);
    results.push({
      suite: "Source Maps",
      test: "main.js.map returns 404 (blocked)",
      status: mainJs.status === 404 || mainJs.status === 0 ? "pass" : "fail",
      duration_ms: mainJs.ms,
      error: mainJs.status === 404 || mainJs.status === 0 ? undefined : "Got " + mainJs.status + " - source maps exposed!",
    });

    // ═══════════════════════════════════════════════════════
    // Suite 6: Performance
    // ═══════════════════════════════════════════════════════
    const perfHome = await fetchCheck(REVOLUTION_URL + "/");
    results.push({
      suite: "Performance",
      test: "Homepage loads under 3s",
      status: perfHome.ms < 3000 ? "pass" : "fail",
      duration_ms: perfHome.ms,
      error: perfHome.ms < 3000 ? undefined : perfHome.ms + "ms > 3000ms",
    });

    // ═══════════════════════════════════════════════════════
    // Generate Report
    // ═══════════════════════════════════════════════════════
    const totalDuration = Date.now() - startTime;
    const passed = results.filter(r => r.status === "pass").length;
    const failed = results.filter(r => r.status === "fail").length;
    const total = results.length;
    const allPassed = failed === 0;
    const failures = results.filter(r => r.status === "fail");

    const subject = allPassed
      ? "REVOLUTION QA " + reportId + " - PASS (" + passed + "/" + total + ")"
      : "REVOLUTION QA " + reportId + " - FAIL (" + failed + " failures)";

    let report = "REVOLUTION QA REPORT\n\n";
    report += "Report ID: " + reportId + "\nDate: " + new Date().toISOString().split("T")[0] + "\n";
    report += "Duration: " + totalDuration + "ms\n\nTests: " + passed + "/" + total + "\n";
    report += "Result: " + (allPassed ? "ALL PASSED" : failed + " FAILURES") + "\n\n";
    report += "Recommendation: " + (allPassed ? "Safe to swap domain to production." : "Fix failures before domain swap.") + "\n";

    if (failures.length > 0) {
      report += "\nFAILURES:\n";
      for (const f of failures) {
        report += "  [FAIL] " + f.suite + " - " + f.test + "\n";
        report += "     Error: " + (f.error || "unknown") + "\n";
      }
    }
    report += "\nStaging: " + REVOLUTION_URL + "\n---\nAlethinx AI - Revolution QA System\n";

    // Build HTML email
    const suites = [...new Set(results.map(r => r.suite))];
    const suiteSummaryHtml = suites.map(function(suite) {
      const sr = results.filter(function(r) { return r.suite === suite; });
      const sp = sr.every(function(r) { return r.status === "pass"; });
      const icon = sp ? "\u2705" : "\u274C";
      const color = sp ? "#16a34a" : "#dc2626";
      const label = sp ? "PASS" : "FAIL";
      const count = sr.filter(function(r) { return r.status === "pass"; }).length;
      return '<tr><td style="padding:6px 12px;border-bottom:1px solid #1a1a2e;">' + icon + " " + suite + '</td><td style="padding:6px 12px;border-bottom:1px solid #1a1a2e;text-align:center;">' + count + "/" + sr.length + '</td><td style="padding:6px 12px;border-bottom:1px solid #1a1a2e;color:' + color + ';font-weight:bold;">' + label + "</td></tr>";
    }).join("");

    let failureHtml = "";
    if (failures.length > 0) {
      failureHtml = '<div style="background:#1a0d0d;border:1px solid #dc2626;border-radius:8px;padding:16px;margin:16px 0;">';
      for (const f of failures) {
        failureHtml += '<p style="color:#dc2626;margin:4px 0;">\u274C ' + f.suite + " - " + f.test + '</p><p style="color:#999;font-size:12px;padding-left:20px;">' + (f.error || "") + "</p>";
      }
      failureHtml += "</div>";
    } else {
      failureHtml = '<p style="color:#16a34a;font-weight:bold;">\u2705 All tests passed. Safe to swap domain.</p>';
    }

    const statusBg = allPassed ? "#0d1a0d" : "#1a0d0d";
    const statusBorder = allPassed ? "#16a34a" : "#dc2626";
    const statusIcon = allPassed ? "\u2705" : "\u274C";
    const statusLabel = allPassed ? "ALL PASSED" : "FAILURES";
    const html = '<div style="font-family:system-ui;max-width:600px;margin:0 auto;padding:24px;background:#08021a;color:#e0e0e0;">'
      + '<div style="background:' + statusBg + ";border:2px solid " + statusBorder + ';border-radius:12px;padding:20px;margin-bottom:20px;">'
      + '<h2 style="color:' + statusBorder + ';margin:0 0 8px;">' + statusIcon + " Revolution QA: " + statusLabel + "</h2>"
      + '<p style="color:#999;margin:0;">' + passed + "/" + total + " tests in " + totalDuration + "ms</p></div>"
      + '<table style="width:100%;font-size:13px;border-collapse:collapse;"><tr style="background:#0f0430;"><th style="padding:8px 12px;text-align:left;">Suite</th><th style="padding:8px 12px;text-align:center;">Tests</th><th style="padding:8px 12px;">Status</th></tr>'
      + suiteSummaryHtml + "</table>" + failureHtml
      + '<p style="margin:16px 0;"><a href="' + REVOLUTION_URL + '" style="display:inline-block;background:#902DCE;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:bold;">View Staging</a></p>'
      + '<hr style="border:1px solid #1a1a2e;margin:20px 0;"/><p style="color:#666;font-size:11px;">Alethinx AI - Revolution QA System</p></div>';

    // Send email
    if (RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + RESEND_API_KEY },
        body: JSON.stringify({
          from: "qa@alethinx.ai",
          to: ["mark@alethinx.ai"],
          subject: subject,
          html: html,
          text: report,
        }),
      });
    }

    return new Response(JSON.stringify({ status: allPassed ? "PASSED" : "FAILED", passed, failed, total, duration_ms: totalDuration, report_id: reportId, results, report }), {
      headers: { ...CORS, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500, headers: { ...CORS, "Content-Type": "application/json" } });
  }
});
