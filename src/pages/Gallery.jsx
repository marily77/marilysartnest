import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArtworkCard from "../components/ArtworkCard";
import Lightbox from "../components/Lightbox";
import { artworks, categories } from "../data/artworks";
import useReveal from "../hooks/useReveal";
import "./Gallery.css";

export default function Gallery() {
  const [params, setParams] = useSearchParams();
  const active = params.get("theme") || "all";
  const [open, setOpen] = useState(null);
  const scopeRef = useReveal([active]);

  const byId = Object.fromEntries(categories.map((c) => [c.id, c]));

  const filtered = useMemo(
    () => (active === "all" ? artworks : artworks.filter((a) => a.category === active)),
    [active]
  );

  useEffect(() => {
    window.scrollTo({ top: window.scrollY }); // no-op, keeps position on filter change
  }, [active]);

  const setTheme = (id) => {
    if (id === "all") setParams({});
    else setParams({ theme: id });
  };

  return (
    <div className="container section" ref={scopeRef}>
      <div className="section__head" data-reveal>
        <p className="eyebrow">Galerii</p>
        <h1 className="gallery__title">Tööd teemade kaupa</h1>
        <p className="gallery__lede">
          Iga teema kannab oma materjali ja meeleolu — vali, mida uurida.
        </p>
      </div>

      <div className="filters" data-reveal>
        <button
          className={"filters__btn" + (active === "all" ? " filters__btn--active" : "")}
          onClick={() => setTheme("all")}
        >
          Kõik
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={
              "filters__btn" + (active === cat.id ? " filters__btn--active" : "")
            }
            style={{ "--card-accent": cat.accent }}
            onClick={() => setTheme(cat.id)}
          >
            <span className="filters__dot" />
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid--3" key={active}>
        {filtered.map((art) => (
          <ArtworkCard
            key={art.id}
            artwork={art}
            categoryMeta={byId[art.category]}
            onOpen={setOpen}
          />
        ))}
      </div>

      <Lightbox
        artwork={open}
        categoryMeta={open ? byId[open.category] : null}
        onClose={() => setOpen(null)}
      />
    </div>
  );
}
