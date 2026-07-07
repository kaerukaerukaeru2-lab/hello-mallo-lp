import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hello-mallo-lp.vercel.app"; // ← デプロイ後に実URLに変更

export const metadata: Metadata = {
  title: "Hello ∵ Mallo（ハローマロー）| 大阪発ガールズアイドルグループ",
  description:
    "不完全で、まぶしくて、少しだけ泣きそうな女の子たち。マシュマロみたいにやわらかい心で、大阪から世界へ夢を届けるガールズアイドルグループ「Hello ∵ Mallo」公式ランディングページ。2026年9月12日デビューワンマンLIVE開催。",
  keywords: [
    "Hello Mallo",
    "ハローマロー",
    "大阪アイドル",
    "地下アイドル",
    "ガールズアイドル",
    "デビュー",
    "2026",
  ],
  openGraph: {
    title: "Hello ∵ Mallo（ハローマロー）",
    description:
      "やわらかいから強い。大阪発ガールズアイドルグループ 2026.9.12デビュー",
    url: SITE_URL,
    siteName: "Hello ∵ Mallo",
    images: [
      {
        url: `${SITE_URL}/images/ogp.jpg`, // ← OGP画像を public/images/ogp.jpg に置く
        width: 1200,
        height: 630,
        alt: "Hello ∵ Mallo",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_HelloMallo",
    title: "Hello ∵ Mallo（ハローマロー）",
    description:
      "やわらかいから強い。大阪発ガールズアイドルグループ 2026.9.12デビュー",
    images: [`${SITE_URL}/images/ogp.jpg`],
  },
  robots: { index: true, follow: true },
};

// 構造化データ（JSON-LD）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Hello ∵ Mallo",
  alternateName: "ハローマロー",
  description:
    "大阪発ガールズアイドルグループ。2026年9月12日デビューワンマンLIVE。",
  url: SITE_URL,
  sameAs: [
    "https://x.com/_HelloMallo",
    "https://www.instagram.com/_hellomallo",
    "https://www.tiktok.com/@_hellomallo",
  ],
  foundingLocation: { "@type": "Place", name: "大阪" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
