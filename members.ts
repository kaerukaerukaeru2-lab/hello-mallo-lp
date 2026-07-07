export type Member = {
  id: number;
  name: string;       // 漢字
  nameEn: string;     // ローマ字
  yomi: string;       // ひらがな読み
  color: string;      // イメージカラー（hex）
  colorLight: string; // カード背景グラデーション用（明るめ）
  colorDark: string;  // テキスト用（暗め）
  bio: string;        // 自己紹介文
  image: string;      // public/images/ 以下のファイル名（例: maru.jpg）
  sns: {
    x: string;
    instagram: string;
    tiktok: string;
  };
};

export const MEMBERS: Member[] = [
  {
    id: 1,
    name: "月兎 まる",
    nameEn: "Tsukito Maru",
    yomi: "つきと まる",
    color: "#ef4444",
    colorLight: "#fecdd3",
    colorDark: "#991b1b",
    bio: "赤いリボンがトレードマークの、真面目で負けず嫌いなかぐや姫。まるの魅力をまるっと全部受け止めて、夜空の月まで一緒に連れていってあげるね。",
    image: "maru.jpg",
    sns: {
      x: "https://x.com/mallo_maru0",
      instagram: "https://www.instagram.com/mallo_maru0",
      tiktok: "https://www.tiktok.com/@mallo_maru",
    },
  },
  {
    id: 2,
    name: "苺乃 みぃみ",
    nameEn: "Ichino Miimi",
    yomi: "いちの みぃみ",
    color: "#ec4899",
    colorLight: "#fbcfe8",
    colorDark: "#9d174d",
    bio: "うさぎのようにぴょんぴょん跳ねるおんなのこ。ちょっぴり泣き虫だけど、可愛いだけじゃ終わらない。やわらかくて強い魅力でみんなをメロメロにしちゃいます。",
    image: "miimi.jpg",
    sns: {
      x: "https://x.com/mallo_miimi",
      instagram: "https://www.instagram.com/mallo_miimi",
      tiktok: "https://www.tiktok.com/@mallo_miimi",
    },
  },
  {
    id: 3,
    name: "月島 せいら",
    nameEn: "Tsukishima Seira",
    yomi: "つきしま せいら",
    color: "#f97316",
    colorLight: "#fed7aa",
    colorDark: "#9a3412",
    bio: "みんなに元気を届けるビタミン剤！「にゃ〜」と鳴いちゃう犬のように、褒めるとすぐ懐く寂しがり屋。目を離すと逃げちゃうのでしっかり見ていてね。",
    image: "seira.jpg",
    sns: {
      x: "https://x.com/mallo_seira",
      instagram: "https://www.instagram.com/mallo_seira",
      tiktok: "https://www.tiktok.com/@mallo_seira",
    },
  },
  {
    id: 4,
    name: "白雪 りずむ",
    nameEn: "Shirayuki Rhythm",
    yomi: "しらゆき りずむ",
    color: "#3b82f6",
    colorLight: "#bfdbfe",
    colorDark: "#1e40af",
    bio: "美味しいものをモグモグ食べることが大好きな、ふわふわ小動物系女子。ときどき慌てちゃうけれど、ステージではいつでも本気のリズムを刻み歌うよ。",
    image: "rhythm.jpg",
    sns: {
      x: "https://x.com/mallo_rhythm",
      instagram: "https://www.instagram.com/mallo_rhythm",
      tiktok: "https://www.tiktok.com/@mallo_rhythm",
    },
  },
  {
    id: 5,
    name: "秋風 ミミ澪",
    nameEn: "Akikaze Mimio",
    yomi: "あきかぜ みみお",
    color: "#eab308",
    colorLight: "#fef08a",
    colorDark: "#713f12",
    bio: "笑うとパッとまわりを照らす、太陽のようにハッピーなヒロイン。ハチャメチャに見えて実は努力家。目で追っているうちに、すぐお隣にいるかも……？",
    image: "mimio.jpg",
    sns: {
      x: "https://x.com/mallo_mimimio",
      instagram: "https://www.instagram.com/mallo_mimimio",
      tiktok: "https://www.tiktok.com/@mimimiodayo",
    },
  },
  {
    id: 6,
    name: "東雲 ふりる",
    nameEn: "Shinonome Furiru",
    yomi: "しののめ ふりる",
    color: "#10b981",
    colorLight: "#a7f3d0",
    colorDark: "#064e3b",
    bio: "夜明けの空のような、圧倒的な透明感をまとったおしとやかな存在。その美しいひと声で誰もが振り返る、甘く優しい「ふりるの魔法」にかかってね。",
    image: "furiru.jpg",
    sns: {
      x: "https://x.com/mallo_furiru",
      instagram: "https://www.instagram.com/mallo.furiru",
      tiktok: "https://www.tiktok.com/@mallo_furiru",
    },
  },
];

// グループSNS
export const GROUP_SNS = {
  x: "https://x.com/_HelloMallo",
  instagram: "https://www.instagram.com/_hellomallo",
  tiktok: "https://www.tiktok.com/@_hellomallo",
};

// デビュー日
export const DEBUT_DATE = "2026-09-12T00:00:00+09:00";
export const DEBUT_DISPLAY = "2026.9.12";
