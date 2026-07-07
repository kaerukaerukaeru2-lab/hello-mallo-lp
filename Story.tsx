export default function Story() {
  return (
    <section id="concept" className="px-7 py-14" style={{ background: "#fff" }}>
      {/* section label */}
      <p
        className="mb-5 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.26em]"
        style={{ color: "var(--pk2)" }}
      >
        <span className="inline-block h-px w-4" style={{ background: "var(--pk2)" }} />
        Story
      </p>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {/* 引用 */}
        <blockquote
          className="text-[20px] font-light leading-[1.6]"
          style={{
            color: "var(--text)",
            borderLeft: "2px solid var(--pk2)",
            paddingLeft: "18px",
          }}
        >
          甘くて儚いだけじゃない、
          <br />
          <em style={{ color: "var(--pk2)", fontStyle: "normal" }}>
            &ldquo;やわらかいから強い&rdquo;
          </em>
          <br />
          女の子たちの物語。
        </blockquote>

        {/* 本文 */}
        <p
          className="text-[12px] leading-[2.1]"
          style={{ color: "var(--sub)" }}
        >
          迷いながら、傷つきながら、それぞれの色を隠さずに、ありのままの自分でステージに立つ。
          <br />
          <br />
          その一瞬のきらめきが、誰かの明日を少しだけ明るくする。
          <br />
          <br />
          Hello ∵ Mallo
          は、ひとりひとりの個性をそのまま抱きしめて、マシュマロみたいにやわらかい心で、大阪から世界へ夢を届けるガールズアイドルグループです。
        </p>
      </div>
    </section>
  );
}
