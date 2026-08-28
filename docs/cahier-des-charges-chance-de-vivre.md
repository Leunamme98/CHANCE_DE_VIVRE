# CAHIER DES CHARGES
## Plateforme web « Chance de Vivre »

**Client** : ONG Chance De Vivre-Togo
**Document** : Cahier des charges fonctionnel et technique — Version 1 (MVP)
**Date** : 28 août 2026

---

## 1. VISION DU PRODUIT

| Élément | Description |
|---|---|
| Nom | Chance de Vivre |
| Objectif | Donner à l'ONG une visibilité en ligne professionnelle |
| Problème résolu | L'ONG n'a aujourd'hui aucune présence web propre (uniquement une page Facebook) alors qu'elle mène des actions concrètes et significatives depuis plusieurs années |
| Proposition de valeur | Un site vitrine qui présente la structure, ses missions, ses réalisations et ses partenaires, et qui permet d'être contacté — pour gagner en crédibilité auprès du public, des partenaires et futurs donateurs |

---

## 2. CONTEXTE MÉTIER

**Activité réelle de l'ONG** (vérifiée via la page Facebook officielle) :

- **Éducation** : construction et rénovation d'écoles publiques (EPP), don de tables-bancs
- **Santé** : campagnes de chirurgie de la cataracte, services d'ophtalmologie, santé maternelle et infantile
- **Économie locale** : activités génératrices de revenus pour les femmes (ex. production de savon)

**Zone d'action** : plusieurs localités du Togo (région Maritime — Tsévié, région des Plateaux — Agbonou, Anié, région de Kara, etc.)

**Partenaires actuels** : Tukolere Wamu e.V. (Allemagne), Ambassade d'Allemagne au Togo, Ministère de la Santé du Togo, Programme National de Santé Oculaire (PNSO)

---

## 3. UTILISATEURS

| Type d'utilisateur | Besoins | Objectifs sur le site |
|---|---|---|
| Visiteur grand public | Comprendre qui est l'ONG et ce qu'elle fait | Découvrir les missions, être rassuré sur le sérieux de la structure |
| Partenaire / institution | Vérifier la crédibilité et le sérieux de l'ONG | Consulter les réalisations, les partenaires existants, contacter |
| Futur donateur | Évaluer l'impact concret des actions | Voir des résultats chiffrés et des projets réels |
| Administrateur (le client) | Gérer et faire évoluer le contenu | Pouvoir maintenir le site après le lancement |

**Niveau numérique attendu des visiteurs** : mixte (grand public togolais mobile + partenaires institutionnels desktop) → nécessite un site simple, rapide, mobile-first.

---

## 4. CAS D'UTILISATION PRINCIPAUX

| Acteur | Action | Résultat attendu |
|---|---|---|
| Visiteur | Arrive sur la page d'accueil | Comprend en quelques secondes la mission de l'ONG |
| Visiteur | Consulte « Nos missions » | Découvre les 3 piliers d'action avec des exemples réels |
| Visiteur | Consulte « Nos projets » | Voit des réalisations concrètes (photos, résultats) |
| Visiteur | Consulte « Nos partenaires » | Identifie les institutions qui soutiennent l'ONG |
| Visiteur | Remplit le formulaire de contact | Envoie un message qui arrive à l'ONG (via Formspree) |
| Visiteur mobile | Installe le site en PWA | Accède au site comme une application, y compris hors ligne pour les pages déjà visitées |
| Visiteur non francophone | Change la langue (EN/DE) | Consulte le site dans sa langue |

---

## 5. FONCTIONNALITÉS

### 5.1 MVP — Obligatoire (Version 1)

