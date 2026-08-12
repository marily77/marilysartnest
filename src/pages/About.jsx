import { useTranslation } from "react-i18next";
import useReveal from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  const scopeRef = useReveal();
  const milestones = t("about.milestones", { returnObjects: true });

  return (
    <div className="container section" ref={scopeRef}>
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

      <div className="about__grid">
        <div className="about__block" data-reveal>
          <h3>{t("about.blocks.art.title")}</h3>
          <p>{t("about.blocks.art.text")}</p>
        </div>
        <div className="about__block" data-reveal>
          <h3>{t("about.blocks.floristry.title")}</h3>
          <p>{t("about.blocks.floristry.text")}</p>
        </div>
        <div className="about__block" data-reveal>
          <h3>{t("about.blocks.hairdressing.title")}</h3>
          <p>{t("about.blocks.hairdressing.text")}</p>
        </div>
      </div>

      <div className="about__timeline" data-reveal>
        <p className="eyebrow">{t("about.timelineEyebrow")}</p>
        <ol className="timeline">
          {milestones.map((m, i) => (
            <li key={i} className="timeline__item">
              <span className="timeline__year">{m.year}</span>
              <span className="timeline__text">{m.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
