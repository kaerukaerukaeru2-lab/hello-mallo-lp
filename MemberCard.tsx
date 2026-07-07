import Image from "next/image";
import type { Member } from "@/lib/members";

type Props = { member: Member };

export default function MemberCard({ member }: Props) {
  const { id, name, yomi, color, colorLight, colorDark, bio, image, sns } =
    member;

  const num = String(id).padStart(2, "0");

  return (
    <article
      className="overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-1"
      style={{ background: "#fff", border: "0.5px solid var(--bdr)" }}
    >
      {/* 画像エリア */}
      <div className="relative" style={{ aspectRatio: "3/4" }}>
        {/* カラーグラデーション背景（画像なし時のフォールバック） */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, #fff1f2, ${colorLight}, ${color})`,
          }}
        />

        {/* メンバー写真
            public/images/{image} に置くと表示される */}
        <Image
          src={`/images/${image}`}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width:768px) 100vw, 33vw"
          loading="lazy"
        />

        {/* 番号バッジ */}
        <span
          className="absolute left-2.5 top-2.5 rounded-full px-1.5 py-0.5 text-[9px] tracking-widest text-white/80"
          style={{ background: "rgba(0,0,0,0.12)" }}
        >
          {num}
        </span>

        {/* 練習生バッジ */}
        <span
          className="absolute right-2.5 top-2.5 rounded-full px-1.5 py-0.5 text-[9px] text-white/70"
          style={{ background: "rgba(255,255,255,0.2)" }}
        >
          練習生
        </span>

        {/* カラーバー */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ background: color }}
        />
      </div>

      {/* テキストエリア */}
      <div className="px-3 pb-3 pt-3.5">
        <p className="text-[15px] font-medium" style={{ color: "var(--text)" }}>
          {name}
        </p>
        <p
          className="mb-2 text-[10px] tracking-[0.1em]"
          style={{ color: "var(--muted)" }}
        >
          {yomi}
        </p>

        {/* 自己紹介（3行クランプ） */}
        <p
          className="mb-2.5 line-clamp-3 text-[10px] leading-[1.7]"
          style={{ color: "var(--sub)" }}
        >
          {bio}
        </p>

        {/* SNSリンク */}
        <div className="flex gap-1.5">
          {[
            { href: sns.x,         label: "X",        icon: "𝕏" },
            { href: sns.instagram,  label: "Instagram", icon: "📸" },
            { href: sns.tiktok,     label: "TikTok",    icon: "♪"  },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} ${s.label}`}
              className="rounded-full px-2.5 py-0.5 text-[10px] transition-all hover:text-white"
              style={{
                border: "0.5px solid var(--bdr)",
                color: "var(--sub)",
                background: "var(--bg2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = color;
                (e.currentTarget as HTMLElement).style.borderColor = color;
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--bdr)";
                (e.currentTarget as HTMLElement).style.color = "var(--sub)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
