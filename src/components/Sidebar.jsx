import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { categories } from "../data/artworks";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Sidebar.css";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/marilysartnest",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/marilysartnest",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M15 8.5h2V5.2c-.35-.05-1.55-.2-2.96-.2-2.93 0-4.94 1.79-4.94 5.08V13H6.3v3.7h2.8V22h3.7v-5.3h2.8l.44-3.7h-3.24v-2.5c0-1.07.29-1.8 1.8-1.8Z" />
      </svg>
    ),
  },
  {
    labelKey: "footer.email",
    href: "mailto:marily77@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 6.5 8 6 8-6" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();
  const close = () => setOpen(false);
  const isEn = i18n.language === "en";

  return (
    <>
      <button
        className="sidebar__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Sulge menüü" : "Ava menüü"}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <aside className={"sidebar" + (open ? " sidebar--open" : "")}>
        <NavLink to="/" className="sidebar__brand" onClick={close}>
          <img
            src="/public/marilygif.gif"
            alt="Marily's Art Nest"
            className="sidebar__logo"
          />
        </NavLink>

        <nav className="sidebar__nav">
          {categories.map((cat) => (
            <NavLink
              key={cat.id}
              to={`/${cat.id}`}
              onClick={close}
              className={({ isActive }) =>
                "sidebar__link" + (isActive ? " sidebar__link--active" : "")
              }
              style={{ "--card-accent": cat.accent }}
            >
              <span className="sidebar__dot" />
              {isEn ? cat.labelEn : cat.label}
            </NavLink>
          ))}

          <div className="sidebar__divider" />

          <NavLink
            to="/about"
            onClick={close}
            className={({ isActive }) =>
              "sidebar__link" + (isActive ? " sidebar__link--active" : "")
            }
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/contact"
            onClick={close}
            className={({ isActive }) =>
              "sidebar__link" + (isActive ? " sidebar__link--active" : "")
            }
          >
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div className="sidebar__socials">
          {socials.map((s) => (
            <a
              key={s.labelKey ?? s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.labelKey ? t(s.labelKey) : s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="sidebar__bottom-row">
          <p className="sidebar__copy">&copy; {year} Marily</p>
          <LanguageSwitcher />
        </div>
      </aside>

      {open && <div className="sidebar__scrim" onClick={close} />}
    </>
  );
}