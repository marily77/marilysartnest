import { useTranslation } from "react-i18next";
import "./ArtworkCard.css";

export default function ArtworkCard({ artwork, categoryMeta, onOpen }) {
  const { i18n } = useTranslation();
  const isEn = i18n.language === "en";
  const title = (isEn && artwork.titleEn) || artwork.title;
  const catLabel = (isEn && categoryMeta.labelEn) || categoryMeta.label;

  return (
    <button
      className="card"
      style={{ "--card-accent": categoryMeta.accent }}
      onClick={() => onOpen?.(artwork)}
    >
      <span className="card__frame">
        {artwork.img ? (
          <img src={artwork.img} alt={title} loading="lazy" />
        ) : (
          <span className="card__placeholder">{catLabel}</span>
        )}
        <span className="card__overlay">
          <span className="card__title">{title}</span>
        </span>
      </span>
    </button>
  );
}

