import { company } from "@/data/site";
import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = `${company.name} - Location d'engins lourds au Cameroun`;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "Accueil",
    title: "Location d'engins lourds",
    description:
      "Chargeuses, pelles et devis rapide pour les chantiers BTP, industriels et logistiques au Cameroun.",
  });
}
