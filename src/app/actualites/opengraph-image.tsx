import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = "Actualites - D-ONE EQUIPMENT";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "Actualites",
    title: "Conseils chantier et flotte",
    description:
      "Contenus utiles autour du choix machine, du contexte chantier et de la location d'engins au Cameroun.",
  });
}
