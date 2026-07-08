# Hello ∵ Mallo 公式LP

vanilla HTML/CSS/JS 単一ファイル版（index.html 1枚で完結）。
Next.js版から機能・デザインをそのまま移植。GitHub Pages / Vercel どちらでもそのまま公開可能。

## 画像の置き場所

`images/` フォルダに以下を置くだけで自動反映（無くてもメンバーカラーのグラデーションで表示される）。

| ファイル名   | 用途                   |
| ------------ | ---------------------- |
| logo.png     | ロゴ（透過PNG推奨）    |
| group.jpg    | ヒーロー集合写真       |
| ogp.jpg      | OGP画像（1200×630px）  |
| maru.jpg     | 月兎まる 個人写真      |
| miimi.jpg    | 苺乃みぃみ 個人写真    |
| seira.jpg    | 月島せいら 個人写真    |
| rhythm.jpg   | 白雪りずむ 個人写真    |
| mimio.jpg    | 秋風ミミ澪 個人写真    |
| furiru.jpg   | 東雲ふりる 個人写真    |

## 音声の置き場所

`audio/` フォルダに mp3 / m4a を置く（将来対応、現状HTMLからは未参照）。

## データ変更

`index.html` 内の `<script>` 内、`MEMBERS` 配列を直接編集するだけ（1ファイル完結のため）。

## 確認事項（Next.js版から引き継ぎ）

- 白雪りずむの TikTok URL が月島せいらと同じ `@mallo_seira` になっている。
  正しいURLが判明したら `index.html` 内 `MEMBERS` の id:4 の `sns.tiktok` を修正すること。

## 公開方法

- **GitHub Pages**: このフォルダをリポジトリにpushしてPages有効化するだけ。
- **Vercel**: リポジトリを選択 → Framework: Other / static → デプロイ。ビルド不要。
