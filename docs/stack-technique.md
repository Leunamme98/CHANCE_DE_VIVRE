# STACK TECHNIQUE — Chance de Vivre

Document tenu à jour à chaque ajout/mise à jour de dépendance. Ne pas se fier aux `^` de `package.json` : les versions ci-dessous sont celles réellement installées et testées.

Dernière mise à jour : 28 août 2026 (Phase 0 — Setup)

## Environnement machine

| Outil | Version installée | Rôle |
|---|---|---|
| Node.js | v24.19.0 (LTS) | Runtime JS nécessaire pour Angular CLI et le build |
| npm | 11.17.0 | Gestionnaire de paquets |
| Angular CLI | 22.1.6 | Génération de projet/composants, build, dev server |

## Dépendances applicatives (`frontend/package.json` → `dependencies`)

| Paquet | Version installée | Rôle dans le projet |
|---|---|---|
| `@angular/core` | 22.1.4 | Framework Angular — cœur (composants standalone, signals, DI) |
| `@angular/common` | 22.1.4 | Directives communes (`NgIf`, `NgFor`...), `HttpClient` |
| `@angular/compiler` | 22.1.4 | Compilation des templates Angular |
| `@angular/forms` | 22.1.4 | Reactive Forms — validation du formulaire de contact (page Contact) |
| `@angular/platform-browser` | 22.1.4 | Rendu navigateur + hydratation client (`provideClientHydration`) |
| `@angular/platform-server` | 22.1.4 | Rendu côté serveur, requis par `@angular/ssr` pour le prerendering |
| `@angular/router` | 22.1.4 | Routing des 6 pages, lazy loading (`loadComponent`) |
| `@angular/service-worker` | 22.1.4 | PWA — cache offline des pages visitées, installabilité |
| `@angular/ssr` | 22.1.6 | Prerendering statique de toutes les routes pour le SEO (remplace l'ancien Angular Universal/`@angular/ssg`) |
| `@ngx-translate/core` | 18.0.0 | Moteur i18n (FR/EN/DE), `TranslatePipe`, `provideTranslateService` |
| `@ngx-translate/http-loader` | 18.0.0 | Chargement des fichiers `i18n/*.json` via `HttpClient` |
| `express` | 5.2.1 | Serveur Node généré par `@angular/ssr` (utilisé seulement si hébergement SSR ; non nécessaire pour un déploiement 100% statique Netlify/Vercel) |
| `rxjs` | 7.8.2 | Observables — retour des services de données (`Observable<Projet[]>` etc., règle API-ready) |
| `tslib` | 2.8.1 | Helpers TypeScript runtime (dépendance transitive standard Angular) |

## Dépendances de développement (`devDependencies`)

| Paquet | Version installée | Rôle |
|---|---|---|
| `@angular/cli` | 22.1.6 | Commandes `ng generate`, `ng build`, `ng serve` |
| `@angular/build` | 22.1.6 | Builder esbuild/Vite utilisé par Angular CLI |
| `@angular/compiler-cli` | 22.1.4 | Compilation AOT |
| `typescript` | 6.0.3 | Langage du projet |
| `vitest` | 4.1.11 | Test runner unitaire (remplace Karma/Jasmine dans les projets Angular récents) |
| `jsdom` | 28.1.0 | Environnement DOM simulé pour les tests Vitest |
| `prettier` | 3.9.6 | Formatage de code automatique |
| `@types/express`, `@types/node` | 5.0.6 / 20.19.43 | Typage TS pour Express et Node (côté serveur SSR) |

## Choix d'architecture notables

- **Prerendering** : `@angular/ssr` est configuré en mode `RenderMode.Prerender` pour **toutes** les routes (`src/app/app.routes.server.ts`), donc chaque page est générée en HTML statique au build (`ng build`). Le dossier `dist/chance-de-vivre/browser/` est déployable tel quel sur un hébergeur statique (Netlify/Vercel), conformément au cahier des charges. Le bundle serveur Express (`server.mjs`) n'est utile que si un hébergement SSR à la demande est choisi plus tard.
- **Assets statiques** : le dossier source est `src/assets/` (et non `public/`, qui est le défaut Angular 22) pour respecter l'arborescence de `docs/normes-codage.md`. Son contenu est copié à la **racine** du build (comme l'aurait fait `public/`) — donc un fichier `src/assets/i18n/fr.json` est servi à l'URL `/i18n/fr.json`, **pas** `/assets/i18n/fr.json`. Le loader ngx-translate est configuré avec le préfixe `/i18n/` en conséquence.
- **Formulaire de contact — Netlify Forms, aucune dépendance npm** : le formulaire n'utilise ni SDK ni bibliothèque. Netlify détecte le formulaire au déploiement en analysant le HTML pré-rendu de `/contact` (`data-netlify="true"` + attributs `name` sur les champs), et les soumissions sont postées par `HttpClient` en `application/x-www-form-urlencoded` avec un champ `form-name`. Deux conséquences à connaître : (1) `responseType: 'text'` est obligatoire dans `contact.service.ts` car Netlify répond du HTML et non du JSON — sans ça un envoi réussi serait interprété comme une erreur ; (2) le formulaire **ne fonctionne pas en `ng serve`**, le point d'entrée n'existant que sur un déploiement Netlify. Remplace Formspree, qui était un service tiers supplémentaire plafonné à 50 envois/mois.
- **Déploiement — `netlify.toml` à la racine du dépôt.** Configuration en production :
  ```toml
  [build]
    command = "cd frontend && npm ci && npm run build"
    publish = "frontend/dist/chance-de-vivre/browser"
  [build.environment]
    NODE_VERSION = "24"
  ```
  ⚠️ **Ne pas réintroduire de clé `base`.** La première version de ce fichier utilisait `base = "frontend"` avec `publish = "dist/chance-de-vivre/browser"`. Résultat : Netlify a résolu le chemin vers un dossier inexistant, publié un déploiement **vide**, et répondu **404 sur toutes les routes** — tout en affichant un build « Complete » en vert. Aucune erreur n'apparaît nulle part, ce qui rend la panne très pénible à diagnostiquer. La documentation Netlify affirme que `publish` est relatif à `base`, mais le comportement a changé par le passé pour les dépôts à sous-dossiers. Sans `base`, `publish` est sans ambiguïté relatif à la racine du dépôt, et la commande gère elle-même le `cd frontend`.
  `NODE_VERSION` est épinglé à **24** et non `"22"` : Angular 22 exige `^20.19 || ^22.12 || ^24`, et `"22"` pourrait résoudre vers un 22.x antérieur à 22.12 que la CLI refuserait.
  Aucune redirection SPA n'est déclarée : les 4 routes étant pré-rendues en fichiers HTML réels, un catch-all `/* -> /index.html 200` transformerait les URL inexistantes en « soft 404 ». Des en-têtes `Cache-Control: no-cache` sont posés sur `ngsw-worker.js` et `ngsw.json` pour qu'un visiteur ne reste pas bloqué sur une version périmée du service worker.
- **Redirection à ajouter APRÈS l'achat du domaine.** Le sous-domaine `*.netlify.app` reste actif définitivement, même avec un domaine personnalisé. Pour éviter que Google n'indexe deux sites identiques, ajouter alors dans `netlify.toml` :
  ```toml
  [[redirects]]
    from = "https://chancedevivre-togo.netlify.app/*"
    to = "https://chancedevivre-togo.org/:splat"
    status = 301
    force = true
  ```
  ⚠️ **Ordre impératif** : acheter le domaine → le connecter à Netlify → vérifier qu'il répond en HTTPS → **puis seulement** ajouter cette redirection. L'ajouter avant rendrait le site totalement inaccessible, y compris depuis le `.netlify.app` qui est aujourd'hui la seule porte d'entrée.
- **Préfixe de sélecteur** : `angular.json` définit `"prefix": "cdv"` — tout composant généré via `ng generate component` produit un sélecteur `cdv-...`, conformément à `docs/normes-codage.md`.
