export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const BASE_TITLE = "Aster — Photography Portfolio";
const BASE_DESCRIPTION =
  "A curated portfolio of urban landscapes, environmental portraits, and abstract light studies by a contemporary photographer.";
const BASE_URL = "https://aster.photo";

export function buildSEO(page?: SEOProps) {
  const title = page?.title ? `${page.title} — Aster` : BASE_TITLE;
  const description = page?.description || BASE_DESCRIPTION;
  const url = page?.url || BASE_URL;
  const image = page?.image || `${BASE_URL}/og-default.png`;

  return { title, description, url, image };
}
