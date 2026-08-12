import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import et from "./locales/et.json";
import en from "./locales/en.json";

const STORAGE_KEY = "marily-lang";

function getInitialLanguage() {
  if (typeof window === "undefined") return "et";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "et" || stored === "en") return stored;
  } catch {
    // localStorage unavailable (private browsing etc.) — fall back silently.
  }
  return "et";
}

i18n.use(initReactI18next).init({
  resources: {
    et: { translation: et },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: "et",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // ignore — persistence is a nice-to-have, not required.
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;