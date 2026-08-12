import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import MasonryGrid from "../components/MasonryGrid";
import Lightbox from "../components/Lightbox";
import { artworks, categories } from "../data/artworks";
import "./Home.css";

// Mitu tööd iga teema kohta avalehe "teaser" brick-vaates.
const PER_CATEGORY = 3;

export default function Home() {
  const { t } = useTranslation();
  const byId = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.id, c])),
    []
  );

  // Võtame igast teemast esimesed N tööd ja põimime need "round robin" viisil,
  // et brick-laotus näeks orgaaniline välja (mitte teemade kaupa plokkidena).
  const teaser = useMemo(() => {
    const byCategory = categories.map((cat) =>
      artworks.filter((a) => a.category === cat.id).slice(0, PER_CATEGORY)
    );
    const max = Math.max(0, ...byCategory.map((arr) => arr.length));
    const mixed = [];
    for (let i = 0; i < max; i++) {
      byCategory.forEach((arr) => {
        if (arr[i]) mixed.push(arr[i]);
      });
    }
    return mixed;
  }, []);

  const [openIndex, setOpenIndex] = useState(null);
  const openArtwork = teaser[openIndex] ?? null;

  const goPrev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + teaser.length) % teaser.length));
  const goNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % teaser.length));

  return (
    <div className="home">
      <p className="eyebrow home__eyebrow">{t("home.eyebrow")}</p>
      <MasonryGrid artworks={teaser} categoriesById={byId} onOpen={setOpenIndex} />
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
