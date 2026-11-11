export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleContent = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  keywords: string[];
  intro: string[];
  sections: ArticleSection[];
  conclusion: string[];
};

export const articlesContent: ArticleContent[] = [
  {
    slug: "bien-choisir-sa-chargeuse-au-cameroun",
    title: "Comment bien choisir une chargeuse pour un chantier au Cameroun",
    category: "Conseil terrain",
    excerpt:
      "Capacité, nature du matériau, cadence de travail et accessibilité du site : les bons critères pour éviter une machine sous-dimensionnée.",
    readTime: "4 min",
    keywords: [
      "choisir une chargeuse",
      "location chargeuse Cameroun",
      "chargeuse 5 tonnes",
      "godet chargeuse",
    ],
    intro: [
      "Une chargeuse trop petite fait perdre des semaines à un chantier ; une chargeuse surdimensionnée fait exploser le budget carburant et location. Entre les deux, le bon choix se fait sur des critères concrets : le matériau à manipuler, les camions à charger, la cadence attendue et l'état du site. Voici la méthode que nous appliquons avec nos clients au Cameroun avant chaque location.",
    ],
    sections: [
      {
        heading: "1. Partir du matériau, pas de la machine",
        paragraphs: [
          "Tout commence par ce que la chargeuse va charger. Le sable et le gravier roulé sont des matériaux faciles : presque tous les godets les manipulent sans effort. La latérite compacte, la pouzzolane ou la roche éclatée en carrière sont plus lourds et plus abrasifs : ils demandent une machine avec une vraie réserve de puissance et un godet renforcé.",
          "La densité du matériau détermine aussi le volume utile du godet. Un godet de 3 m³ rempli de sable sec ne pèse pas le même poids que rempli de gravier mouillé. Si le matériau est lourd, on visera une charge nominale supérieure, même si le volume semble gérable.",
        ],
      },
      {
        heading: "2. Vérifier la compatibilité avec vos camions",
        paragraphs: [
          "La chargeuse sert presque toujours à charger des camions. Deux mesures comptent : la hauteur de déversement et le nombre de godets nécessaires pour remplir une benne. Une hauteur de déversement d'environ 3 mètres permet de charger la plupart des bennes de 20 à 30 tonnes utilisées sur les chantiers camerounais.",
          "Comptez ensuite les godets : remplir une benne de 20 tonnes en 5 à 7 godets avec une chargeuse de 5 tonnes donne une bonne cadence. Si vous tombez à 12 ou 15 godets par camion, la file de camions s'allonge et le coût par tonne transportée grimpe. C'est le signe d'une machine sous-dimensionnée.",
        ],
        bullets: [
          "Hauteur de déversement adaptée à vos bennes",
          "5 à 7 godets par camion : la zone de cadence saine",
          "Distance de déversement suffisante pour ne pas toucher la benne",
        ],
      },
      {
        heading: "3. Tenir compte du terrain et de la saison",
        paragraphs: [
          "Au Cameroun, un site n'a rien d'un terrain d'essai en usine. En saison des pluies, les plateformes deviennent glissantes, les accès se dégradent et les cycles de chargement s'allongent. Une chargeuse qui travaille sur un sol instable consomme plus, use ses pneus plus vite et demande un chauffeur expérimenté.",
          "Prévoyez donc la machine pour le pire mois de votre chantier, pas pour le meilleur. Et si votre site est éloigné d'une zone urbaine, sécurisez dès la signature le suivi technique et la disponibilité des pièces d'usure courantes : flexibles, dents de godet, filtres.",
        ],
      },
      {
        heading: "4. Calculer le vrai coût : par tonne, pas par jour",
        paragraphs: [
          "Le tarif journalier ne dit rien de la rentabilité. Le bon indicateur, c'est le coût par tonne chargée : il combine le prix de location, le carburant et la cadence réelle de la machine sur votre site. Une chargeuse de 5 tonnes récente chargera souvent deux fois plus vite qu'un modèle ancien plus petit, pour un surcoût de location limité.",
          "Demandez au loueur des chiffres vérifiables : année de la machine, capacité du godet, charge nominale, hauteur de déversement. Un professionnel sérieux vous les donne sans hésiter, fiche technique à l'appui.",
        ],
      },
    ],
    conclusion: [
      "En résumé : définissez le matériau, vérifiez la compatibilité avec vos camions, dimensionnez pour la saison difficile et comparez les offres au coût par tonne. Notre chargeuse Shantui L55-C5 de 5 tonnes, avec son godet de 3 m³, couvre la majorité des configurations rencontrées à Douala, Kribi et en carrière. Décrivez-nous votre chantier : nous vous dirons franchement si le format convient, ou s'il vous faut autre chose.",
    ],
  },
  {
    slug: "pourquoi-louer-un-engin-avec-chauffeur",
    title: "Pourquoi louer un engin avec chauffeur qualifié",
    category: "Productivité",
    excerpt:
      "Une exploitation mieux maîtrisée, moins d'immobilisations et une mise en route plus rapide pour les opérations sensibles.",
    readTime: "3 min",
    keywords: [
      "location engin avec chauffeur",
      "opérateur chargeuse Cameroun",
      "location pelle avec chauffeur",
      "chauffeur engins BTP",
    ],
    intro: [
      "Beaucoup d'entreprises louent leurs engins « secs », sans chauffeur, en pensant économiser le salaire d'un opérateur. Sur le papier, le calcul semble bon. Sur le terrain, il se retourne souvent contre elles. Voici pourquoi la location avec chauffeur qualifié est, dans la plupart des cas, la formule la plus rentable au Cameroun.",
    ],
    sections: [
      {
        heading: "1. Une machine productive dès la première heure",
        paragraphs: [
          "Un opérateur qui connaît la machine charge plus vite, consomme moins et use moins les pneus et les trains de roulement. Sur une chargeuse, l'écart de cadence entre un chauffeur expérimenté et un conducteur occasionnel peut atteindre 30 % sur une journée : ce sont des camions supplémentaires chargés, sans une heure de location de plus.",
          "Avec le chauffeur du loueur, ce niveau de maîtrise est là dès le premier jour. Pas de période d'adaptation, pas de casse liée à une mauvaise prise en main pendant que votre équipe apprend la machine.",
        ],
      },
      {
        heading: "2. La responsabilité et l'entretien restent chez le loueur",
        paragraphs: [
          "Quand le chauffeur est celui du loueur, l'engin est conduit selon les procédures du propriétaire : niveaux vérifiés le matin, graissage fait, alertes remontées avant qu'elles ne deviennent des pannes. C'est un changement de logique complet par rapport à la location sèche, où la machine subit parfois des semaines d'exploitation sans aucun contrôle.",
          "En cas d'incident mécanique, la discussion est aussi plus simple : le loueur ne peut pas attribuer la panne à une mauvaise conduite de votre personnel, puisque l'opérateur est le sien. Le suivi technique et les interventions font partie de la prestation.",
        ],
        bullets: [
          "Contrôles quotidiens faits par l'opérateur",
          "Pannes détectées et signalées plus tôt",
          "Aucun litige sur la conduite en cas d'incident",
        ],
      },
      {
        heading: "3. Vous éliminez un recrutement difficile",
        paragraphs: [
          "Les bons opérateurs d'engins sont rares et très demandés au Cameroun, surtout à Douala et sur les grands chantiers. Recruter, vérifier les références, gérer le contrat, les congés et les absences pour un besoin de quelques semaines ou quelques mois représente une charge disproportionnée.",
          "La location avec chauffeur transforme ce problème d'embauche en simple ligne de devis. Et si l'opérateur est absent, c'est au loueur d'assurer la continuité du service, pas à vous.",
        ],
      },
      {
        heading: "4. Quand la location sèche reste pertinente",
        paragraphs: [
          "La location sans chauffeur garde du sens dans un cas précis : vous disposez déjà d'opérateurs salariés, formés et disponibles, et la mission dure assez longtemps pour absorber la prise en main de la machine. C'est typiquement le cas des grandes entreprises de BTP avec leur propre parc et leurs propres équipes.",
          "Dans tous les autres cas, faites le calcul complet : tarif de location, carburant, cadence réelle, risques de casse et coût de gestion. La formule avec chauffeur gagne presque toujours.",
        ],
      },
    ],
    conclusion: [
      "Chez D-ONE EQUIPMENT, tous nos engins peuvent être loués avec des opérateurs qualifiés, habitués aux chantiers exigeants du Cameroun. Vous démarrez plus vite, vous produisez plus par journée de location, et la machine reste suivie par ceux qui la connaissent. Demandez un devis comparatif avec et sans chauffeur : les chiffres parlent d'eux-mêmes.",
    ],
  },
  {
    slug: "kribi-douala-yaounde-zones-prioritaires",
    title: "Kribi, Douala, Yaoundé : zones prioritaires pour les engins lourds",
    category: "Marché local",
    excerpt:
      "Un point rapide sur les zones où la demande en engins BTP et industriels est la plus forte.",
    readTime: "5 min",
    keywords: [
      "location engins Kribi",
      "location engins Douala",
      "location engins Yaoundé",
      "chantiers Cameroun",
    ],
    intro: [
      "La demande en engins lourds au Cameroun ne se répartit pas au hasard : elle suit les ports, les capitales et les corridors industriels. Trois zones concentrent l'essentiel des besoins en chargeuses et en pelles : Kribi, Douala et Yaoundé. Comprendre ce qui s'y joue permet d'anticiper ses besoins en machines au lieu de les subir.",
    ],
    sections: [
      {
        heading: "Douala : le moteur industriel et portuaire",
        paragraphs: [
          "Capitale économique et premier port du pays, Douala génère une demande permanente et diversifiée : manutention dans les zones industrielles de Bassa et Yassa, plateformes logistiques, centrales à béton, chantiers d'immeubles dans les quartiers en expansion. C'est le marché le plus régulier, avec des locations qui vont de la journée pour un dépannage à plusieurs mois pour un dépôt.",
          "C'est aussi là que notre base est installée, à Bocom Yassa. Cette proximité change tout en matière de réactivité : une chargeuse mobilisable rapidement, un suivi technique qui n'attend pas un convoyage, et des opérateurs qui connaissent les sites.",
        ],
      },
      {
        heading: "Kribi : la zone qui monte le plus vite",
        paragraphs: [
          "Le port en eau profonde a transformé Kribi en pôle de croissance : terminaux, zone industrielle, plateformes logistiques et chantiers d'infrastructure s'y enchaînent. Les projets liés aux minerais du Sud, dont le corridor du fer, entretiennent en plus une demande d'engins de terrassement sur les axes et les plateformes.",
          "L'offre locale en engins y reste limitée par rapport au rythme des chantiers : la plupart des machines viennent de Douala. Pour un maître d'ouvrage ou un sous-traitant, cela signifie qu'il faut réserver tôt, car les délais de mobilisation font partie de l'équation.",
        ],
        bullets: [
          "Port en eau profonde et extensions de terminaux",
          "Plateformes industrielles et logistiques en développement",
          "Corridor minier du Sud en préparation",
        ],
      },
      {
        heading: "Yaoundé : les travaux publics en continu",
        paragraphs: [
          "Dans la capitale politique, la demande vient des travaux publics : voirie urbaine, assainissement, viabilisation de lotissements et grands équipements institutionnels. Ces chantiers sont cadrés par des marchés publics ou de grands programmes, avec des plannings stricts et des exigences formelles sur l'état et la disponibilité des engins.",
          "La pelle excavatrice y est la machine centrale, pour les fouilles, les réseaux et le terrassement. Les locations y sont souvent plus longues et se planifient dès la phase de préparation du marché.",
        ],
      },
      {
        heading: "Et autour : les corridors et les carrières",
        paragraphs: [
          "Au-delà des trois pôles, les axes qui les relient entretiennent leur propre demande : carrières de granulats qui alimentent Douala et Yaoundé, chantiers routiers, plateformes le long des corridors. Les zones minières de l'Est, du Sud et de l'Adamaoua ajoutent des besoins spécifiques en engins d'extraction et de chargement, sur des sites éloignés où la fiabilité de la machine et de son suivi fait la différence.",
          "Notre positionnement couvre cet ensemble : une base à Douala, des mobilisations organisées vers Kribi, Yaoundé et les sites de l'intérieur, avec le transport intégré au devis.",
        ],
      },
    ],
    conclusion: [
      "Que votre chantier soit à Douala, à Kribi, à Yaoundé ou sur un site de l'intérieur, le principe reste le même : anticiper. Les engins disponibles partent vite dans les zones en tension, surtout en saison sèche où tous les chantiers tournent en même temps. Parlez-nous de votre projet dès sa préparation : nous calons la machine sur vos dates, pas l'inverse.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articlesContent.find((article) => article.slug === slug);
}
