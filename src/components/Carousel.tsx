import { useEffect, useState } from "react";

type CarouselProps = {
  images: string[];
  alt: string;
};

export default function Carousel({ images, alt }: CarouselProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null ? i : (i - 1 + images.length) % images.length,
        );
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="carousel">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className="carousel-thumb"
            onClick={() => setLightboxIndex(i)}
          >
            <img src={src} alt={`${alt} screenshot ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} screenshots`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
          >
            ✕
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) =>
                  i === null ? i : (i - 1 + images.length) % images.length,
                );
              }}
            >
              ‹
            </button>
          )}

          <img
            className="lightbox-image"
            src={images[lightboxIndex]}
            alt={`${alt} screenshot ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) =>
                  i === null ? i : (i + 1) % images.length,
                );
              }}
            >
              ›
            </button>
          )}

          {images.length > 1 && (
            <div className="lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
