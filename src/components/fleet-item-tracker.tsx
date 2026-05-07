"use client";

import { useEffect } from "react";
import Link from "next/link";
import posthog from "posthog-js";

type FleetItemTrackerProps = {
  name: string;
  equipmentType: string;
  brand: string;
};

export function FleetItemTracker({ name, equipmentType, brand }: FleetItemTrackerProps) {
  useEffect(() => {
    posthog.capture("fleet_item_viewed", {
      equipment_name: name,
      equipment_type: equipmentType,
      brand,
    });
  }, [name, equipmentType, brand]);

  return null;
}

type SpecDownloadButtonProps = {
  href: string;
  name: string;
};

export function SpecDownloadButton({ href, name }: SpecDownloadButtonProps) {
  return (
    <Link
      href={href}
      className="btn-secondary text-[var(--foreground)]"
      target="_blank"
      onClick={() =>
        posthog.capture("pdf_spec_downloaded", { equipment_name: name })
      }
    >
      Télécharger la fiche PDF
    </Link>
  );
}
