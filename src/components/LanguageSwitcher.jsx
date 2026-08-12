import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="lang-switch" role="group" aria-label="Language / Keel">
      <button
        type="button"
        className={"lang-switch__btn" + (lang === "et" ? " lang-switch__btn--active" : "")}
        onClick={() => i18n.changeLanguage("et")}
        aria-pressed={lang === "et"}
      >
        ET
      </button>
      <span className="lang-switch__sep">/</span>
      <button
        type="button"
        className={"lang-switch__btn" + (lang === "en" ? " lang-switch__btn--active" : "")}
        onClick={() => i18n.changeLanguage("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}