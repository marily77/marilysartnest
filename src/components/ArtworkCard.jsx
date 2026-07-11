import "./ArtworkCard.css";

export default function ArtworkCard({ artwork, categoryMeta, onOpen }) {
  return (
    <button
      className="card"
      style={{ "--card-accent": categoryMeta.accent }}
      onClick={() => onOpen?.(artwork)}
      data-reveal
    >
      <span className="card__frame">
        {artwork.img ? (
          <img src={artwork.img} alt={artwork.title} />
        ) : (
          <span className="card__placeholder">{categoryMeta.label}</span>
        )}
      </span>
      <span className="card__meta">
        <span className="card__title">{artwork.title}</span>
        <span className="card__sub">
          {categoryMeta.label} · {artwork.medium} · {artwork.year}
        </span>
      </span>
    </button>
  );
}
