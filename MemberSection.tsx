"use client";

import { useRef, useEffect, useState } from "react";
import { MEMBERS } from "@/lib/members";
import MemberCard from "./MemberCard";

export default function MemberSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // IntersectionObserver：セクションが画面に入ったら画像ロード開始
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="members"
      ref={sectionRef}
      className="px-7 py-14"
      style={{ background: "var(--bg2)" }}
    >
      {/* ラベル */}
      <p
        className="mb-4 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.26em]"
        style={{ color: "var(--pk2)" }}
      >
        <span className="inline-block h-px w-4" style={{ background: "var(--pk2)" }} />
        Members
      </p>
      <h2
        className="mb-6 text-[22px] font-normal"
        style={{ color: "var(--text)" }}
      >
        6人のメンバー
      </h2>

      {visible && (
        <>
          {/* PC・Tablet：グリッド */}
          <div className="hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((m) => (
              <MemberCard key={m.id} member={m} />
            ))}
          </div>

          {/* スマホ：横スワイプカルーセル */}
          <div
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {MEMBERS.map((m) => (
              <div
                key={m.id}
                className="w-[72vw] flex-none snap-start"
              >
                <MemberCard member={m} />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
