import { SETTINGS_PREFIX } from "../constants";

export const getSettings = () =>
  JSON.stringify(
    Object.keys(localStorage)
      .filter((key) => key.includes(SETTINGS_PREFIX))
      .reduce((prev, current) => {
        const [, setting] = current.split(SETTINGS_PREFIX);
        return {
          [setting]: JSON.parse(localStorage.getItem(current)!),
          ...prev,
        };
      }, {}),
    null,
    2
  );

export const saveSettings = (settings: object) =>
  Object.entries(settings).forEach(([key, value]) => {
    localStorage.setItem(SETTINGS_PREFIX + key, JSON.stringify(value));
  });
