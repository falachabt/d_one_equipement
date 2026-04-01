"use client";

import Image from "next/image";
import { useState } from "react";

type EquipmentGalleryProps = {
  images: string[];
  alt: string;
};

export function EquipmentGallery({ images, alt }: EquipmentGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="line-card p-0">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--line)] bg-[#e8e0cf]">
        <Image
          src={activeImage}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="grid grid-cols-3 gap-3 p-4">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveImage(image)}
            title={`${alt} visuel ${index + 1}`}
            className={`relative aspect-[4/3] overflow-hidden border ${
              activeImage === image ? "border-[var(--surface-ink)]" : "border-[var(--line)]"
            }`}
          >
            <Image
              src={image}
              alt={`${alt} visuel ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 33vw, 12vw"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
