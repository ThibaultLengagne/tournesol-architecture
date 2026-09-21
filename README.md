# Tournesol Architecture

Site vitrine temporaire de [tournesolarchitecture.fr](https://tournesolarchitecture.fr) — logo, nom, formulaire de contact.

Les messages du formulaire arrivent sur `contact@tournesolarchitecture.fr` via [FormSubmit](https://formsubmit.co) (le navigateur envoie le formulaire à leur service, qui relaie l’e-mail). Lors du premier envoi, confirmer l’adresse en cliquant le lien reçu par e-mail.

## Local

```bash
npm install
npm run dev
```

## Vercel

Importer le dépôt GitHub, laisser les réglages Next.js par défaut, déployer. Pointer le domaine `tournesolarchitecture.fr` dans Project → Settings → Domains.
