import type { Photo } from "../utils/data.ts";
import { getPhotoUrl } from "../utils/data.ts";

export interface PhotoItemProps {
  photo: Photo;
  index: number;
}

export function PhotoItem({ photo, index }: PhotoItemProps) {
  const thumbUrl = getPhotoUrl(photo, "thumb");
  const fullUrl = getPhotoUrl(photo, "full");

  return (
    <button
      type="button"
      class="photo-item group relative block w-full cursor-zoom-in overflow-hidden rounded-img
             bg-surface-inset border border-border hover:border-border-strong
             transition-all duration-200 focus-visible:outline-2 focus-visible:outline-accent
             focus-visible:outline-offset-2"
      data-photo-id={photo.id}
      data-photo-url={fullUrl}
      data-photo-alt={photo.alt}
      data-photo-caption={photo.caption}
      data-photo-index={index}
      aria-label={`View photo: ${photo.alt}`}
    >
      <img
        src={thumbUrl}
        alt={photo.alt}
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        width="600"
        height={Math.round(600 * photo.height / photo.width)}
      />
      {photo.caption && (
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <p class="text-xs text-white font-medium truncate">{photo.caption}</p>
        </div>
      )}
    </button>
  );
}
