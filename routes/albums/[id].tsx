import type { PageProps } from "$fresh/server.ts";
import { SEOHead } from "../../components/SEOHead.tsx";
import { Nav } from "../../components/Nav.tsx";
import { PhotoGrid } from "../../components/PhotoGrid.tsx";
import { getAlbumWithPhotos } from "../../utils/data.ts";
import DarkModeToggle from "../../islands/DarkModeToggle.tsx";
import Lightbox from "../../islands/Lightbox.tsx";

export default function AlbumDetailPage({ params }: PageProps) {
  const id = params.id;
  const data = getAlbumWithPhotos(id);

  if (!data) {
    return (
      <>
        <SEOHead title="Album not found" />
        <Nav />
        <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 class="font-display text-display text-fg mb-4">Album not found</h1>
          <p class="text-fg-muted mb-8">The album you're looking for doesn't exist or has been removed.</p>
          <a href="/albums" class="btn-ghost text-accent">← Back to albums</a>
        </main>
      </>
    );
  }

  const { album, photos } = data;

  return (
    <>
      <SEOHead
        title={album.title}
        description={album.description}
      />
      <Nav current="albums" />

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav class="mb-8 flex items-center gap-2 text-sm text-fg-muted" aria-label="Breadcrumb">
          <a href="/albums" class="hover:text-accent transition-colors duration-150">Albums</a>
          <span aria-hidden="true">/</span>
          <span class="text-fg font-medium truncate">{album.title}</span>
        </nav>

        {/* Header */}
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
          <div class="max-w-2xl">
            <h1 class="font-display text-display text-fg mb-4">{album.title}</h1>
            <p class="text-fg-muted text-lg leading-relaxed">{album.description}</p>
          </div>
          <DarkModeToggle />
        </div>

        {/* Photo count */}
        <p class="text-sm text-fg-subtle mb-6 tabular-nums">
          {photos.length} photograph{photos.length !== 1 ? "s" : ""}
        </p>

        {/* Photo grid with lightbox data */}
        <div data-photo-list>
          <PhotoGrid photos={photos} />
        </div>
      </main>

      <footer class="border-t border-border py-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-fg-subtle">
          <p>Aster &copy; {new Date().getFullYear()} — A photographer's portfolio.</p>
        </div>
      </footer>

      <Lightbox />
    </>
  );
}
