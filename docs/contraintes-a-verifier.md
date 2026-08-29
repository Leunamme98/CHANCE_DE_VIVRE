# CONTRAINTES À TOUJOURS VÉRIFIER

À revalider avant chaque livraison de page ou de fonctionnalité — ne pas attendre la fin du projet.

## Design & charte graphique

- [ ] Toutes les couleurs utilisées existent dans `design-system-chance-de-vivre.md` (aucune couleur inventée)
- [ ] Typographie conforme (Poppins pour titres, Inter pour texte courant)
- [ ] Espacements conformes à l'échelle 4/8/12/16/24/32/48/64px
- [ ] Contraste texte/fond conforme (section 8 du design system)

## Contenu

- [ ] Aucun texte définitif présenté comme validé s'il ne l'a pas été par le client (placeholder signalé si besoin)
- [ ] Aucun chiffre inventé — uniquement des chiffres confirmés (ex: issus des posts Facebook officiels)
- [ ] Le logo du/des partenaires n'est jamais utilisé comme identité principale de l'ONG

## Technique

- [ ] Toute donnée passe par un service Angular typé (jamais en dur dans un composant)
- [ ] Images compressées (~150-200 Ko max), lazy loading actif
- [ ] Toutes les clés de traduction existent dans les 3 fichiers (fr/en/de)
- [ ] Aucun texte en dur dans les templates HTML (toujours via i18n)
- [ ] Formulaire de contact validé côté client avant envoi (champs requis, format email)

## PWA & performance

- [ ] Manifest valide (icônes 192px et 512px présentes)
- [ ] Service worker actif et testé (page visitée accessible hors-ligne)
- [ ] HTTPS actif (obligatoire pour PWA)
- [ ] Temps de chargement testé sur connexion simulée 3G

## SEO

- [ ] Prerendering actif sur toutes les pages
- [ ] Balises title/description définies par page (dans chaque langue)

## Accessibilité

- [ ] Tous les boutons/liens ont un libellé clair
- [ ] Toutes les images ont un `alt` descriptif
- [ ] Navigation clavier testée (focus visible)

## Avant chaque mise en ligne

- [ ] Audit Lighthouse relancé (performance / SEO / accessibilité / PWA)
- [ ] Vérification sur mobile réel (pas seulement le simulateur navigateur)
- [ ] Backlog (`backlog-taches.md`) mis à jour

## Hypothèses de contenu à valider avec le client (Phase 1/2)

Placeholders introduits dans les services `core/services/*` — à valider avant mise en ligne :

- [ ] **Chiffres clés accueil** (`chiffres-cles.service.ts`) : « 27 personnes opérées », « 50 tables-bancs », « 4+ localités » — le cahier des charges ne donne que des *exemples* de type de chiffre (section 5.1), pas des valeurs confirmées
- [ ] **Descriptions des 3 missions** (`missions.service.ts`) : faits d'activité confirmés (cahier des charges section 2), mais formulation éditoriale non validée par le client
- [ ] **Projets de la galerie** (`projets.service.ts`) : titres, descriptions et dates sont des placeholders — seules les zones géographiques (Tsévié, Kara, Agbonou, Anié) sont confirmées. Les 4 photos réelles fournies par le client ont été associées aux projets par correspondance visuelle (contenu de la photo vs. sujet du projet), pas par confirmation explicite du client — à valider que chaque photo illustre bien le bon projet (le don de tables-bancs à Anié réutilise la photo `hero-02-enfants-tables-bancs`, faute de photo dédiée)
- [ ] **Galerie photos "À propos"** (`a-propos-galerie.service.ts`, 3 photos `apropos-01/02/03`) : légendes rédigées par Claude à partir du contenu visuel des photos (aucune information sur la date, le lieu exact ou les personnes présentes) — à faire valider par le client
- [ ] **Galerie photos "Projets" sur l'accueil** (`projets-galerie.service.ts`, 3 photos `projets-01/02/03`) : mini-carrousel dédié à l'accueil, légendes rédigées par Claude à partir du contenu visuel des photos — à faire valider par le client
- [ ] **Logos partenaires** (`partenaires.service.ts`) : noms confirmés (cahier des charges section 2), fichiers logo réels non fournis à ce stade — chemins `assets/images/partenaires/*.png` à remplacer
- [ ] **Endpoint Formspree** (`contact.service.ts`) : URL placeholder `https://formspree.io/f/TODO_FORM_ID` — à remplacer par l'ID de formulaire réel une fois créé
- [ ] **Email de contact** (`organisation.service.ts`) : `contact@chancedevivre-togo.org` est un placeholder non confirmé — adresse, téléphone, WhatsApp, Messenger et Facebook sont désormais confirmés par le client. L'email reste affiché tel quel sur la page Contact (`contact.html`), non retiré (hors périmètre de la refonte du footer)
- [ ] **Textes narratifs FR** (`assets/i18n/fr.json` — histoire de l'ONG, valeurs, sous-titres) : premier jet éditorial basé sur les faits confirmés du cahier des charges, formulation non validée par le client
- [ ] **Traductions EN/DE** (`assets/i18n/en.json`, `de.json`) : traduction assistée (pas de traducteur professionnel pour la V1, conformément au cahier des charges section 6) — à faire relire par un locuteur natif avant mise en ligne
