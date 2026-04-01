import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = "Flotte d'engins - D-ONE EQUIPMENT";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "Flotte",
    title: "Chargeuses et pelles par modele",
    description:
      "Fiches detaillees, caracteristiques utiles et demande de devis pour les machines de la flotte.",
  });
}
