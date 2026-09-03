# Chance de Vivre — Plateforme web

## Contexte

Site vitrine pour l'ONG **Chance De Vivre-Togo**, basée à Tsévié (région Maritime, Togo). L'ONG agit sur 4 piliers : éducation, santé, économie locale, environnement. Ce projet donne à l'ONG une présence web professionnelle : présenter la structure, ses missions, ses réalisations, ses partenaires, et permettre le contact.

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
- Formulaire de contact : Netlify Forms (aucun service tiers en plus de l'hébergeur)
- Hébergement : **Netlify** — offre gratuite. Vercel a été écarté : son offre gratuite (Hobby) interdit contractuellement l'usage commercial, ce qui exposerait l'ONG le jour où elle ajouterait un appel aux dons
- Domaine cible : **`chancedevivre-togo.org`** (non acheté à ce jour — 15 000 FCFA/an chez Netmaster, Lomé). Le `.tg` reste envisagé en complément, redirigé vers le `.org`

## Statut actuel

🟡 En cours de développement — Version 1 (MVP), voir `docs/backlog-taches.md`

## Règle d'or

**Aucune valeur de couleur, typographie, espacement ou contenu n'est improvisée.** Toute décision de contenu non confirmée par le client doit être signalée comme hypothèse dans le code (commentaire `// TODO: contenu à valider avec le client`) et listée dans `docs/contraintes-a-verifier.md`.
