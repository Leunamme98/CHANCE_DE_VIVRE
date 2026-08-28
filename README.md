# Chance de Vivre — Plateforme web

## Contexte

Site vitrine pour l'ONG **Chance De Vivre-Togo**, basée à Tsévié (région Maritime, Togo). L'ONG agit sur 3 piliers : éducation, santé, économie locale. Ce projet donne à l'ONG une présence web professionnelle : présenter la structure, ses missions, ses réalisations, ses partenaires, et permettre le contact.

## Documents de référence (à lire avant tout développement)

| Document | Rôle |
|---|---|
| `docs/cahier-des-charges-chance-de-vivre.md` | Périmètre fonctionnel V1, utilisateurs, contraintes |
| `charte_graphique/design-system-chance-de-vivre.md` | Toutes les valeurs visuelles précises — à suivre à la lettre |
| `docs/normes-codage.md` | Règles de code à respecter |
| `docs/backlog-taches.md` | Suivi des tâches, statut d'avancement |
| `docs/contraintes-a-verifier.md` | Checklist à revalider avant chaque livraison |
| `docs/stack-technique.md` | Liste exhaustive des dépendances installées, version exacte et rôle de chacune |

## Stack technique

- Angular (standalone components, lazy loading, prerendering pour le SEO)
- Données en dur (services TS), structurées comme une future API
- PWA (`@angular/service-worker`)
- i18n : ngx-translate (FR par défaut, EN, DE)
- Formulaire de contact : Formspree
- Hébergement cible : Netlify ou Vercel
- Domaine cible : `.tg` (non acheté à ce jour)

## Statut actuel

🟡 En cours de développement — Version 1 (MVP), voir `docs/backlog-taches.md`

## Règle d'or

**Aucune valeur de couleur, typographie, espacement ou contenu n'est improvisée.** Toute décision de contenu non confirmée par le client doit être signalée comme hypothèse dans le code (commentaire `// TODO: contenu à valider avec le client`) et listée dans `docs/contraintes-a-verifier.md`.
