import { useEffect, useState } from "react";
import "./Lightbox.css";

export default function Lightbox({ artwork, categoryMeta, onClose, onPrev, onNext }) {
  const [zoomed, setZoomed] = useState(false);

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

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Sulge">
          ×
        </button>

        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => {
            e.stopPropagation();
            onPrev?.();
          }}
          aria-label="Eelmine pilt"
        >
          ‹
        </button>
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
          aria-label="Järgmine pilt"
        >
          ›
        </button>

        <div
          className={"lightbox__image" + (zoomed ? " lightbox__image--zoomed" : "")}
          style={{ "--card-accent": categoryMeta.accent }}
          onClick={() => setZoomed((z) => !z)}
        >
          {artwork.img ? (
            <img src={artwork.img} alt={artwork.title} />
          ) : (
            <span className="lightbox__placeholder">{categoryMeta.label}</span>
          )}
        </div>
      </div>
    </div>
  );
}
