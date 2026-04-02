export type NavItem = {
  href: string;
  label: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  summary: string;
  bullets: string[];
};

export type FleetItem = {
  slug: string;
  name: string;
  shortName: string;
  type: string;
  capacity: string;
  brand: string;
  year: string;
  availability: string;
  summary: string;
  badge: string;
  image: string;
  gallery: string[];
  highlights: string[];
  specs: Array<{ label: string; value: string }>;
  sectors: string[];
  download?: string;
  videos?: Array<{
    title: string;
    file: string;
    poster?: string;
    sourceLabel: string;
    sourceUrl: string;
  }>;
  /** YouTube video ID to embed on the detail page (e.g. "dQw4w9WgXcQ") */
  videoYoutubeId?: string;
};

export type ReferenceItem = {
  title: string;
  location: string;
  status: string;
  description: string;
  image: string;
};

export type ArticleItem = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
};

const fallbackPhone =
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+49 1573 8304306";
const fallbackEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@donequipment.com";
const whatsappSource = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? fallbackPhone;
const whatsappDigits = whatsappSource.replace(/\D/g, "");

export const company = {
  name: "D-ONE EQUIPMENT",
  slogan: "Neuf. Expérimenté. Fiable.",
  altSlogan: "New. Experienced. Reliable.",
  // TODO: Slogan alternatif pour plus tard → "La puissance, là où vous en avez besoin."
  description:
    "Location d'engins lourds au Cameroun. Chargeuses et pelles pour chantiers BTP, industrie et logistique.",
  longDescription:
    "D-ONE EQUIPMENT met a disposition des engins adaptes aux besoins de chargement, manutention, terrassement et exploitation de plateforme.",
  phone: fallbackPhone,
  email: fallbackEmail,
  whatsappUrl:
    whatsappDigits.length >= 8
      ? `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
          "Bonjour D-ONE EQUIPMENT, je souhaite demander un devis pour un engin.",
        )}`
      : null,
  areas: ["Tout le Cameroun"],
  socialLinks: {
    facebook: "https://www.facebook.com/share/1C77kCq4Tf/",
    instagram: "https://www.instagram.com/donequipment",
    linkedin: "https://www.linkedin.com/company/d-one-equipment",
  },
  keywords: [
    "location chargeuse Cameroun",
    "location engins BTP Douala",
    "location pelle Yaounde",
    "location chargeuse Kribi",
    "location engins lourds Cameroun",
  ],
};

