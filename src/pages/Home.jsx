import { Link } from "react-router-dom";
import PaintBloom from "../components/PaintBloom";
import ArtworkCard from "../components/ArtworkCard";
import { categories, featured } from "../data/artworks";
import useReveal from "../hooks/useReveal";
import "./Home.css";

export default function Home() {
  const scopeRef = useReveal();
  const byId = Object.fromEntries(categories.map((c) => [c.id, c]));

  return (
    <div ref={scopeRef}>
      <section className="hero">
        <PaintBloom />
        <div className="container hero__inner">
          <p className="eyebrow">Marily &middot; maalikunst</p>
          <h1 className="hero__title">
            Minu värviline, <em>maailm.</em>
          </h1>
          <p className="hero__lede">
            Igal teemal oma materjal, oma meeleolu, oma värvipõhi — kogutud
            siia ühte kodusesse pesasse.
          </p>
          <div className="hero__actions">
            <Link className="btn btn--primary" to="/gallery">
              Vaata galeriid
            </Link>
            <Link className="btn btn--ghost" to="/about">
              Minu lugu
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Esiletõstetud</p>
          <h2>Hiljutised tööd</h2>
        </div>
        <div className="grid grid--4">
          {featured.map((art) => (
            <ArtworkCard key={art.id} artwork={art} categoryMeta={byId[art.category]} />
          ))}
        </div>
      </section>

      <section className="container section categories">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Teemad</p>
          <h2>Iga teema räägib oma keeles</h2>
        </div>
        <div className="categories__row" data-reveal>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/gallery?theme=${cat.id}`}
              className="chip"
              style={{ "--card-accent": cat.accent }}
            >
              <span className="chip__dot" />
              {cat.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
