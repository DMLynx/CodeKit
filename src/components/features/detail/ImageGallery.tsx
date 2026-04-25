"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setSelectedImageIdx(idx);
  const closeLightbox = () => setSelectedImageIdx(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((selectedImageIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-[400px] md:h-[600px] mb-10">
        {/* Main Image */}
        <div 
          className="md:col-span-2 relative overflow-hidden rounded-l-2xl cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          <img 
            src={images[0]} 
            alt="Hotel Main" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
        
        {/* Small Images Grid */}
        <div className="md:col-span-2 grid grid-cols-2 gap-3">
          {images.slice(1, 5).map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden cursor-pointer group ${idx === 1 ? 'rounded-tr-2xl' : ''} ${idx === 3 ? 'rounded-br-2xl' : ''}`}
              onClick={() => openLightbox(idx + 1)}
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              {idx === 3 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/50 transition-all duration-300">
                  <span className="text-white font-medium text-sm md:text-base">+124 photos</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-[110]"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={prevImage}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={nextImage}
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center">
            <img 
              src={images[selectedImageIdx]} 
              alt={`Full size ${selectedImageIdx}`} 
              className="max-w-full max-h-[85vh] object-contain shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-white/80 font-medium text-lg">
              {selectedImageIdx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
