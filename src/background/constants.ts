export const EXT_MIME_MAPPINGS: Record<string, string> = {
  mp3: "audio/mpeg",
  pdf: "application/pdf",
  zip: "application/zip",
  png: "image/png",
  jpg: "image/jpeg",
  exe: "application/exe",
  avi: "video/x-msvideo",
  torrent: "application/x-bittorrent",
};

export type Matchers<T = string> = {
  mime?: T;
  referer?: T;
  url?: T;
  finalUrl?: T;
  filename?: T;
};

export type Rule = {
  matchers: Matchers;
  pattern: string;
  enabled: boolean;
  description?: string;
};

export const DEFAULT_RULES: Rule[] = [
  { matchers: { mime: "application/pdf" }, pattern: "pdfs/", enabled: true },
  {
    matchers: { mime: "application/x-bittorrent" },
    pattern: "torrents/",
    enabled: true,
  },
];
