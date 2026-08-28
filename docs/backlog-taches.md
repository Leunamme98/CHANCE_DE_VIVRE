# BACKLOG DE TÂCHES — V1 (MVP)

Légende : ⬜ à faire · 🟡 en cours · ✅ terminé

## Phase 0 — Setup projet

- ✅ Initialisation projet Angular (standalone components) — Angular 22.1.4, `frontend/`, routing + SCSS
- ✅ Configuration SCSS avec variables du design system (`_variables.scss`) — copie exacte de la charte, + `_mixins.scss`
- ✅ Configuration ngx-translate (fr/en/de) — `@ngx-translate/core` 18.0.0, fichiers `src/assets/i18n/{fr,en,de}.json` vides (structure prête)
- ✅ Configuration `@angular/service-worker` + manifest PWA — thème `#1E8A5B`, icônes 72→512px générées
- ✅ Configuration prerendering (`@angular/ssr`, mode `RenderMode.Prerender` sur toutes les routes) — 7 routes prerendues avec succès au build
- ✅ Mise en place du routing (6 pages) avec lazy loading — `loadComponent` par page, composants `features/*` vides générés

Détails et versions exactes : voir `docs/stack-technique.md`.

## Phase 1 — Fondations (layout + design system)

- ⬜ Header (logo, nav, sélecteur de langue)
- ⬜ Footer (coordonnées, réseaux, mentions)
- ⬜ Composants partagés : bouton, carte, badge (conformes au design system)
- ⬜ Modèles TS : `Mission`, `Projet`, `Partenaire`, `MessageContact`

## Phase 2 — Pages

- ⬜ Page Accueil (hero, aperçu 3 domaines, chiffres clés, CTA)
- ⬜ Page Qui sommes-nous (histoire, valeurs, zone d'action)
- ⬜ Page Nos missions (3 piliers + exemples réels)
- ⬜ Page Nos projets (galerie + données réelles Facebook)
- ⬜ Page Nos partenaires (logos + noms, séparé de l'identité ONG)
- ⬜ Page Contact (formulaire Formspree + coordonnées)

## Phase 3 — Contenu

- ⬜ Rédaction contenu FR (placeholder proche des posts Facebook réels)
- ⬜ Traduction EN
- ⬜ Traduction DE
- ⬜ Sélection et compression des photos (issues de Facebook)

## Phase 4 — Qualité avant lancement

- ⬜ Test responsive (mobile 360px → desktop 1920px)
- ⬜ Test PWA (installabilité, mode hors-ligne)
- ⬜ Test changement de langue sur toutes les pages
- ⬜ Audit Lighthouse (performance, SEO, accessibilité, PWA)
- ⬜ Vérification de la checklist `contraintes-a-verifier.md`

## Phase 5 — Déploiement

- ⬜ Déploiement sur Netlify/Vercel
- ⬜ Achat et connexion du domaine `.tg`
- ⬜ Vérification HTTPS actif

---

## Hors périmètre V1 (ne pas commencer sans validation client)

- Page Actualités
- Filtrage avancé des projets
- Espace donateur / paiement en ligne
- Back-office de gestion de contenu
- Backend + API + base de données
