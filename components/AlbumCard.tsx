import type { Album, Photo } from "../utils/data.ts";
import { getPhotoUrl } from "../utils/data.ts";

export interface AlbumCardProps {
  album: Album;
  coverPhoto?: Photo;
}

export function AlbumCard({ album, coverPhoto }: AlbumCardProps) {
  const coverUrl = coverPhoto
    ? getPhotoUrl(coverPhoto, "thumb")
    : null;

  return (
    <a
      href={`/albums/${album.id}`}
      class="group block rounded-card overflow-hidden border border-border bg-surface-elevated
             hover:border-border-strong transition-all duration-300
             focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      aria-label={`View album: ${album.title}`}
    >
      <div class="aspect-[4/3] overflow-hidden bg-surface-inset">
        {coverUrl && (
          <img
            src={coverUrl}
            alt={coverPhoto?.alt || album.title}
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            width="600"
            height="450"
          />
        )}
      </div>
      <div class="p-5 sm:p-6">
        <h3 class="font-display text-heading text-fg mb-2">{album.title}</h3>
        <p class="text-sm text-fg-muted leading-relaxed line-clamp-2">{album.description}</p>
      </div>
    </a>
  );
}
