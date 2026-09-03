import { useState, useEffect, useCallback } from "preact/hooks";

interface LightboxPhoto {
  id: string;
  url: string;
  alt: string;
  caption: string;
}

export default function Lightbox() {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<LightboxPhoto[]>([]);
  const [index, setIndex] = useState(0);

  const current = photos[index] || null;

  const close = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % photos.length);
  }, [photos.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const openAt = useCallback((photoList: LightboxPhoto[], startIdx: number) => {
    setPhotos(photoList);
    setIndex(startIdx);
    setOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const handler = (e: Event) => {
      const btn = (e.target as HTMLElement).closest("[data-photo-id]") as HTMLElement | null;
      if (!btn) return;

      const container = btn.closest("[data-photo-list]") as HTMLElement | null;
      if (!container) return;

      const items = container.querySelectorAll("[data-photo-id]");
      const list: LightboxPhoto[] = [];
      let clickedIdx = 0;

      items.forEach((el, i) => {
        const item = el as HTMLElement;
        list.push({
          id: item.dataset.photoId || "",
          url: item.dataset.photoUrl || "",
          alt: item.dataset.photoAlt || "",
          caption: item.dataset.photoCaption || "",
        });
        if (item.dataset.photoId === btn.dataset.photoId) clickedIdx = i;
      });

      openAt(list, clickedIdx);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [openAt]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, goNext, goPrev]);

  if (!open || !current) return null;

  return (
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${current.alt}`}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
    >
      {/* Close */}
      <button
        type="button"
        onClick={close}
        class="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white/80
               hover:bg-white/20 hover:text-white transition-colors duration-150
               focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Counter */}
      <span class="absolute top-5 left-4 text-sm text-white/50 font-medium tabular-nums z-10">
        {index + 1} / {photos.length}
      </span>

      {/* Previous */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        class="absolute left-2 sm:left-4 z-10 rounded-full bg-white/10 p-2 sm:p-3 text-white/80
               hover:bg-white/20 hover:text-white transition-colors duration-150
               focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        aria-label="Previous photo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        class="absolute right-2 sm:right-4 z-10 rounded-full bg-white/10 p-2 sm:p-3 text-white/80
               hover:bg-white/20 hover:text-white transition-colors duration-150
               focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        aria-label="Next photo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Image */}
      <div class="flex max-h-[85vh] max-w-[90vw] flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={current.url}
          alt={current.alt}
          class="max-h-[75vh] max-w-full rounded-lg object-contain"
        />
        {current.caption && (
          <p class="mt-4 text-sm text-white/70 font-medium text-center max-w-lg">
            {current.caption}
          </p>
        )}
      </div>
    </div>
  );
}
