import { MEMBERS, GROUP_SNS } from "@/lib/members";

export default function Links() {
  return (
    <section id="links" className="px-7 py-14" style={{ background: "#fff" }}>
      <p
        className="mb-4 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.26em]"
        style={{ color: "var(--pk2)" }}
      >
        <span className="inline-block h-px w-4" style={{ background: "var(--pk2)" }} />
        Links
      </p>
      <h2 className="mb-7 text-[22px] font-normal" style={{ color: "var(--text)" }}>
        公式SNS &amp; リンク
      </h2>

      {/* グループ公式 */}
      <p
        className="mb-3 border-b pb-2 text-[10px] uppercase tracking-[0.18em]"
        style={{ color: "var(--muted)", borderColor: "var(--bdr)" }}
      >
        Group Official
      </p>
      <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {[
          { href: GROUP_SNS.x,        label: "公式 X",    handle: "@_HelloMallo",  icon: "𝕏",  bg: "#f0f0f0" },
          { href: GROUP_SNS.instagram, label: "Instagram", handle: "@_hellomallo",  icon: "📸", bg: "linear-gradient(135deg,#fce7f3,#fbcfe8)" },
          { href: GROUP_SNS.tiktok,    label: "TikTok",    handle: "@_hellomallo",  icon: "♪",  bg: "#f0fdf4" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl p-3 transition-all hover:border-[var(--pk2)]"
            style={{ background: "#fff", border: "0.5px solid var(--bdr)" }}
          >
            <div
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] text-sm"
              style={{ background: s.bg }}
            >
              {s.icon}
            </div>
            <div>
              <p className="text-[12px] font-medium" style={{ color: "var(--text)" }}>
                {s.label}
              </p>
              <p className="text-[10px]" style={{ color: "var(--muted)" }}>
                {s.handle}
              </p>
            </div>
            <span className="ml-auto text-[12px]" style={{ color: "var(--muted)" }}>→</span>
          </a>
        ))}
      </div>

      {/* メンバー個人 */}
      <p
        className="mb-3 border-b pb-2 text-[10px] uppercase tracking-[0.18em]"
        style={{ color: "var(--muted)", borderColor: "var(--bdr)" }}
      >
        Members
      </p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {MEMBERS.map((m) => (
          <div
            key={m.id}
            className="flex items-center gap-3 rounded-xl p-3"
            style={{ background: "#fff", border: "0.5px solid var(--bdr)" }}
          >
            {/* カラーアイコン */}
            <div
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] text-[11px] font-semibold"
              style={{
                background: `linear-gradient(135deg,#fff1f2,${m.colorLight})`,
                color: m.colorDark,
              }}
            >
              {m.name.split(" ")[1]?.slice(0, 3) ?? m.name.slice(0, 2)}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-medium" style={{ color: "var(--text)" }}>
                {m.name}
              </p>
              {/* SNS 3ボタン */}
              <div className="mt-1.5 flex gap-1.5">
                {[
                  { href: m.sns.x,         label: "𝕏"  },
                  { href: m.sns.instagram,  label: "📸" },
                  { href: m.sns.tiktok,     label: "♪"  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-2 py-0.5 text-[10px] transition-all hover:text-white"
                    style={{
                      border: "0.5px solid var(--bdr)",
                      color: "var(--sub)",
                      background: "var(--bg2)",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <span className="text-[12px]" style={{ color: "var(--muted)" }}>→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
