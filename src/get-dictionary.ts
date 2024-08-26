import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
};

export interface IDictionary {
  main: {
    header: {
      "about": string,
      "properties": string,
      "gallery": string,
      "amenities": string,
      "contactus": string,
      "aboutus": string,
      "callus": string
    };
  };
}

export type ILang = "en" | "fr" | "ar" | "es" | "de" | "it" | "cn";

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();