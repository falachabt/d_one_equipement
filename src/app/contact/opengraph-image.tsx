import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = "Contact et devis - D-ONE EQUIPMENT";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "Contact",
    title: "Contact commercial et devis",
    description:
      "Coordonnees, WhatsApp et formulaire pour demander rapidement un devis machine.",
  });
}