**Pages** :
1. **Accueil** — Hero avec mission en une phrase, aperçu des 3 domaines d'action, chiffres clés (ex. « 27 personnes opérées », « 50 tables-bancs offertes »), CTA vers contact
2. **Qui sommes-nous** — Histoire de l'ONG, valeurs, zone d'action au Togo
3. **Nos missions** — Présentation des 3 piliers (Éducation / Santé / Économie locale) avec exemples concrets réels
4. **Nos projets** — Galerie de réalisations avec photos et descriptions
5. **Nos partenaires** — Logos et noms des partenaires (Tukolere Wamu, Ambassade d'Allemagne, etc.), présentés séparément de l'identité visuelle propre de l'ONG
6. **Contact** — Formulaire (nom, email, message) + coordonnées (téléphone, adresse à Tsévié)

**Fonctionnalités transverses** :
- Site responsive, mobile-first
- Progressive Web App (installable, fonctionnement hors-ligne des pages déjà visitées)
- Multilingue : français (par défaut), anglais, allemand
- Formulaire de contact fonctionnel sans backend (Formspree)
- Référencement (SEO) via prerendering

### 5.2 Important — Non bloquant pour le lancement

- Page « Actualités » reprenant les publications marquantes de la page Facebook
- Filtrage des projets par catégorie (Éducation / Santé / Économie)

### 5.3 Évolution future — Hors périmètre V1

- Espace donateurs et paiement en ligne
- Back-office de gestion de contenu sans code
- Backend + API + base de données (l'architecture V1 est conçue pour permettre cette évolution sans réécriture)
- Blog avec système d'articles
- Carte interactive des zones d'intervention

---

## 6. HYPOTHÈSES ET POINTS À CONFIRMER AVEC LE CLIENT

⚠️ **Points non encore validés à ce stade :**

- Textes définitifs (histoire de l'ONG, valeurs rédigées, chiffres exacts à afficher) — en attente du client, contenu provisoire à utiliser en attendant
- Domaine `.tg` — pas encore acheté (Namecheap ne le supporte pas ; un registrar spécialisé type ANAT Togo ou register.tg sera à identifier)
- Hébergement — non souscrit à ce stade
- Traductions EN/DE — à produire (pas de traducteur professionnel prévu pour la V1, traduction assistée à valider par un locuteur si possible)

---

## 7. CHARTE GRAPHIQUE À SUIVRE

**La charte graphique du projet est définitivement validée et documentée dans le fichier :**

> ### 📄 `design-system-chance-de-vivre.md`
> **Direction retenue : « Terre et espoir »**

Ce document contient l'ensemble des valeurs précises et non négociables du projet : couleurs (marque, neutres, sémantiques), typographie complète, espacements, rayons, ombres, composants (boutons, cartes, formulaires, badges, alertes, modales, navigation), iconographie, traitement des images, règles d'accessibilité et variables CSS prêtes à l'emploi.

**Toute réalisation graphique ou tout développement d'interface doit suivre ce document à la lettre.** Aucune valeur de couleur, de typographie ou d'espacement ne doit être improvisée ou modifiée sans validation explicite du client.

---

## 8. CONTRAINTES TECHNIQUES

| Domaine | Contrainte |
|---|---|
| Framework | Angular (composants standalone, lazy loading) |
| Données | Codées en dur dans des services TypeScript, structurées comme une future API (migration facilitée) |
| Performance | Images compressées (~150-200 Ko max), lazy loading des images, chargement utilisable en moins de 3-4 secondes sur connexion 3G |
| PWA | `@angular/service-worker`, manifest avec icônes 192px/512px, couleur thème `#1E8A5B`, cache des pages visitées |
| Multilingue | ngx-translate, fichiers `fr.json` / `en.json` / `de.json` éditables sans toucher au code |
| Compatibilité | Mobile-first, navigateurs modernes (Chrome, Safari, Firefox, Edge récents), pas de support IE11 |
| Hébergement | Statique — Netlify ou Vercel, HTTPS automatique (obligatoire pour la PWA) |
| Domaine | `.tg`, à connecter une fois acheté |
| SEO | Prerendering Angular activé (`@angular/ssg` ou Angular Universal en mode statique) |
| Formulaire de contact | Formspree (gratuit, sans backend), validation Angular Reactive Forms côté client |

---

## 9. LIVRABLES DU PROJET

- Document de compréhension du besoin *(présent document couvre cette base)*
- Cahier des charges fonctionnel — *ce document*
- Charte graphique — `design-system-chance-de-vivre.md`
- Code source Angular (site V1)
- Fichiers de traduction FR/EN/DE
- Manifest PWA + icônes
- Instructions de déploiement (Netlify/Vercel) et de connexion du domaine

---

*Ce document constitue la référence du périmètre V1. Toute fonctionnalité non listée dans la section 5.1 est considérée hors périmètre du lancement et doit faire l'objet d'une validation explicite avant développement.*
