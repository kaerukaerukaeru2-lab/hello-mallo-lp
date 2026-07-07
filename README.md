# Hello ∵ Mallo — 公式ランディングページ

大阪発ガールズアイドルグループ「Hello ∵ Mallo」の公式LP。  
Next.js (App Router) + Tailwind CSS v4 + Vercel 無料枠で運用。

---

## 🖼 画像の置き場所

`public/images/` に以下のファイルを置くだけで自動反映。

| ファイル名      | 用途                          |
| --------------- | ----------------------------- |
| `logo.png`      | ロゴ（透過PNG推奨）           |
| `group.jpg`     | ヒーロー集合写真              |
| `ogp.jpg`       | OGP画像（1200×630px）        |
| `maru.jpg`      | 月兎まる 個人写真             |
| `miimi.jpg`     | 苺乃みぃみ 個人写真           |
| `seira.jpg`     | 月島せいら 個人写真           |
| `rhythm.jpg`    | 白雪りずむ 個人写真           |
| `mimio.jpg`     | 秋風ミミ澪 個人写真           |
| `furiru.jpg`    | 東雲ふりる 個人写真           |

> 画像がない場合はメンバーカラーのグラデーション背景で表示。

---

## 🎵 音楽の置き場所

`public/audio/` に mp3 / m4a を置く（将来対応）。

---

## ✏️ データ変更

`lib/members.ts` を編集するだけ。  
メンバー名・SNS URL・カラー・自己紹介文が一元管理されている。

---

## 🚀 デプロイ

1. このリポジトリを GitHub にプッシュ
2. Vercel で「New Project」→ リポジトリを選択
3. Framework: **Next.js**（自動検出）
4. デプロイ → 完了

その後 `app/layout.tsx` の `SITE_URL` を実際の Vercel URL に変更して再プッシュ。

---

## ⚠️ 確認事項

- 白雪りずむの TikTok URL が月島せいらと同じ `@mallo_seira` になっている。  
  正しい URL が判明したら `lib/members.ts` の id:4 を修正すること。