export const navItems: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/flotte", label: "Flotte" },
  { href: "/services", label: "Services" },
  { href: "/references", label: "Références" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export const homeStats: StatItem[] = [
  { value: "5 t", label: "Charge nominale" },
  { value: "162 kW", label: "Puissance machine phare" },
  { value: "3 m3", label: "Capacite du godet" },
  { value: "3 villes", label: "Tout le Cameroun" },
];

export const services: ServiceItem[] = [
  {
    title: "Location de chargeuses",
    summary:
      "Des chargeuses adaptees au chargement, a la manutention de materiaux et aux travaux de terrassement sur chantier.",
    bullets: [
      "Disponibilite selon planning et zone d'intervention",
      "Machines recentes pour une exploitation plus fiable",
      "Aide au choix de la capacite selon votre chantier",
    ],
  },
  {
    title: "Location de pelles excavatrices",
    summary:
      "Une solution pour les besoins d'excavation, de chargement et de preparation de plateforme sur chantier.",
    bullets: [
      "Configuration adaptee au terrain et au volume de travail",
      "Suivi technique pendant la periode de location",
      "Interventions ponctuelles ou missions de plus longue duree",
    ],
  },
  {
    title: "Avec chauffeur qualifie",
    summary:
      "Des engins conduits par des operateurs qualifies pour gagner du temps et mieux securiser l'exploitation.",
    bullets: [
      "Conducteurs habitues aux environnements exigeants",
      "Demarrage chantier plus rapide",
      "Moins d'imprevus a la prise en main",
    ],
  },
  {
    title: "Maintenance et support technique",
    summary:
      "Un suivi technique pour maintenir la disponibilite des machines pendant la location.",
    bullets: [
      "Controle mecanique et suivi terrain",
      "Support operationnel pendant l'exploitation",
      "Intervention rapide en cas de besoin technique",
    ],
  },
];

export const fleet: FleetItem[] = [
  {
    slug: "shantui-l55-c5",
    name: "Shantui L55-C5",
    shortName: "Chargeuse 5T 2025",
    type: "Chargeuse",
    capacity: "5 tonnes",
    brand: "Shantui",
    year: "2025",
    availability: "Disponible sur devis",
    summary:
      "Chargeuse 5 tonnes destinee aux operations de chargement, manutention et terrassement sur chantiers BTP, sites industriels et plateformes logistiques.",
    badge: "Modele phare",
    image: "/media/shantui-l55-c5.png",
    gallery: [
      "/media/shantui-l55-c5.png",
      "/media/shantui-gallery-1.jpg",
      "/media/shantui-case-1.jpg",
    ],
    highlights: [
      "Motorisation adaptee aux cycles de travail intensifs",
      "Cabine plus confortable pour les longues journees d'exploitation",
      "Chassis renforce pour les environnements de travail severes",
      "Hauteur de deversement adaptee au chargement de camions",
    ],
    specs: [
      { label: "Puissance totale", value: "162 kW" },
      { label: "Poids en ordre de marche", value: "17 100 kg" },
      { label: "Capacite du godet", value: "3 m3" },
      { label: "Charge nominale", value: "5 t" },
      { label: "Dimensions", value: "8220 x 3066 x 3450 mm" },
      { label: "Hauteur max. de deversement", value: "3050 mm" },
      { label: "Distance de deversement", value: "1120 mm" },
      { label: "Vitesse max.", value: "38 km/h" },
    ],
    sectors: [
      "Terrassement et preparation de plateforme",
      "Industrie cimentiere et manutention vrac",
      "Sites portuaires et flux logistiques",
      "Carrieres, granulats et mines",
    ],
    download: "/docs/shantui-l55-c5-wheel-loader.pdf",
    videos: [
      {
        title: "Video machine Shantui L55-C5",
        file: "/media/videos/shantui-l55-c5-wheel-loader.mp4",
        poster: "/media/shantui-l55-c5.png",
        sourceLabel: "Pexels",
        sourceUrl: "",
      },
      {
        title: "Video machine L55-B5 en preparation",
        file: "/media/videos/shantui-l55-b5-ready-for-shipping.mp4",
        poster: "/media/shantui-gallery-1.jpg",
        sourceLabel: "Pexels",
        sourceUrl: "",
      },
    ],
    // Add a YouTube video ID here to show a machine demo video on the detail page.
    // Example: videoYoutubeId: "XXXXXXXXXXX"
    videoYoutubeId: undefined,
  },
  {
    slug: "sany-sy215c",
    name: "SANY SY215C",
    shortName: "Pelle 21,9T",
    type: "Pelle",
    capacity: "21,9 tonnes",
    brand: "SANY",
    year: "Serie actuelle",
    availability: "Etude de gamme",
    summary:
      "Pelle moyenne adaptee aux travaux d'excavation, de terrassement, de reseaux et de preparation de plateforme pour les chantiers BTP et industriels.",
    badge: "Pelle de reference",
    image: "/media/sany-sy215c-main.jpg",
    gallery: [
      "/media/sany-sy215c-main.jpg",
      "/media/sany-sy215c-gallery.jpg",
      "/media/sany-sy215c-video-thumb.jpg",
    ],
    highlights: [
      "Format 21,9 t pour les travaux de terrassement et de reseaux",
      "Configuration orientee productivite sur chantier et plateforme",
      "Bonne base de comparaison pour un futur segment pelle de la flotte",
    ],
    specs: [
      { label: "Puissance moteur", value: "118 kW" },
      { label: "Poids operationnel", value: "21,9 t" },
      { label: "Capacite du godet", value: "0,93 m3" },
      { label: "Categorie", value: "Pelle moyenne" },
      { label: "Usage cible", value: "Excavation, VRD, plateforme" },
      { label: "Brochure", value: "SANY SY215C" },
    ],
    sectors: ["VRD", "Terrassement", "Industrie", "Travaux publics"],
    download: "/docs/sany-sy215c.pdf",
    videos: [
      {
        title: "Presentation technique SY215C",
        file: "/media/videos/sany-sy215c-technology.mp4",
        poster: "/media/sany-sy215c-video-thumb.jpg",
        sourceLabel: "Pexels",
        sourceUrl: "",
      },
      {
        title: "Essai terrain SY215C",
        file: "/media/videos/sany-sy215c-test.mp4",
        poster: "/media/sany-sy215c-video-thumb.jpg",
        sourceLabel: "Pexels",
        sourceUrl: "",
      },
    ],
  },
  {
    slug: "sany-sw305k",
    name: "SANY SW305K",
    shortName: "Chargeuse 3,5T",
    type: "Chargeuse",
    capacity: "3,5 tonnes",
    brand: "SANY",
    year: "Serie actuelle",
    availability: "Etude de gamme",
    summary:
      "Chargeuse 3,5 tonnes adaptee aux chantiers de manutention, aux depots, aux plateformes logistiques et aux travaux de soutien plus compacts.",
    badge: "Chargeuse de reference",
    image: "/media/sany-sw305k-main.jpg",
    gallery: [
      "/media/sany-sw305k-main.jpg",
      "/media/sany-sw305k-gallery.jpg",
      "/media/sany-sw305k-video-thumb.jpg",
    ],
    highlights: [
      "Charge nominale 3,5 t pour des cycles de manutention plus agiles",
      "Format adapte aux depots, plateformes et besoins urbains",
      "Base coherente pour un futur segment compact dans la flotte",
    ],
    specs: [
      { label: "Puissance moteur", value: "129 kW" },
      { label: "Poids operationnel", value: "14,5 t" },
      { label: "Capacite du godet", value: "2,3 m3" },
      { label: "Charge nominale", value: "3,5 t" },
      { label: "Categorie", value: "Wheel loader" },
      { label: "Brochure", value: "SANY SW305K" },
    ],
    sectors: ["Logistique", "Chantiers urbains", "Support terrain", "Depots"],
    download: "/docs/sany-sw305k.pdf",
    videos: [
      {
        title: "Vue detaillee SW305K",
        file: "/media/videos/sany-sw305k-overview.mp4",
        poster: "/media/sany-sw305k-video-thumb.jpg",
        sourceLabel: "Pexels",
        sourceUrl: "",
      },
      {
        title: "Apercu rapide SW305K",
        file: "/media/videos/sany-sw305k-preview.mp4",
        poster: "/media/sany-sw305k-video-thumb.jpg",
        sourceLabel: "Pexels",
        sourceUrl: "",
      },
    ],
  },
];

export const references: ReferenceItem[] = [
  {
    title: "Collaboration avec Saptrans",
    location: "Douala",
    status: "Environnement logistique",
    description:
      "Une collaboration qui prouve l'ancrage local de D-ONE EQUIPMENT sur des besoins logistiques concrets.",
    image: "/media/shantui-case-1.jpg",
  },
  {
    title: "Interventions visees a Kribi",
    location: "Kribi",
    status: "Port et industrie",
    description:
      "Un point d'appui pour les besoins portuaires, la manutention et les plateformes industrielles.",
    image: "/media/shantui-gallery-1.jpg",
  },
  {
    title: "Chantiers BTP a Yaounde",
    location: "Yaounde",
    status: "Travaux publics",
    description:
      "Une présence pensée pour les besoins urbains, VRD et travaux publics.",
    image: "/media/shantui-case-2.jpg",
  },
];

export const articles: ArticleItem[] = [
  {
    slug: "bien-choisir-sa-chargeuse-au-cameroun",
    title: "Comment bien choisir une chargeuse pour un chantier au Cameroun",
    category: "Conseil terrain",
    excerpt:
      "Capacite, nature du materiau, cadence de travail et accessibilite du site: les bons criteres pour eviter une machine sous-dimensionnee.",
    readTime: "4 min",
  },
  {
    slug: "pourquoi-louer-un-engin-avec-chauffeur",
    title: "Pourquoi louer un engin avec chauffeur qualifie",
    category: "Productivite",
    excerpt:
      "Une exploitation mieux maitrisee, moins d'immobilisations et une mise en route plus rapide pour les operations sensibles.",
    readTime: "3 min",
  },
  {
    slug: "kribi-douala-yaounde-zones-prioritaires",
    title: "Kribi, Douala, Yaounde: zones prioritaires pour les engins lourds",
    category: "Marche local",
    excerpt:
      "Un point rapide sur les zones ou la demande en engins BTP et industriels est la plus forte.",
    readTime: "5 min",
  },
];

export const trustPoints = [
  "Visuels et documentation axes sur la flotte reelle et les fiches techniques.",
  "Parcours rapide vers le devis avec CTA visibles sur chaque page cle.",
  "Ton direct et rassurant pour parler aux grands comptes et partenaires financiers.",
  "Base SEO locale pour capter les recherches Cameroun, Douala, Yaounde et Kribi.",
];

export const operatingModel = [
  "Pilotage de l'information et coordination commerciale depuis l'Allemagne.",
  "Execution terrain et relation chantier au Cameroun.",
  "Support technique, maintenance et qualite de service comme piliers de marque.",
];

export function getFleetBySlug(slug: string) {
  return fleet.find((item) => item.slug === slug);
}
