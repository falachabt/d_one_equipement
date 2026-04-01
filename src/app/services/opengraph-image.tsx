import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = "Services de location - D-ONE EQUIPMENT";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "Services",
    title: "Location et support terrain",
    description:
      "Location de chargeuses et pelles avec chauffeur, maintenance et accompagnement chantier.",
  });
}
