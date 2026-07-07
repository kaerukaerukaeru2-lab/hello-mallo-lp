const ITEMS = [
  "Hello ∵ Mallo",
  "Osaka",
  "Debut 2026.9.12",
  "やわらかいから強い",
  "6 Members",
  "Girls Idol Group",
];

export default function Ticker() {
  // 2回繰り返してシームレスなループに
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{
        borderTop: "0.5px solid var(--bdr)",
        borderBottom: "0.5px solid var(--bdr)",
        background: "linear-gradient(90deg,#fdf2f8,#fff8fb,#fdf2f8)",
        padding: "10px 0",
      }}
    >
      <div className="inline-flex gap-8 animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className="text-[10px] uppercase tracking-[0.22em]"
              style={{ color: "var(--pk2)" }}
            >
              {item}
            </span>
            <span style={{ color: "var(--pk)", opacity: 0.5 }}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
