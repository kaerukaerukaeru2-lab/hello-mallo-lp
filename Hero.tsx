import Image from "next/image";
import { GROUP_SNS, DEBUT_DISPLAY } from "@/lib/members";

export default function Hero() {
  return (
    <section className="relative grid min-h-[420px] grid-cols-1 items-center overflow-hidden md:grid-cols-2">

      {/* ── 左カラム ── */}
      <div className="relative z-10 px-8 py-16 md:px-10">

        {/* eyebrow */}
        <p
          className="mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em]"
          style={{ color: "var(--pk2)" }}
        >
          <span className="inline-block h-px w-5" style={{ background: "var(--pk2)" }} />
          Osaka Girls Idol Group
        </p>

        {/* デビューバッジ */}
        <div
          className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-semibold text-white"
          style={{ background: "linear-gradient(135deg, var(--pk2), var(--pk3))" }}
        >
          <span>🎤</span>
          <span className="text-[15px] font-bold">{DEBUT_DISPLAY}</span>
          <span className="text-[11px] opacity-90">デビューワンマンLIVE</span>
        </div>

        {/* ロゴ（大） */}
        <div className="relative mb-2 h-16 w-44">
          <Image
            src="/images/logo.png"
            alt="Hello ∵ Mallo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        <p
          className="mb-5 text-[10px] tracking-[0.22em]"
          style={{ color: "var(--muted)" }}
        >
          ハローマロー
        </p>

        <p
          className="mb-7 max-w-[280px] text-[12px] leading-[1.9]"
          style={{ color: "var(--sub)" }}
        >
          不完全で、まぶしくて、少しだけ泣きそうな女の子たち。
          <br />
          マシュマロみたいにやわらかい心で、
          <br />
          大阪から世界へ夢を届ける。
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-2">
          <a
            href="#members"
            className="rounded-full px-5 py-2.5 text-[11px] font-medium text-white transition-opacity hover:opacity-80"
            style={{ background: "var(--text)" }}
          >
            Members →
          </a>
          <a
            href={GROUP_SNS.x}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-[11px] transition-opacity hover:opacity-70"
            style={{
              border: "0.5px solid rgba(157,78,115,0.3)",
              color: "var(--sub)",
            }}
          >
            SNSをフォロー
          </a>
        </div>
      </div>

      {/* ── 右カラム：集合写真 ── */}
      <div className="relative hidden min-h-[420px] md:block">
        {/* 背景グラデーション */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,#fce7f3 0%,#fbcfe8 40%,#f9a8d4 70%,#f472b6 100%)",
          }}
        />

        {/* 集合写真
            public/images/group.jpg に画像を置くと表示される
            ない場合はグラデーション背景のみ */}
        <div className="absolute inset-0 flex items-end justify-center">
          <Image
            src="/images/group.jpg"
            alt="Hello ∵ Mallo メンバー集合写真"
            fill
            className="object-cover object-top"
            sizes="50vw"
          />
        </div>

        {/* 左フェードオーバーレイ */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--bg) 0%, transparent 30%)",
          }}
        />
      </div>
    </section>
  );
}
