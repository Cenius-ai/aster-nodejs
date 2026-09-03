import albumsData from "../data/albums.json" with { type: "json" };
import photosData from "../data/photos.json" with { type: "json" };

export interface Album {
  id: string;
  title: string;
  description: string;
  cover: string;
}

export interface Photo {
  id: string;
  albumId: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export function getAlbums(): Album[] {
  return albumsData as Album[];
}

export function getAlbumById(id: string): Album | undefined {
  return (albumsData as Album[]).find((a) => a.id === id);
}

export function getAlbumWithPhotos(id: string): { album: Album; photos: Photo[] } | undefined {
  const album = getAlbumById(id);
  if (!album) return undefined;
  const photos = (photosData as Photo[]).filter((p) => p.albumId === id);
  return { album, photos };
}

export function getPhotoById(id: string): Photo | undefined {
  return (photosData as Photo[]).find((p) => p.id === id);
}

/** Generate a distinct inline SVG placeholder for a photo — never external, always on-palette. */
export function getPhotoUrl(photo: Photo, size?: "thumb" | "full"): string {
  const w = size === "thumb" ? 600 : photo.width;
  const h = size === "thumb" ? Math.round(600 * photo.height / photo.width) : photo.height;

  const seed = hashStr(photo.id);
  const hueBase = (seed % 360);
  const hue1 = hueBase;
  const hue2 = (hueBase + 40 + (seed % 60)) % 360;
  const sat = 55 + (seed % 35);
  const light = 38 + (seed % 22);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:hsl(${hue1},${sat}%,${light}%)"/>
      <stop offset="100%" style="stop-color:hsl(${hue2},${sat}%,${light + 12}%)"/>
    </linearGradient>
    <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:hsl(${(hue1 + 15) % 360},${sat - 10}%,${light + 20}%);stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:hsl(${hue2},${sat}%,${light - 8}%);stop-opacity:0.6"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g1)"/>
  <rect width="${w}" height="${h}" fill="url(#g2)"/>
  <circle cx="${w * 0.3}" cy="${h * 0.4}" r="${Math.min(w, h) * 0.22}" fill="hsla(${(hue2 + 30) % 360},40%,${light + 30}%,0.18)"/>
  <circle cx="${w * 0.72}" cy="${h * 0.65}" r="${Math.min(w, h) * 0.16}" fill="hsla(${(hue1 + 60) % 360},35%,${light + 25}%,0.14)"/>
</svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}
