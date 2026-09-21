# Tournesol Architecture

Site vitrine temporaire de [tournesolarchitecture.fr](https://tournesolarchitecture.fr) — logo, nom, formulaire de contact.

Les messages du formulaire arrivent sur `contact@tournesolarchitecture.fr` via [FormSubmit](https://formsubmit.co). L’activation est **par domaine** : localhost et le site Vercel comptent comme deux formulaires. Après un premier envoi depuis l’URL en ligne, cliquer le lien reçu par e-mail.

## Local

```bash
npm install
npm run dev
```

## Vercel

Importer le dépôt GitHub, laisser les réglages Next.js par défaut, déployer. Pointer le domaine `tournesolarchitecture.fr` dans Project → Settings → Domains.
