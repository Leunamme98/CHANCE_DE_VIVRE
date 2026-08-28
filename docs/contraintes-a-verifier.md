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
