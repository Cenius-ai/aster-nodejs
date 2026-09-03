import { SEOHead } from "../components/SEOHead.tsx";
import { Nav } from "../components/Nav.tsx";
import { AlbumCard } from "../components/AlbumCard.tsx";
import { getAlbums, getAlbumWithPhotos } from "../utils/data.ts";
import DarkModeToggle from "../islands/DarkModeToggle.tsx";

export default function Home() {
  const albums = getAlbums();
  // Pre-load cover photos for each album
  const albumsWithCovers = albums.map((a) => {
    const full = getAlbumWithPhotos(a.id);
    return { album: a, coverPhoto: full?.photos[0] };
  });

  return (
    <>
      <SEOHead title="Portfolio" />
      <Nav current="home" />

      {/* Hero — full-bleed editorial */}
      <header class="relative overflow-hidden border-b border-border">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-medium tracking-widest uppercase text-fg-muted">
              Photography portfolio
            </span>
            <DarkModeToggle />
          </div>
          <h1 class="font-display text-display-lg sm:text-[5.5rem] sm:leading-[1.02] text-fg mb-6 max-w-4xl">
            Light carved&nbsp;into silence
          </h1>
          <p class="text-lg sm:text-xl text-fg-muted max-w-2xl leading-relaxed">
            A curated collection of urban landscapes, environmental portraits, and
            abstract light studies — each frame a conversation between geometry,
            emotion, and the ephemeral.
          </p>
        </div>
        {/* Decorative accent bar */}
        <div class="absolute bottom-0 left-0 right-0 h-1 bg-accent opacity-60" />
      </header>

      {/* Albums section */}
      <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="flex items-baseline justify-between mb-10">
          <h2 class="font-display text-display text-fg">Albums</h2>
          <a href="/albums" class="btn-ghost text-fg-muted text-sm">
            View all →
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albumsWithCovers.map(({ album, coverPhoto }) => (
            <AlbumCard key={album.id} album={album} coverPhoto={coverPhoto} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer class="border-t border-border py-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-fg-subtle">
          <p>Aster &copy; {new Date().getFullYear()} — A photographer's portfolio.</p>
        </div>
      </footer>
    </>
  );
}
