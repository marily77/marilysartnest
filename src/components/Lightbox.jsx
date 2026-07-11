import { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ artwork, categoryMeta, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!artwork) return null;

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Sulge">
          ×
        </button>
        <div
          className="lightbox__image"
          style={{ "--card-accent": categoryMeta.accent }}
        >
          {artwork.img ? (
            <img src={artwork.img} alt={artwork.title} />
          ) : (
            <span className="lightbox__placeholder">{categoryMeta.label}</span>
          )}
        </div>
        <div className="lightbox__info">
          <h3>{artwork.title}</h3>
          <p className="eyebrow">
            {categoryMeta.label} · {artwork.medium} · {artwork.year}
          </p>
        </div>
      </div>
    </div>
  );
}
