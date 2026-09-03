import type { Photo } from "../utils/data.ts";
import { PhotoItem } from "./PhotoItem.tsx";

export interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  if (photos.length === 0) {
    return (
      <div class="flex flex-col items-center justify-center py-20 text-fg-muted">
        <p class="text-lg">No photos in this album yet.</p>
      </div>
    );
  }

  // Distribute photos into a masonry-like layout using columns
  const cols: Photo[][] = [[], [], []];
  photos.forEach((p, i) => {
    cols[i % 3].push(p);
  });

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {photos.map((photo, i) => (
        <PhotoItem key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  );
}
