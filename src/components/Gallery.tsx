import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '@/config/images';
import { Reveal } from '@/hooks/useReveal';

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((v) => (v === null ? null : (v + GALLERY_IMAGES.length - 1) % GALLERY_IMAGES.length)),
    []
  );
  const next = useCallback(
    () => setActive((v) => (v === null ? null : (v + 1) % GALLERY_IMAGES.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, close, prev, next]);

  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="container-site">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Gallery</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            Learning Environment &amp; Gallery
          </h2>
          <p className="mt-4">
            A glimpse into our teaching world — one-to-one attention, clear explanations and a calm study environment.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 80}
              className={`group relative overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-100 ${
                i % 5 === 0 ? 'sm:row-span-2 sm:max-h-full' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open image: ${img.caption}`}
                className="block w-full cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-display text-sm font-bold text-white">{img.caption}</span>
                  <ZoomIn className="h-5 w-5 text-amber-400" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
            className="absolute left-3 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY_IMAGES[active].src}
              alt={GALLERY_IMAGES[active].alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center font-display text-sm font-semibold text-white">
              {GALLERY_IMAGES[active].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
            className="absolute right-3 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-8"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
