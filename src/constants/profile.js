// Toutes les informations personnelles sont ici : modifier ce fichier suffit
// pour mettre à jour le site.
import pharmaloc from "../assets/project-pharmaloc.svg";
import livre from "../assets/project-livre.svg";
import edtech from "../assets/project-edtech.svg";

export const profile = {
  name: "Ben Birama Bop",
  role: "Développeur Full Stack JavaScript",
  tagline: "React · Node.js · MongoDB · IA",
  location: "Dakar, Sénégal",
  email: "1612benbira@gmail.com",
  github: "https://github.com/1612benbira-web",
  siteUrl: "", // à renseigner une fois le portfolio déployé
};

export const about = {
  paragraphs: [
    "Bonjour, je m'appelle Ben, développeur full stack junior basé à Dakar. Diplômé du bootcamp GomyCode « Software Development with AI skills » (octobre 2026), je poursuis en parallèle une Licence 1 Mathématiques-Physique-Informatique à l'UCAD.",
    "Je conçois des applications web complètes : interfaces React, API REST Node.js / Express, base de données, authentification sécurisée, tests automatisés et déploiement en ligne. Mes projets répondent à des besoins concrets au Sénégal : santé, lecture et éducation.",
    "Je cherche une première opportunité en développement web full stack. Voici les technologies que j'utilise :",
  ],
  tech: [
    "JavaScript / TypeScript",
    "React · Next.js",
    "Node.js · Express",
    "MongoDB · Mongoose",
    "PostgreSQL · Supabase",
    "Tailwind CSS",
    "JWT · Zod · bcrypt",
    "Vitest · Git · Vercel",
  ],
  stats: [
    { value: "3", label: "Projets en ligne" },
    { value: "300+", label: "Tests automatisés (PharmaLoc)" },
    { value: "4", label: "Rôles gérés dans PharmaLoc" },
    { value: "2026", label: "Diplômé GomyCode" },
  ],
};

export const services = [
  {
    id: 1,
    title: "Interfaces React",
    description:
      "Des interfaces claires et adaptées au mobile, avec React, Vite, Next.js et Tailwind CSS.",
  },
  {
    id: 2,
    title: "API REST sécurisées",
    description:
      "Node.js et Express : authentification JWT, rôles, validation Zod, limitation de débit et journal d'audit.",
  },
  {
    id: 3,
    title: "Données et déploiement",
    description:
      "MongoDB, PostgreSQL, Supabase, tests Vitest, puis mise en ligne sur Vercel et Render.",
  },
];

export const experiences = [
  {
    id: 1,
    tab: "GomyCode",
    title: "Formation intensive en développement logiciel avec compétences en IA",
    company: "GomyCode",
    yearsActive: "Diplôme obtenu le 12 octobre 2026",
    information: [
      "Développement full stack JavaScript : React, Node.js, Express, MongoDB.",
      "Compétences en intelligence artificielle appliquées au développement.",
      "Trois projets complets réalisés, de la base de données au déploiement.",
    ],
  },
  {
    id: 2,
    tab: "UCAD",
    title: "Licence 1 Mathématiques - Physique - Informatique",
    company: "Université Cheikh Anta Diop de Dakar",
    yearsActive: "En cours",
    information: [
      "Bases en mathématiques et en informatique, menées en parallèle de ma formation de développeur.",
    ],
  },
  {
    id: 3,
    tab: "Auchan · Employé polyvalent",
    title: "Employé polyvalent / Porteur (CDD)",
    company: "Auchan Sénégal",
    yearsActive: "Ramadan 2025 et fin d'année 2025",
    information: [
      "Appui aux équipes en période de forte affluence et relation client.",
      "Respect strict des consignes de sécurité et d'hygiène.",
    ],
  },
  {
    id: 4,
    tab: "Auchan · Inventaire",
    title: "Agent d'inventaire",
    company: "Auchan Sénégal",
    yearsActive: "Décembre 2024 et décembre 2025",
    information: [
      "Comptage et vérification des stocks en équipe, sous contrainte de temps.",
      "Fiabilité et précision des données.",
    ],
  },
];

// repositoryUrl : remplacer par le lien exact de chaque dépôt GitHub.
export const projects = [
  {
    id: 1,
    image: pharmaloc,
    title: "PharmaLoc",
    category: ["Full Stack", "MERN"],
    description:
      "Commande de médicaments en pharmacie : stocks, paiement simulé et livraison avec code de remise. Rôles patient, pharmacie, livreur et administrateur. Plus de 300 tests Vitest.",
    stack: "React, Vite · Node.js, Express · MongoDB",
    url: "https://pharmaloc-ashy.vercel.app",
    repositoryUrl: profile.github,
  },
  {
    id: 2,
    image: livre,
    title: "Livre compagnon",
    category: ["Full Stack", "MERN"],
    description:
      "Application pour livre jeune public : accès par QR code, question du jour corrigée côté serveur, progression du lecteur et espace administrateur.",
    stack: "React, Tailwind · Express, JWT · MongoDB Atlas",
    url: "https://livre-compagnon.vercel.app",
    repositoryUrl: profile.github,
  },
  {
    id: 3,
    image: edtech,
    title: "EdTech Sénégal",
    category: ["Full Stack", "Next.js"],
    description:
      "Plateforme éducative multi-écoles selon le programme sénégalais : rôles élève, enseignant et administrateur, quiz quotidien et suivi de progression.",
    stack: "Next.js, TypeScript, Tailwind · Supabase, PostgreSQL",
    url: "https://edtech-senegal.vercel.app",
    repositoryUrl: profile.github,
  },
];
