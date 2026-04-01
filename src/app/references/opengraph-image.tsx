import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = "References terrain - D-ONE EQUIPMENT";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "References",
    title: "Ancrage terrain au Cameroun",
    description:
      "Douala, Kribi et Yaounde : zones d'intervention, environnements chantier et references terrain.",
  });
}
