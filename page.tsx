import Nav           from "@/components/Nav";
import Hero          from "@/components/Hero";
import Ticker        from "@/components/Ticker";
import Story         from "@/components/Story";
import MemberSection from "@/components/MemberSection";
import Links         from "@/components/Links";
import FinalCTA      from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <Story />
      <MemberSection />
      <Links />
      <FinalCTA />

      {/* フッター */}
      <footer
        className="flex items-center justify-between px-7 py-6"
        style={{
          background: "#fff",
          borderTop: "0.5px solid var(--bdr)",
        }}
      >
        <div className="text-[12px] font-medium" style={{ color: "var(--sub)" }}>
          Hello <span style={{ color: "var(--pk2)" }}>∵</span> Mallo
        </div>
        <p className="text-[10px] tracking-[0.04em]" style={{ color: "var(--muted)" }}>
          © 2026 Hello ∵ Mallo. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
