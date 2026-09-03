import { SEOHead } from "../../components/SEOHead.tsx";
import { Nav } from "../../components/Nav.tsx";
import { AlbumCard } from "../../components/AlbumCard.tsx";
import { getAlbums, getAlbumWithPhotos } from "../../utils/data.ts";
import DarkModeToggle from "../../islands/DarkModeToggle.tsx";

export default function AlbumsPage() {
  const albums = getAlbums();
  const albumsWithCovers = albums.map((a) => {
    const full = getAlbumWithPhotos(a.id);
    return { album: a, coverPhoto: full?.photos[0] };
  });

  return (
    <>
      <SEOHead title="Albums" description="Browse the complete collection of photography albums." />
      <Nav current="albums" />

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="flex items-center justify-between mb-4">
          <h1 class="font-display text-display text-fg">Albums</h1>
          <DarkModeToggle />
        </div>
        <p class="text-fg-muted text-lg mb-12 max-w-xl leading-relaxed">
          Each album is a self-contained narrative — a study of place, person, or phenomenon told through sequenced imagery.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albumsWithCovers.map(({ album, coverPhoto }) => (
            <AlbumCard key={album.id} album={album} coverPhoto={coverPhoto} />
          ))}
        </div>
      </main>

      <footer class="border-t border-border py-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-fg-subtle">
          <p>Aster &copy; {new Date().getFullYear()} — A photographer's portfolio.</p>
        </div>
      </footer>
    </>
  );
}
