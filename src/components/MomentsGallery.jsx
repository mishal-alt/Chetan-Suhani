import React, { useState } from 'react';
import { Hairline, Reveal } from './Reveal';

export function MomentsGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Uniform grid: every tile has the same shape so rows line up perfectly
  const photos = [
    { src: '/images/client/cute-smile.jpg?v=9', caption: 'Sweetest Smiles' },
    { src: '/images/client/embrace.jpg?v=9', caption: 'A Warm Embrace' },
    { src: '/images/client/string-lights.jpg?v=9', caption: 'Under the Fairy Lights' },
    { src: '/images/client/red-entrance.jpg?v=9', caption: 'Dressed to Celebrate' },
    { src: '/images/client/dinner-date.jpg?v=9', caption: 'Dinner &amp; Blooms', wide: true },
    { src: '/images/client/garden-selfie.jpg?v=9', caption: 'Garden Evenings', wide: true },
  ];

  return (
    <section className="relative py-12 px-6 bg-cream overflow-hidden">
      <div className="max-w-md mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-wider-luxe uppercase text-gold-foil mb-2 font-semibold">
            Cherished Memories
          </p>
          <h2 className="font-accent text-3xl sm:text-4xl text-foreground">
            Our Journey of Love
          </h2>
          <p className="mt-3 font-display italic text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-sm mx-auto">
            Glimpses of love, laughter, and beautiful memories on our way to forever.
          </p>
          <Hairline className="w-16 mx-auto my-7" />
        </Reveal>

        {/* Uniform 2-column gallery */}
        <div className="grid grid-cols-2 gap-3 text-left" style={{ marginTop: 24 }}>
          {photos.map((item, idx) => (
            <Reveal
              key={idx}
              delay={(idx % 2) * 80}
              className={item.wide ? 'col-span-2' : ''}
            >
              <div
                onClick={() => setSelectedPhoto(item.src)}
                className="hover-lift group relative overflow-hidden rounded-lg bg-card border border-gold/25 shadow-soft cursor-pointer"
                style={{ aspectRatio: item.wide ? '4 / 3' : '3 / 4' }}
              >
                <img
                  src={item.src}
                  alt="Suhani &amp; Chetan"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: 'center 30%' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                  <span className="text-[10px] tracking-luxe uppercase text-ivory font-semibold">
                    ✦ Tap to View ✦
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[120] bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-up"
        >
          <div className="relative max-w-md max-h-[85vh] overflow-hidden rounded-xl border border-gold/40 shadow-2xl bg-ivory p-2">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-ink/70 text-ivory flex items-center justify-center text-sm hover:bg-gold transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedPhoto}
              alt="Chetan &amp; Suhani"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
