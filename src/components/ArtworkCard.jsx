import "./ArtworkCard.css";

export default function ArtworkCard({ artwork, categoryMeta, onOpen }) {
  return (
    <button
      className="card"
      style={{ "--card-accent": categoryMeta.accent }}
      onClick={() => onOpen?.(artwork)}
    >
      <span className="card__frame">
        {artwork.img ? (
          <img src={artwork.img} alt={artwork.title} loading="lazy" />
        ) : (
          <span className="card__placeholder">{categoryMeta.label}</span>
        )}
        <span className="card__overlay">
          <span className="card__title">{artwork.title}</span>
        </span>
      </span>
    </button>
  );
}
