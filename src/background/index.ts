import moment from "moment";

import { EXT_MIME_MAPPINGS, DEFAULT_RULES, Rule, Matchers } from "./constants";

export const entries = Object.entries as <T>(
  o: T
) => [Extract<keyof T, string>, T[keyof T]][];

export const withoutNullable = <K, V>(
  entry: [K, V]
): entry is [K, NonNullable<V>] => entry[0] !== undefined;

chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  const rules = JSON.parse(
    localStorage.getItem("settings#downloads.rules")!
  ) as Rule[];

  let item = {
    mime: downloadItem.mime,
    referer: decodeURI(downloadItem.referrer),
    url: decodeURI(downloadItem.url),
    finalUrl: decodeURI(downloadItem.finalUrl),
    filename: downloadItem.filename
      .replace(/[^a-z0-9\.]/gi, "-")
      .replace(/-{2}/gi, "-")
      .replace(/-\./, ".")
      .toLowerCase(),
    startTime: new Date(downloadItem.startTime),
  };

  if (item.mime === "application/octet-stream") {
    const [, extension] =
      item.filename.match(/\.([0-9a-z]+)(?:[\?#]|$)/i) || [];

    item.mime = EXT_MIME_MAPPINGS[extension] || item.mime;
  }

  const substitutions = entries(item).reduce(
    (prev, [key, value]) => ({
      [key]: [value],
      ...prev,
    }),
    {} as Required<Matchers<string[]>>
  );

  let filename = item.filename;

  rules.every((rule) => {
    if (!rule.enabled) {
      return true;
    }

    const success = entries(rule.matchers)
      .filter(withoutNullable)
      .every(([field, pattern]) => {
        const matches = new RegExp(pattern, "i").exec(item[field]);
        if (!matches) {
          return false;
        }

        substitutions[field]?.concat(matches.slice(1));
        return true;
      });

    if (!success) {
      return true;
    }

    let result = true;
    filename = rule.pattern.replace(
      /\$\{(\w+)(?::(.+?))?\}/g,
      (orig, field: keyof Matchers | "date", args: string = "0") => {
        if (field === "date") {
          return args
            ? moment(item.startTime).format(args as string)
            : moment(item.startTime).format("DD-MM-YYYY");
        }

        if (!substitutions[field]) {
          result = false;
          return orig;
        }

        if (!substitutions[field][+args]) {
          result = false;
          return orig;
        }

        return substitutions[field][+args];
      }
    );

    if (/\/$/.test(filename)) {
      filename = filename + substitutions.filename[0];
    }

    filename = filename.replace(/^\/+/, "");

    return !result;
  });

  suggest({
    filename: filename,
    conflictAction: "uniquify",
  });
});

if (localStorage.getItem("settings#downloads.rules") === null) {
  localStorage.setItem(
    "settings#downloads.rules",
    JSON.stringify(DEFAULT_RULES)
  );
}

const currentVersion = localStorage.getItem("version");
const { version } = chrome.runtime.getManifest();

if (!currentVersion || currentVersion != version) {
  localStorage.setItem("version", version);
  chrome.tabs.create({ url: "options/index.html" });
}

chrome.browserAction.onClicked.addListener((tab) => {
  if (tab.id) {
    chrome.tabs.executeScript(tab.id, { file: "background/bookmarklet.js" });
  }
});
