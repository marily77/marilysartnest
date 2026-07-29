import ArtworkCard from "./ArtworkCard";
import "./MasonryGrid.css";

export default function MasonryGrid({ artworks, categoriesById, onOpen }) {
  return (
    <div className="masonry">
      {artworks.map((art, i) => (
        <div className="masonry__item" key={art.id}>
          <ArtworkCard
            artwork={art}
            categoryMeta={categoriesById[art.category]}
            onOpen={() => onOpen(i)}
          />
        </div>
      ))}
    </div>
  );
}