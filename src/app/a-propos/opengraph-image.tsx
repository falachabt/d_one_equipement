import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = "A propos - D-ONE EQUIPMENT";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "A propos",
    title: "Organisation et execution terrain",
    description:
      "Une offre de location d'engins lourds structuree pour repondre vite et suivre le terrain.",
  });
}
