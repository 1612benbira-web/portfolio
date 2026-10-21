# Portfolio de Ben Birama Bop

Portfolio React (Create React App) adapté du modèle de Greg Sithole.
Projets présentés : PharmaLoc, Livre compagnon, EdTech Sénégal.

## Lancer en local

```bash
npm install --legacy-peer-deps
npm start
```

## Modifier le contenu

Tout le texte (bio, compétences, parcours, projets, e-mail, GitHub) est dans
`src/constants/profile.js`. Les captures des projets sont dans `src/assets/project-*.svg` :
remplacez-les par de vraies captures d'écran (PNG/WebP, 800×534) et mettez à jour les imports.

## Formulaire de contact

Sans configuration, le formulaire ouvre le client mail du visiteur. Pour un envoi direct,
copiez `.env.example` vers `.env` et renseignez vos clés EmailJS.

## Déployer sur Vercel

Importer le dépôt sur vercel.com : Framework « Create React App », build `npm run build`,
dossier de sortie `build`. Ajouter les variables EmailJS dans les réglages si utilisées.
