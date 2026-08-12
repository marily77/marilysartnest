import { useState } from "react";
import { useTranslation } from "react-i18next";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();
  const scopeRef = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — hook this up to an email service (e.g. Formspree, EmailJS) later.
    setSent(true);
  };

  return (
    <div className="container section" ref={scopeRef}>
      <div className="contact__head" data-reveal>
        <p className="eyebrow">{t("contact.eyebrow")}</p>
        <h1 className="contact__title">{t("contact.title")}</h1>
        <p className="contact__lede">{t("contact.lede")}</p>
      </div>

      <div className="contact__grid">
        <form className="contact__form" onSubmit={handleSubmit} data-reveal>
          {sent ? (
            <p className="contact__success">{t("contact.success")}</p>
          ) : (
            <>
              <label className="field">
                <span>{t("contact.name")}</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field">
                <span>{t("contact.email")}</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field">
                <span>{t("contact.message")}</span>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button className="btn btn--primary" type="submit">
                {t("contact.send")}
              </button>
            </>
          )}
        </form>

        <div className="contact__aside" data-reveal>
          <div className="contact__card">
            <p className="eyebrow">{t("contact.direct")}</p>
            <a href="mailto:marily77@gmail.com" className="contact__email">
              marily77@gmail.com
            </a>
          </div>
          <div className="contact__card">
            <p className="eyebrow">{t("contact.follow")}</p>
            <div className="contact__socials">
              <a href="https://instagram.com/marilysartnest" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://facebook.com/marilysartnest" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
