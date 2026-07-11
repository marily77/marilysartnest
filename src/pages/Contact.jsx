import { useState } from "react";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
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
        <p className="eyebrow">Kontakt</p>
        <h1 className="contact__title">Räägime värvidest</h1>
        <p className="contact__lede">
          Küsimused teoste, tellimuste või koostöö kohta — kirjuta julgelt.
        </p>
      </div>

      <div className="contact__grid">
        <form className="contact__form" onSubmit={handleSubmit} data-reveal>
          {sent ? (
            <p className="contact__success">
              Aitäh! Sõnum on saadetud — vastan esimesel võimalusel.
            </p>
          ) : (
            <>
              <label className="field">
                <span>Nimi</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field">
                <span>E-post</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field">
                <span>Sõnum</span>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button className="btn btn--primary" type="submit">
                Saada sõnum
              </button>
            </>
          )}
        </form>

        <div className="contact__aside" data-reveal>
          <div className="contact__card">
            <p className="eyebrow">Otse</p>
            <a href="mailto:hello@marilysartnest.com" className="contact__email">
              hello@marilysartnest.com
            </a>
          </div>
          <div className="contact__card">
            <p className="eyebrow">Jälgi</p>
            <div className="contact__socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
