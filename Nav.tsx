"use client";

import Image from "next/image";
import { GROUP_SNS } from "@/lib/members";

const NAV_LINKS = [
  { label: "Concept", href: "#concept" },
  { label: "Members", href: "#members" },
  { label: "News",    href: "#news"    },
  { label: "Links",   href: "#links"   },
];

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: "rgba(255,248,251,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "0.5px solid var(--bdr)",
      }}
    >
      {/* ロゴ */}
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-20">
          <Image
            src="/images/logo.png"
            alt="Hello ∵ Mallo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>

      {/* ナビ */}
      <nav className="hidden md:flex items-center gap-5">
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[11px] tracking-widest transition-colors"
            style={{ color: "var(--sub)" }}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* SNS */}
      <div className="flex items-center gap-1.5">
        {[
          { href: GROUP_SNS.x,         label: "X",        icon: "𝕏" },
          { href: GROUP_SNS.instagram,  label: "Instagram", icon: "📸" },
          { href: GROUP_SNS.tiktok,     label: "TikTok",    icon: "♪"  },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] transition-opacity hover:opacity-70"
            style={{
              background: "var(--bg2)",
              border: "0.5px solid var(--bdr)",
              color: "var(--sub)",
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </header>
  );
}
