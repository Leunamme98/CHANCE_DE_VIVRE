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

- ✅ Header (logo, nav 6 pages, sélecteur de langue FR/EN/DE, menu mobile)
- ✅ Footer (coordonnées, réseaux, navigation, mentions)
- ✅ Composants partagés : `cdv-bouton` (4 variantes), `cdv-carte`, `cdv-badge` (conformes au design system)
- ✅ Modèles TS : `Mission`, `Projet`, `Partenaire`, `MessageContact`, `Organisation`, `ChiffreCle`
- ✅ Services associés (`missions`, `projets`, `partenaires`, `chiffres-cles`, `organisation`, `contact`, `seo`)

## Phase 2 — Pages

Architecture simplifiée à 4 pages (décision prise après un premier passage à 6 pages séparées) :

- ✅ Page Accueil `/` (hero, aperçu 4 domaines sur une ligne, chiffres clés, CTA)
- ✅ Page À propos `/a-propos` (fusion : histoire, valeurs, zone d'action, 4 missions + exemples réels, galerie partenaires, partenaires)
- ✅ Page Nos projets `/projets` (14 réalisations réelles issues des publications du client, filtrables par domaine)
- ✅ Page Contact `/contact` (formulaire réactif avec validation + intégration Netlify Forms, coordonnées) — mise en avant en bouton plein dans la navigation

Build de production (`ng build`) et tests unitaires (`ng test`, 21/21) validés. Les projets, la zone
d'action, l'année de création et les photos reposent désormais sur les publications officielles
fournies par le client ; les placeholders restants sont explicitement marqués `TODO`
(voir `docs/contraintes-a-verifier.md`).

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

- ✅ Configuration de déploiement Netlify (`netlify.toml` : base, commande, dossier publié, version de Node, en-têtes de cache du service worker)
- ⬜ Création du site sur Netlify et premier déploiement depuis GitHub
- ⬜ Vérifier que le formulaire `contact` est bien détecté dans l'onglet *Forms* de Netlify
- ⬜ Configurer la notification email des soumissions côté tableau de bord Netlify
- ⬜ Achat du domaine `chancedevivre-togo.org` chez Netmaster (15 000 FCFA/an)
- ⬜ Connexion du domaine à Netlify + vérification HTTPS actif
- ⬜ Création de la boîte ou de la redirection `contact@chancedevivre-togo.org`
- ⬜ Supprimer le formulaire de test côté compte Formspree
- ⬜ (Optionnel) Achat du `.tg` chez Netmaster (10 000 FCFA/an), redirigé vers le `.org`

---

## Hors périmètre V1 (ne pas commencer sans validation client)

- Page Actualités
- Filtrage avancé des projets
- Espace donateur / paiement en ligne
- Back-office de gestion de contenu
- Backend + API + base de données
