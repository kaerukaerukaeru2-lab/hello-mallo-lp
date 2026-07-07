// カレンダー登録用ユーティリティ
// ライブラリ不使用・URL生成 + ICS直接生成

const EVENT = {
  title:    "Hello ∵ Mallo デビューワンマンLIVE",
  location: "大阪",
  detail:   "Hello ∵ Mallo（ハローマロー）デビューワンマンLIVE\nhttps://x.com/_HelloMallo",
  // 2026-09-12 開始・終了（終日イベントとして登録）
  startDate: "20260912",
  endDate:   "20260913", // 終日の場合、翌日を endDate にするのがICS仕様
  startDatetime: "20260912T000000", // datetime形式
  endDatetime:   "20260913T000000",
};

// Google Calendar URL
export function buildGoogleCalUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text:   EVENT.title,
    dates:  `${EVENT.startDate}/${EVENT.endDate}`,
    details: EVENT.detail,
    location: EVENT.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Outlook Web Calendar URL
export function buildOutlookCalUrl(): string {
  const params = new URLSearchParams({
    path:      "/calendar/action/compose",
    rru:       "addevent",
    subject:   EVENT.title,
    startdt:   "2026-09-12",
    enddt:     "2026-09-12",
    body:      EVENT.detail,
    location:  EVENT.location,
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

// ICS ファイル文字列生成（Apple Calendar / その他）
export function buildIcsContent(): string {
  const uid = `hello-mallo-debut-20260912@hellomallo`;
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Hello Mallo LP//JP",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}Z`,
    `DTSTART;VALUE=DATE:${EVENT.startDate}`,
    `DTEND;VALUE=DATE:${EVENT.endDate}`,
    `SUMMARY:${EVENT.title}`,
    `LOCATION:${EVENT.location}`,
    `DESCRIPTION:${EVENT.detail.replace(/\n/g, "\\n")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
