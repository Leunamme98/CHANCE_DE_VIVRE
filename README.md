# Chance de Vivre — Plateforme web

### 🌍 Site en ligne : **https://chancedevivre-togo.netlify.app**

Déployé automatiquement depuis la branche `main`. Cette adresse restera active même après la connexion du domaine définitif.

## Contexte

Site vitrine pour l'ONG **Chance De Vivre-Togo**, créée en mars 2012 et basée à Assomé, dans la préfecture de Zio (région Maritime, Togo). L'ONG agit sur 4 piliers : éducation, santé, économie locale, environnement. Ce projet donne à l'ONG une présence web professionnelle : présenter la structure, ses missions, ses réalisations, ses partenaires, et permettre le contact.

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

## Développer en local

```bash
cd frontend
npm install
npm start          # serveur de dev sur http://localhost:4200
npm run build      # build de production + pré-rendu des 4 routes
npm test           # tests unitaires (Vitest)
```

⚠️ **Le formulaire de contact ne fonctionne pas en local.** Il repose sur Netlify Forms, dont le point d'entrée n'existe que sur un déploiement Netlify : en `npm start`, l'envoi échoue et affiche le message d'erreur. Ce n'est pas une régression. Pour le tester, utiliser `netlify dev` ou une preview de déploiement.

## Déploiement

Automatique : tout push sur `main` déclenche un build et une publication sur Netlify. La configuration est dans `netlify.toml` à la racine — **lire la mise en garde sur la clé `base`** dans `docs/stack-technique.md` avant d'y toucher, elle a déjà provoqué une panne silencieuse (404 sur tout le site avec un build affiché en vert).

## Statut actuel

🟢 **Version 1 en ligne** sur l'URL Netlify, en attente de l'achat du domaine.

Reste à faire avant la livraison définitive — détail dans `docs/backlog-taches.md` :
- Achat et connexion du domaine `chancedevivre-togo.org`
- Création de la boîte `contact@chancedevivre-togo.org` (le lien `mailto:` affiché est aujourd'hui inactif)
- Vérification de la détection du formulaire et de la notification email côté Netlify
- Validation des contenus et photos par le client (`docs/contraintes-a-verifier.md`)

## Règle d'or

**Aucune valeur de couleur, typographie, espacement ou contenu n'est improvisée.** Toute décision de contenu non confirmée par le client doit être signalée comme hypothèse dans le code (commentaire `// TODO: contenu à valider avec le client`) et listée dans `docs/contraintes-a-verifier.md`.
