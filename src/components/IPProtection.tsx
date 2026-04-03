"use client";

import { useEffect } from "react";

export function IPProtection() {
  useEffect(() => {
    // Disable right-click
    const onContext = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", onContext);

    // Disable keyboard shortcuts
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "u") ||
        (e.ctrlKey && e.key === "s") ||
        (e.ctrlKey && e.key === "p")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", onKey);

    // Disable drag
    const onDrag = (e: DragEvent) => e.preventDefault();
    document.addEventListener("dragstart", onDrag);

    // Disable print
    const onPrint = () => {
      document.body.style.display = "none";
      setTimeout(() => { document.body.style.display = ""; }, 100);
    };
    window.addEventListener("beforeprint", onPrint);

    // Console warning
    try { console.clear(); } catch {}
    try {
      console.log(
        "%cALETHINX AI REVOLUTION\u2122",
        "background:#902DCE;color:#fff;padding:8px 16px;border-radius:4px;font-weight:bold;font-size:14px;"
      );
      console.log(
        "%c\u00a9 2026 Alethinx, Inc. All rights reserved.\nPatent Pending\n\u26a0 WARNING: Unauthorized copying, reproduction, or distribution\nof this material is strictly prohibited and may result in\ncivil and criminal penalties.",
        "color:#999;font-size:11px;"
      );
    } catch {}

    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("dragstart", onDrag);
      window.removeEventListener("beforeprint", onPrint);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-[#902DCE]/10 bg-[#08021a]/95 px-4 py-2 backdrop-blur-sm">
      <p className="text-center font-mono-brand text-[8px] uppercase tracking-[0.1em] text-white/30">
        &copy; 2026 Alethinx, Inc. &middot; ALETHINX&trade; SOPHYNX&trade;
        LOGYNX&trade; MASORYX&trade; &middot; Patent Pending &middot;
        All Rights Reserved
      </p>
    </div>
  );
}
