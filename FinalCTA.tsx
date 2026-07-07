"use client";

import { useEffect, useState } from "react";
import { DEBUT_DATE, DEBUT_DISPLAY } from "@/lib/members";
import { buildGoogleCalUrl, buildOutlookCalUrl, buildIcsContent } from "@/lib/addToCalendar";

export default function FinalCTA() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    function calc() {
      const diff = new Date(DEBUT_DATE).getTime() - Date.now();
      setDays(diff > 0 ? Math.ceil(diff / 86400000) : 0);
    }
    calc();
    const id = setInterval(calc, 60_000);
    return () => clearInterval(id);
  }, []);

  function downloadIcs() {
    const content = buildIcsContent();
    const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "hello-mallo-debut.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section
      className="relative overflow-hidden px-7 py-20 text-center"
      style={{
        background:
          "linear-gradient(140deg,#fdf2f8 0%,#fce7f3 30%,#fbcfe8 60%,#f9a8d4 100%)",
      }}
    >
      {/* 背景オーブ */}
      <div
        className="animate-orb pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full"
        style={{ background: "rgba(255,255,255,0.15)" }}
      />
      <div
        className="animate-orb pointer-events-none absolute -bottom-12 -left-10 h-48 w-48 rounded-full"
        style={{ background: "rgba(255,255,255,0.12)", animationDelay: "3s" }}
      />

      <p
        className="relative mb-3 text-[10px] uppercase tracking-[0.26em] opacity-70"
        style={{ color: "var(--pk3)" }}
      >
        Debut Live
      </p>
      <p
        className="relative mb-1.5 text-[11px] uppercase tracking-[0.18em]"
        style={{ color: "var(--pk3)" }}
      >
        デビューワンマンLIVE
      </p>
      <p
        className="relative mb-1 text-[48px] font-light leading-none tracking-[-0.03em]"
        style={{ color: "var(--text)" }}
      >
        {DEBUT_DISPLAY}
      </p>
      <p
        className="relative mb-1.5 text-[13px] font-medium"
        style={{ color: "var(--pk3)" }}
      >
        🎤 Hello ∵ Mallo デビューワンマンLIVE
      </p>
      <p
        className="relative mb-4 text-[12px]"
        style={{ color: "var(--sub)" }}
      >
        📍 大阪
      </p>

      {/* カウントダウン */}
      <div
        className="relative mb-8 inline-block rounded-full px-6 py-2 text-[13px] font-medium"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(8px)",
          border: "0.5px solid rgba(236,72,153,0.2)",
          color: "var(--pk3)",
        }}
      >
        {days === null
          ? "計算中..."
          : days > 0
          ? `デビューまで あと ${days} 日`
          : "🎉 本日デビュー！"}
      </div>

      {/* カレンダー登録ボタン */}
      <div className="relative flex flex-wrap justify-center gap-2">
        {/* Google Calendar */}
        <a
          href={buildGoogleCalUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "var(--pk3)", border: "1px solid var(--pk3)" }}
        >
          📅 Google Calendar
        </a>

        {/* Apple / ICS */}
        <button
          onClick={downloadIcs}
          className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-medium transition-opacity hover:opacity-80"
          style={{
            border: "1px solid rgba(190,24,93,0.3)",
            color: "var(--pk3)",
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(4px)",
          }}
        >
          🍎 Apple / ICS
        </button>

        {/* Outlook */}
        <a
          href={buildOutlookCalUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-medium transition-opacity hover:opacity-80"
          style={{
            border: "1px solid rgba(190,24,93,0.3)",
            color: "var(--pk3)",
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(4px)",
          }}
        >
          📆 Outlook
        </a>
      </div>
    </section>
  );
}
