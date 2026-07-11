import useReveal from "../hooks/useReveal";
import "./About.css";

const milestones = [
  {
    year: "London Art College",
    text: "Diplomid joonistamises ja maalimises ning laste raamatute illustreerimises.",
  },
  {
    year: "Näitus",
    text: "Pärnu Uue Kunsti Muuseum.",
  },
  {
    year: "Näitus",
    text: "Saaremaa Artclub.",
  },
  {
    year: "Rahvusvaheline",
    text: "Association of Animal Artists UK — näitused ja tunnustus.",
  },
  {
    year: "Praegu",
    text: "Loon uusi teoseid, osalen näitustel ja jagan töid galeriis siin.",
  },
];

export default function About() {
  const scopeRef = useReveal();

  return (
    <div className="container section" ref={scopeRef}>
      <div className="about__intro">
        <p className="eyebrow" data-reveal>
          Minu lugu
        </p>
        <h1 className="about__title" data-reveal>
          Kolm käsitööd, üks käsi.
        </h1>
        <p className="about__lede" data-reveal>
          Enne kui pintsel sai peamiseks tööriistaks, on samad käed lõiganud
          juukseid, seadnud lilli ja joonistanud aastaid — igaüks neist
          õpetas midagi värvist, vormist ja kärsitusest, mis lõpuks kunstis
          kokku said. Olen colorholic: värv on mulle keel, milles mõtlen.
        </p>
      </div>

      <div className="about__grid">
        <div className="about__block" data-reveal>
          <h3>Kunst</h3>
          <p>
            Maalin ja joonistan mitmes tehnikas — akrüül, õli, akvarell,
            segatehnika. Mind huvitavad tugevad, julged värvid ja teemad,
            mis ulatuvad loomadest portreedeni ja loodusest abstraktsuseni.
          </p>
        </div>
        <div className="about__block" data-reveal>
          <h3>Floristika</h3>
          <p>
            Üle kümne aasta floristina, praegu Öölill — töö lilledega on
            õpetanud kompositsiooni, hooajalisust ja värvi käsitsemist
            orgaanilisel moel.
          </p>
        </div>
        <div className="about__block" data-reveal>
          <h3>Juuksurindus</h3>
          <p>
            Sama pikk karjäär juuksurina õpetas täpsust, vormitunnetust ja
            inimesega töötamist — oskused, mis kanduvad üle igasse
            loomingulisse töösse.
          </p>
        </div>
      </div>

      <div className="about__timeline" data-reveal>
        <p className="eyebrow">Teekond</p>
        <ol className="timeline">
          {milestones.map((m, i) => (
            <li key={i} className="timeline__item">
              <span className="timeline__year">{m.year}</span>
              <span className="timeline__text">{m.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
