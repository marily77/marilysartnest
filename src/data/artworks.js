// Kategooriad — üldine teema, materjal ja aktsendivärv.
export const categories = [
  {
    id: "loomad",
    label: "Loomad",
    labelEn: "Animals",
    accent: "var(--cat-1)",
    medium: "Akrüül lõuendil",
  },
  {
    id: "linnud",
    label: "Linnud",
    labelEn: "Birds",
    accent: "var(--cat-2)",
    medium: "Õli lõuendil",
  },
  {
    id: "illustratsioonid",
    label: "Illustratsioonid",
    labelEn: "Illustrations",
    accent: "var(--cat-3)",
    medium: "Akvarell paberil",
  },
  {
    id: "abstraktne",
    label: "Abstraktne",
    labelEn: "Abstract",
    accent: "var(--cat-4)",
    medium: "Segatehnika",
  },
  {
    id: "segatehnika",
    label: "Segatehnika",
    labelEn: "Mixed media",
    accent: "var(--cat-5)",
    medium: "Kollaaž ja akrüül",
  },
];

// Iga teos eraldi. "img: null" = placeholder (näidatakse kategooria nime).
// Kui pilt on olemas public/pildid/ kaustas, pane tee kujul "/pildid/failinimi.jpg"
// (kaldkriips ees, sest fail on public kaustas — Vite teenindab seda juurest).
export const artworks = [
  // Loomad
  { id: "loomad-1", title: "Rebane", category: "loomad", medium: "Akvarell paberil", year: 2023, img: "/pildid/lavenderwebi.jpg" },
  { id: "loomad-2", title: "Panda", category: "loomad", medium: "Akvarell paberil", year: 2024, img: "/pildid/pppandafullwebi.jpg" },
  { id: "loomad-3", title: "Kaelkirjakud", category: "loomad", medium: "Akvarell paberil", year: 2025, img: "/pildid/kirjakud.jpg" },
   { id: "loomad-3", title: "Kavalpea", category: "loomad", medium: "Akvarell paberil", year: 2025, img: "/pildid/reba.jpg" },
  // Linnud
  { id: "loodus-1", title: "Loorkakk", category: "linnud", medium: "Akvarell paberil", year: 2023, img: "/pildid/kulllwebi.jpg" },
  { id: "loodus-2", title: "Kassikakk", category: "linnud", medium: "Akvarell paberil", year: 2024, img: "/pildid/ooooookullwebi.jpg" },
  { id: "loodus-3", title: "Paabulind", category: "linnud", medium: "Segatehnika", year: 2025, img: "/pildid/paabu.jpg" },

  // Illustratsioonid
  { id: "illustratsioonid-1", title: "Steampunk lõvi", category: "illustratsioonid", medium: "Akvarell paberil", year: 2023, img: "/pildid/puklion.jpg" },
  { id: "illustratsioonid-2", title: "Steampunk lõvi", category: "illustratsioonid", medium: "Akvarell paberil", year: 2024, img: "/pildid/puklion.jpg" },
  { id: "illustratsioonid-3", title: "Pealkiri 3.3", category: "illustratsioonid", medium: "Akvarell paberil", year: 2025, img: null },

  // Abstraktne
  { id: "abstraktne-1", title: "Õun", category: "abstraktne", medium: "Segatehnika", year: 2024, img: "/pildid/oun.jpg" },
  { id: "abstraktne-2", title: "Pealkiri 4.2", category: "abstraktne", medium: "Segatehnika", year: 2024, img: null },
  { id: "abstraktne-3", title: "Pealkiri 4.3", category: "abstraktne", medium: "Segatehnika", year: 2025, img: null },

  // Segatehnika
  { id: "segatehnika-1", title: "Pealkiri 5.1", category: "segatehnika", medium: "Kollaaž ja akrüül", year: 2023, img: null },
  { id: "segatehnika-2", title: "Pealkiri 5.2", category: "segatehnika", medium: "Kollaaž ja akrüül", year: 2024, img: null },
  { id: "segatehnika-3", title: "Pealkiri 5.3", category: "segatehnika", medium: "Kollaaž ja akrüül", year: 2025, img: null },
];

export const featured = artworks.filter((_, i) => i % 4 === 0).slice(0, 4);