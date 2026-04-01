import Link from "next/link";

import { company } from "@/data/site";

export function WhatsAppButton() {
  return (
    <Link
      href={company.whatsappUrl}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 border border-emerald-900/15 bg-emerald-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#08110c] shadow-[0_14px_30px_rgba(45,111,65,0.18)] transition hover:-translate-y-0.5 hover:bg-emerald-400"
      aria-label="Contacter D-ONE EQUIPMENT sur WhatsApp"
    >
      WhatsApp
    </Link>
  );
}
