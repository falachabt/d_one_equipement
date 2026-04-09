import Image from "next/image";

import { company } from "@/data/site";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function BrandLogo({
  className = "",
  imageClassName = "h-10 w-auto",
  priority = false,
  width = 280,
  height = 88,
}: BrandLogoProps) {
  return (
    <div className={`inline-flex items-center rounded-sm bg-white px-3 py-2 shadow-sm ${className}`.trim()}>
      <Image
        src="/assets/logos/logo-wordmark.png"
        alt={`${company.name} logo`}
        width={width}
        height={height}
        priority={priority}
        className={imageClassName}
      />
    </div>
  );
}
