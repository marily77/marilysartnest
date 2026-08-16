import { useTranslation } from "react-i18next";
import useReveal from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  const scopeRef = useReveal();
  const facts = t("about.facts", { returnObjects: true });
  const sections = t("about.sections", { returnObjects: true });

  return (
    <div className="container section" ref={scopeRef}>
      <div className="about__hero">
        <img
          src="/public/pildid/marily.jpg"
          alt={t("about.photoAlt")}
          className="about__photo"
          data-reveal
        />
        <div className="about__intro">
          <p className="eyebrow" data-reveal>
            {t("about.eyebrow")}
          </p>
          <h1 className="about__title" data-reveal>
            {t("about.title")}
          </h1>
          <p className="about__lede" data-reveal>
            {t("about.lede")}
          </p>
        </div>
      </div>

      <dl className="about__facts" data-reveal>
        {facts.map((f, i) => (
          <div key={i} className="about__fact">
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>

      <div className="about__cv">
        {sections.map((section, si) => (
          <section key={si} className="cv__section" data-reveal>
            <h2 className="cv__heading">{section.title}</h2>
            <ol className="cv__list">
              {section.items.map((item, ii) => (
                <li key={ii} className="cv__item">
                  <span className="cv__year">{item.year}</span>
                  <span className="cv__text">
                    {item.text}
                    {item.link && (
                      <>
                        {" "}
                        <a
                          className="cv__link"
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.linkLabel}
                        </a>
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <div className="about__outro" data-reveal>
        <div className="about__outro-tilt">
          <p>
            {t("about.outro.text")}{" "}
            <a
              className="about__outro-link"
              href="https://www.marilydesign.com"
              target="_blank"
              rel="noreferrer"
            >
              {t("about.outro.linkLabel")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
