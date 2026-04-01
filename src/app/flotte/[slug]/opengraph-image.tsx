import { company, getFleetBySlug } from "@/data/site";
import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

type FleetImageProps = {
  params: Promise<{ slug: string }>;
};

export const alt = `${company.name} - fiche machine`;
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function Image({ params }: FleetImageProps) {
  const { slug } = await params;
  const item = getFleetBySlug(slug);

  return createSocialImage({
    eyebrow: item?.type ?? "Flotte",
    title: item?.name ?? company.name,
    description:
      item?.summary ??
      "Chargeuses et pelles presentees par modele avec informations utiles et demande de devis.",
    kicker: item ? `${item.capacity} · ${item.brand} · ${item.year}` : company.areas.slice(0, 3).join(" · "),
  });
}
