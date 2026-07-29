import { useEffect, useMemo, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import MasonryGrid from "../components/MasonryGrid";
import Lightbox from "../components/Lightbox";
import { artworks, categories } from "../data/artworks";
import "./Gallery.css";

// Iga teema (Loomad, Linnud, Illustratsioonid, Segatehnika, Abstraktne) kasutab
// sama komponenti — URL "/loomad", "/linnud" jne, vastavalt sidebar'i linkidele.
export default function Gallery() {
  const { themeId } = useParams();
  const byId = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.id, c])),
    []
  );
  const cat = byId[themeId];
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(
    () => artworks.filter((a) => a.category === themeId),
    [themeId]
  );

  useEffect(() => {
    setOpenIndex(null);
  }, [themeId]);

  if (!cat) return <Navigate to="/" replace />;

  const openArtwork = filtered[openIndex] ?? null;

  const goPrev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const goNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <div className="gallery">
      <p className="eyebrow gallery__eyebrow" style={{ "--card-accent": cat.accent }}>
        <span className="gallery__dot" />
        {cat.label}
      </p>
      <MasonryGrid artworks={filtered} categoriesById={byId} onOpen={setOpenIndex} />
      <Lightbox
        artwork={openArtwork}
        categoryMeta={openArtwork ? byId[openArtwork.category] : null}
        onClose={() => setOpenIndex(null)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </div>
  );
}