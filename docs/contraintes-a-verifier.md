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

- [ ] **Chiffres clés accueil** (`chiffres-cles.service.ts`) : « 500+ personnes soignées », « 80+ bâtiments et équipements scolaires », « 4+ localités » — le cahier des charges ne donne que des *exemples* de type de chiffre, formulés de façon plus large ici (santé/éducation au sens large plutôt qu'un seul type d'acte), valeurs à confirmer avec le client
- [ ] **Année de création de l'ONG** (`chiffres-cles.service.ts`, constante `ANNEE_CREATION`) : fixée à 2015 à titre provisoire (non documentée dans le projet) — détermine le chiffre « Années d'engagement au Togo », recalculé automatiquement chaque année une fois la vraie date confirmée
- [ ] **Descriptions des 3 missions** (`missions.service.ts`) : faits d'activité confirmés (cahier des charges section 2), mais formulation éditoriale non validée par le client
- [ ] **Projets de la galerie** (`projets.service.ts`) : titres, descriptions et dates sont des placeholders — seules les zones géographiques (Tsévié, Kara, Agbonou, Anié) sont confirmées. Les 4 photos réelles fournies par le client ont été associées aux projets par correspondance visuelle (contenu de la photo vs. sujet du projet), pas par confirmation explicite du client — à valider que chaque photo illustre bien le bon projet (le don de tables-bancs à Anié réutilise la photo `hero-02-enfants-tables-bancs`, faute de photo dédiée)
- [ ] **Galerie photos "À propos"** (`a-propos-galerie.service.ts`, 3 photos `apropos-01/02/03`) : légendes rédigées par Claude à partir du contenu visuel des photos (aucune information sur la date, le lieu exact ou les personnes présentes) — à faire valider par le client
- [ ] **Galerie photos "Projets" sur l'accueil** (`projets-galerie.service.ts`, 3 photos `projets-01/02/03`) : mini-carrousel dédié à l'accueil, légendes rédigées par Claude à partir du contenu visuel des photos — à faire valider par le client
- [ ] **Logos partenaires** (`partenaires.service.ts`) : noms confirmés (cahier des charges section 2). 4 fichiers fournis par le client, intégrés dans `assets/images/partenaires/` — mais 2 sont des substituts imparfaits, à remplacer dès que possible :
  - `tukolere-wamu.png` : le fichier fourni était la couverture scannée d'un bulletin ("Tukolere Zeitung" n°34, 2e semestre 2012), pas un logo isolé — recadré et nettoyé (retrait de la mention du numéro/année et de la citation coupée) pour ne garder que le bandeau "Tukolere Zeitung" + la carte Afrique ; reste un visuel de bulletin, pas un vrai logo d'association
  - `ambassade-allemagne.jpg` : photo générique de drapeau allemand (rendu 3D), pas l'emblème officiel de l'ambassade — style photo réaliste qui tranche avec les 3 autres logos plats
  - `ministere-sante-togo.png` et `pnso.jpg` : logos officiels propres, fournis tels quels, aucune réserve
- [ ] **Endpoint Formspree** (`contact.service.ts`) : URL placeholder `https://formspree.io/f/TODO_FORM_ID` — à remplacer par l'ID de formulaire réel une fois créé
- [ ] **Copie du message envoyée à l'expéditeur** (`contact.service.ts`, champ spécial Formspree `_cc`) : dépend du plan tarifaire du compte Formspree utilisé — à vérifier une fois le vrai compte/formulaire créé (le site n'a pas de backend propre, cf. cahier des charges section 5.1, donc pas d'envoi SMTP possible en dehors de Formspree)
- [ ] **Email de contact** (`organisation.service.ts`) : `contact@chancedevivre-togo.org` est un placeholder non confirmé — adresse, téléphone, WhatsApp, Messenger et Facebook sont désormais confirmés par le client. L'email reste affiché tel quel sur la page Contact (`contact.html`), non retiré (hors périmètre de la refonte du footer)
- [ ] **Textes narratifs FR** (`assets/i18n/fr.json` — histoire de l'ONG, valeurs, sous-titres) : premier jet éditorial basé sur les faits confirmés du cahier des charges, formulation non validée par le client
- [ ] **Traductions EN/DE** (`assets/i18n/en.json`, `de.json`) : traduction assistée (pas de traducteur professionnel pour la V1, conformément au cahier des charges section 6) — à faire relire par un locuteur natif avant mise en ligne
