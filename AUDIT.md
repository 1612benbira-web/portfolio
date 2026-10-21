# Audit du portfolio gregsithole-react-portfolio

Projet analysé : dépôt fourni (zip) + site en ligne gregsithole.com.

## Verdict
Bon modèle visuel (sidebar, thème clair/sombre, sections claires), mais c'est un
gabarit à moitié fini : contenu en dur dans le JSX, sections factices, accessibilité
faible, SEO quasi inexistant, outillage vieillissant.

## Problèmes critiques
| # | Constat | Correction appliquée |
|---|---|---|
| 1 | `greg.jpeg` pèse 4,2 Mo et est importé dans le bundle | Supprimé (avatar SVG léger) |
| 2 | Boutons « voir le site / code » des projets visibles **uniquement au survol** : invisibles sur mobile et clavier | Cartes réécrites : liens toujours visibles |
| 3 | `index.html` : `lang="en"`, pas de meta description, pas de Open Graph, pas de theme-color. Le site live n'expose que `<title>` | Ajoutés (lang fr, description, OG) |
| 4 | Navigation en icônes seules sans `aria-label` ; lecteurs d'écran : liens vides | `aria-label` + `title` sur chaque lien |
| 5 | Champs du formulaire sans `<label>`, `outline: none` partout (aucun focus visible) | Labels `sr-only`, `:focus-visible` global |
| 6 | Contact : clés EmailJS lues sans garde ; si absentes, l'envoi échoue avec une erreur peu claire | Repli `mailto:` + `.env.example` |

## Problèmes moyens
- Contenu mélangé au code (bio, expériences, projets dans 8 fichiers) → centralisé dans `src/constants/profile.js`.
- Sections factices : Pricing (non branchée), Blog « Example Blog » avec `href="#"`, Testimonials sans `id` ni lien dans le menu, stats inventées (« 100 Code Quality », « 6 ans »).
- Filtres du portfolio codés en dur (dont « Angular » sans projet) avec états dupliqués → filtres dérivés des données.
- `Shapes.jsx` utilise `class=` au lieu de `className=` (avertissement React).
- Liens sociaux erronés : `wwww.facebook.com`, `target="__blank"`.
- Animations sans respect de `prefers-reduced-motion`.
- Images sans `width/height` (décalage de mise en page).
- Typos du modèle : « Donwload », « journery », « expanidng », « Novembe », « Feburary ».

## Outillage
- Create React App est déprécié ; `react-scripts 5` ne compile plus avec `npm` récent sans `ajv@8` (ajouté en devDependency). Migration Vite recommandée à terme.
- Dépendances inutilisées retirées : axios, web-vitals, @testing-library/*, swiper, framer-motion.
- Dossier `devops/` (nginx avec IP et e-mail de Greg, serveur DigitalOcean) supprimé : inutile sur Vercel.
- Aucun test, aucun lint de CI.

## Adaptation à Ben
Voir `src/constants/profile.js`. Données issues du CV et du certificat GomyCode ;
projets liés aux trois URL déployées.

## À faire par Ben
1. Remplacer les vignettes `project-*.svg` par de vraies captures.
2. Mettre le lien exact de chaque dépôt GitHub (actuellement : profil GitHub).
3. Ajouter LinkedIn si tu en as un.
4. Décider d'afficher ou non ton téléphone (retiré volontairement d'un site public).
5. Ajouter un `homepage`/`siteUrl` après déploiement.
