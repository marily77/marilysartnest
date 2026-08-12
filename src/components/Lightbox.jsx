import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Lightbox.css";

export default function Lightbox({ artwork, categoryMeta, onClose, onPrev, onNext }) {
  const { t, i18n } = useTranslation();
  const [zoomed, setZoomed] = useState(false);
  const isEn = i18n.language === "en";

  useEffect(() => {
    if (!artwork) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [artwork, onClose, onPrev, onNext]);

  useEffect(() => {
    setZoomed(false);
  }, [artwork]);

  if (!artwork) return null;

  const title = (isEn && artwork.titleEn) || artwork.title;
  const catLabel = (isEn && categoryMeta.labelEn) || categoryMeta.label;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label={t("lightbox.close")}>
          ×
        </button>

        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev?.();
          }}
          aria-label={t("lightbox.prev")}
        >
          ‹
        </button>
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
          aria-label={t("lightbox.next")}
        >
          ›
        </button>

        <div
          className={"lightbox__image" + (zoomed ? " lightbox__image--zoomed" : "")}
          style={{ "--card-accent": categoryMeta.accent }}
          onClick={() => setZoomed((z) => !z)}
        >
          {artwork.img ? (
            <img src={artwork.img} alt={title} />
          ) : (
            <span className="lightbox__placeholder">{catLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
}
