// Placeholder data — swap "img" with real file paths once artwork photos are ready.
// Each category has its own accent (--cat-N) used as a small identity mark on cards.

export const categories = [
  {
    id: "loomad",
    label: "Loomad",
    labelEn: "Animals",
    accent: "var(--cat-1)",
    medium: "Akrüül lõuendil",
  },
  {
    id: "loodus",
    label: "Loodus",
    labelEn: "Nature",
    accent: "var(--cat-2)",
    medium: "Õli lõuendil",
  },
  {
    id: "portreed",
    label: "Portreed",
    labelEn: "Portraits",
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

// Placeholder artworks — 3 per category so the grid + filters have something to show.
export const artworks = categories.flatMap((cat, ci) =>
  Array.from({ length: 3 }).map((_, i) => ({
    id: `${cat.id}-${i + 1}`,
    title: `Pealkiri ${ci + 1}.${i + 1}`,
    category: cat.id,
    medium: cat.medium,
    year: 2023 + ((ci + i) % 3),
    img: null, // placeholder — real image path goes here
  }))
);

export const featured = artworks.filter((_, i) => i % 4 === 0).slice(0, 4);
