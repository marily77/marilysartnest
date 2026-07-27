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
  { id: "loomad-4", title: "Kavalpea", category: "loomad", medium: "Akvarell paberil", year: 2025, img: "/pildid/reba.jpg" },
  { id: "loomad-5", title: "Elevant", category: "loomad", medium: "Segatehnika", year: 2025, img: "/pildid/elevant.jpg" },
  { id: "loomad-5", title: "Pruun lehm", category: "loomad", medium: "Akrüül lõuendil", year: 2025, img: "/pildid/pruunlehm.jpg" },
  { id: "loomad-5", title: "Highland cow", category: "loomad", medium: "Akrüül lõuendil", year: 2025, img: "/pildid/pull.jpg" },
  
  // Linnud
  { id: "loodus-1", title: "Loorkakk", category: "linnud", medium: "Akvarell paberil", year: 2023, img: "/pildid/kulllwebi.jpg" },
  { id: "loodus-2", title: "Kassikakk", category: "linnud", medium: "Akvarell paberil", year: 2024, img: "/pildid/ooooookullwebi.jpg" },
  { id: "loodus-3", title: "Paabulind", category: "linnud", medium: "Segatehnika", year: 2025, img: "/pildid/paabu.jpg" },
  { id: "loodus-4", title: "Papagoid", category: "linnud", medium: "Akrüül lõuendil", year: 2023, img: "/pildid/papad2.jpg" },
  { id: "loodus-5", title: "Papagoi paarike", category: "linnud", medium: "Segatehnika", year: 2024, img: "/pildid/papad1.jpg" },
  { id: "loodus-6", title: "Jaanalinnud", category: "linnud", medium: "Segatehnika", year: 2025, img: "/pildid/linnudjaan.jpg" },
  { id: "loodus-7", title: "Haigrud", category: "linnud", medium: "Akvarell paberil", year: 2023, img: "/pildid/linnudhaigrud.jpg" },
  { id: "loodus-8", title: "Autumn owl", category: "linnud", medium: "Akvarell paberil", year: 2026, img: "pildid/okuloranz.jpg" },
  { id: "loodus-10", title: "Lipsuga kajakas", category: "linnud", medium: "Segatehnika", year: 2025, img: "pildid/kajak1.jpg" },
  
  // Illustratsioonid
  { id: "illustratsioonid-1", title: "Steampunk lõvi", category: "illustratsioonid", medium: "Akvarell paberil", year: 2023, img: "/pildid/puklion.jpg" },
  { id: "illustratsioonid-2", title: "Jäneste ying-yang", category: "illustratsioonid", medium: "Akrüül lõuendil", year: 2024, img: "/pildid/illo2.jpg" },
  { id: "illustratsioonid-3", title: "Uudishimulik", category: "illustratsioonid", medium: "Akrüül lõuendil", year: 2025, img: "/pildid/illo1.jpg" },
  { id: "illustratsioonid-4", title: "Unine öökull", category: "illustratsioonid", medium: "Akrüül lõuendil", year: 2024, img: "/pildid/illo4.jpg" },
  { id: "illustratsioonid-5", title: "Tüütu linnuke", category: "illustratsioonid", medium: "Akrüül lõuendil", year: 2025, img: "/pildid/illo5.jpg" },
  { id: "illustratsioonid-6", title: "Huginn", category: "illustratsioonid", medium: "Akrüül lõuendil", year: 2024, img: "/pildid/hugin.jpg" },
  { id: "illustratsioonid-7", title: "Muninn", category: "illustratsioonid", medium: "Akrüül lõuendil", year: 2025, img: "/pildid/munin.jpg" },
  { id: "illustratsioonid-8", title: "Suur Tõll", category: "illustratsioonid", medium: "Akrüül lõuendil", year: 2025, img: "/pildid/illo7.jpg" },
 
  // Abstraktne
  { id: "abstraktne-1", title: "Õun", category: "abstraktne", medium: "Segatehnika", year: 2024, img: "/pildid/oun.jpg" },
  { id: "abstraktne-2", title: "Abstract 1", category: "abstraktne", medium: "Segatehnika", year: 2024, img: "/pildid/abstr1.jpg" },
  { id: "abstraktne-3", title: "Abstract 2", category: "abstraktne", medium: "Segatehnika", year: 2025, img: "/pildid/absr2.jpg" },
  { id: "abstraktne-4", title: "Abstract 3", category: "abstraktne", medium: "Segatehnika", year: 2024, img: "/pildid/abstr3.jpg" },
  { id: "abstraktne-5", title: "Abstract 4", category: "abstraktne", medium: "Segatehnika", year: 2025, img: "/pildid/absr4.jpg" },
  { id: "abstraktne-5", title: "Abstract 5", category: "abstraktne", medium: "Segatehnika", year: 2025, img: "/pildid/abstra6.jpg" },
  

  // Segatehnika
  { id: "segatehnika-1", title: "Pealkiri 5.1", category: "segatehnika", medium: "Kollaaž ja akrüül", year: 2023, img: null },
  { id: "segatehnika-2", title: "Pealkiri 5.2", category: "segatehnika", medium: "Kollaaž ja akrüül", year: 2024, img: null },
  { id: "segatehnika-3", title: "Pealkiri 5.3", category: "segatehnika", medium: "Kollaaž ja akrüül", year: 2025, img: null },
];

export const featured = artworks.filter((_, i) => i % 4 === 0).slice(0, 4);