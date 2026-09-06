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

## Retours client — ergonomie mobile (6 septembre 2026)

Trois retours remontés après la mise en ligne, et leur traitement.

### 1. Hamburger peu visible sur mobile

- [x] Transformer le hamburger en **capsule bordée** (fond blanc, `$color-border`, `$shadow-sm`), identique au bloc logo à gauche — il se lit désormais comme un bouton et équilibre la barre
- [x] Épaissir les traits de **1,5 px à 2 px** et les passer du noir `#2B2A27` au **vert primaire** `#1E8A5B` pour signaler l'interactivité
- [x] Ajouter la **transformation en croix** à l'ouverture, avec état `--ouvert` et bordure verte
- [x] Conserver la zone tactile de 44 × 44 px imposée par la charte
- [x] Neutraliser l'animation sous `prefers-reduced-motion`
- [ ] Faire valider le rendu sur un téléphone réel par la personne à l'origine du retour

### 2. FR / EN / DE incompréhensibles

Décision du client : **drapeaux SVG**. Ils sont associés au **nom de la langue dans sa propre langue**, de sorte qu'un germanophone reconnaisse « Deutsch » même si le drapeau lui échappe.

- [x] Créer le composant `shared/drapeau-langue/` (patron repris de `icone-contact`), avec les drapeaux France, Royaume-Uni et Allemagne en SVG inline
- [x] Dessiner les trois drapeaux sur un cadre **3:2 commun** pour qu'ils aient tous exactement la même taille dans la liste
- [x] Ajouter un liseré interne sur chaque drapeau — sans lui, la bande blanche du drapeau français se fond dans le fond blanc du panneau
- [x] Afficher **Français / English / Deutsch** à côté de chaque drapeau
- [ ] ⚠️ **Point de vigilance signalé au client** : le header affiche déjà les drapeaux du Togo et de l'Allemagne à côté du logo, comme symbole du partenariat. Le drapeau allemand apparaît donc maintenant **deux fois avec deux sens différents** (langue et pays partenaire). À surveiller lors de la validation : si la confusion est réelle, retirer les drapeaux du sélecteur et ne garder que les noms

### 3. Langue introuvable sur mobile (enterrée dans le hamburger)

- [x] Sortir le sélecteur de langue du menu et le placer **dans la barre, à côté du hamburger**
- [x] Créer un déclencheur compact **globe + code de la langue courante** (`🌐 FR`), visible sans rien ouvrir
- [x] Ouvrir au clic un **panneau déroulant** listant les trois langues (`$shadow-md`, valeur que la charte désigne pour les menus déroulants)
- [x] Remplacer les trois pastilles par ce même composant en desktop : « Français English Deutsch » côte à côte ferait ~200 px contre 110 px, et déborderait à 768 px avec le logo, les trois liens et le bouton Contact
- [x] Conserver le dégradé vert des anciennes pastilles sur la langue active, pour la continuité visuelle
- [x] Fermeture au clic extérieur et à la touche Échap
- [x] Ouvrir un panneau ferme systématiquement l'autre (ils se recouvriraient sur mobile)
- [x] Attributs d'accessibilité : `aria-expanded`, `aria-haspopup`, `role="listbox"`, `role="option"`, `aria-selected`, `lang` sur chaque option
- [ ] Tester la navigation au clavier sur le panneau (Tab, Entrée, Échap)
- [ ] Vérifier le contraste du déclencheur et des options au lecteur de contraste

### Vérifications transverses

- [x] Build de production et 21 tests unitaires au vert
- [x] Sélecteur de langue confirmé **hors** de la nav dans le HTML pré-rendu
- [ ] Contrôle visuel sur mobile réel (360 px) et sur desktop (1920 px)
- [ ] Relancer l'audit Lighthouse (accessibilité) après ces changements

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

- ✅ Configuration de déploiement Netlify (`netlify.toml` : commande, dossier publié, version de Node, en-têtes de cache du service worker)
- ✅ **Site en ligne : https://chancedevivre-togo.netlify.app** — publication automatique à chaque push sur `main`, HTTPS actif
- ✅ Contenu du déploiement vérifié en direct : 4 domaines d'action, sous-titre « Quatre piliers », 14 réalisations réelles, 5 filtres, chiffres 500+ / 80+ / 12+ localités / 14+ années, attributs Netlify Forms présents dans le HTML servi

> **Panne rencontrée et résolue** — le premier déploiement répondait **404 sur toutes les routes** alors que Netlify affichait un build « Complete » en vert. Cause : la clé `base = "frontend"` dans `netlify.toml`, qui faisait résoudre `publish` vers un dossier inexistant et publier un déploiement vide, sans aucun message d'erreur. Corrigé en supprimant `base` et en donnant le chemin complet depuis la racine du dépôt. Détail et mise en garde dans `docs/stack-technique.md`.

- ⬜ Vérifier que le formulaire `contact` est bien détecté dans l'onglet *Forms* de Netlify (la détection se fait au build ; si elle échoue, les envois retournent une erreur sans autre signal)
- ⬜ Configurer la notification email des soumissions côté tableau de bord Netlify (sans ça, les messages sont enregistrés mais personne n'est prévenu)
- ⬜ Supprimer le formulaire de test côté compte Formspree
- ⬜ Achat du domaine `chancedevivre-togo.org` chez Netmaster (15 000 FCFA/an)
- ⬜ Connexion du domaine à Netlify + vérification HTTPS actif
- ⬜ Création de la boîte ou de la redirection `contact@chancedevivre-togo.org`
- ⬜ **Après** que le domaine réponde en HTTPS : ajouter la redirection 301 du `.netlify.app` vers le domaine (`docs/stack-technique.md`) — à ne surtout pas faire avant, sous peine de rendre le site inaccessible
- ⬜ (Optionnel) Achat du `.tg` chez Netmaster (10 000 FCFA/an), redirigé vers le `.org`

---

## Hors périmètre V1 (ne pas commencer sans validation client)

- Page Actualités
- Filtrage avancé des projets
- Espace donateur / paiement en ligne
- Back-office de gestion de contenu
- Backend + API + base de données
