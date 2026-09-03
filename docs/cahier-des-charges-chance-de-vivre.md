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
- **Santé** : campagnes de chirurgie de la cataracte, services d'ophtalmologie, santé maternelle et infantile, sensibilisation au VIH/SIDA (Journée mondiale de lutte contre le VIH/SIDA à Assomé, 1er décembre 2018 : caravane à travers le village, projection d'un film, kermesse pour les jeunes, dépistage)
- **Économie locale** : activités génératrices de revenus pour les femmes (ex. production de savon)
- **Environnement** : valorisation des plantes locales et de la médecine naturelle — culture, pépinières et vulgarisation du Moringa et de l'Artémisia Annua (publication officielle du 23 octobre 2018)

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
| Visiteur | Consulte « Nos missions » | Découvre les 4 piliers d'action avec des exemples réels |
| Visiteur | Consulte « Nos projets » | Voit des réalisations concrètes (photos, résultats) |
| Visiteur | Consulte « Nos partenaires » | Identifie les institutions qui soutiennent l'ONG |
| Visiteur | Remplit le formulaire de contact | Envoie un message qui arrive à l'ONG (via Netlify Forms) |
| Visiteur mobile | Installe le site en PWA | Accède au site comme une application, y compris hors ligne pour les pages déjà visitées |
| Visiteur non francophone | Change la langue (EN/DE) | Consulte le site dans sa langue |

---

## 5. FONCTIONNALITÉS

### 5.1 MVP — Obligatoire (Version 1)

**Pages** — architecture simplifiée à 4 pages (décision prise en cours de développement, remplace la liste initiale à 6 pages) :
1. **Accueil** (`/`) — Hero avec mission en une phrase, aperçu des 4 domaines d'action (alignés sur une seule ligne en desktop), chiffres clés (ex. « 27 personnes opérées », « 50 tables-bancs offertes »), CTA vers contact
2. **À propos** (`/a-propos`) — Page fusionnée : histoire de l'ONG, valeurs, zone d'action au Togo, présentation des 4 piliers de missions (Éducation / Santé / Économie locale / Environnement) avec exemples concrets réels, et logos/noms des partenaires (Tukolere Wamu, Ambassade d'Allemagne, etc.), présentés séparément de l'identité visuelle propre de l'ONG
3. **Nos projets** (`/projets`) — Galerie de réalisations avec photos et descriptions
4. **Contact** (`/contact`) — Formulaire (nom, email, message) + coordonnées (téléphone, adresse à Tsévié) ; mis en avant dans la navigation sous forme de bouton plein, visuellement distinct des 3 autres liens

**Fonctionnalités transverses** :
- Site responsive, mobile-first
- Progressive Web App (installable, fonctionnement hors-ligne des pages déjà visitées)
- Multilingue : français (par défaut), anglais, allemand
- Formulaire de contact fonctionnel sans backend (Netlify Forms)
- Référencement (SEO) via prerendering

### 5.2 Important — Non bloquant pour le lancement

- Page « Actualités » reprenant les publications marquantes de la page Facebook
- Filtrage des projets par catégorie (Éducation / Santé / Économie / Environnement)

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
- Domaine — **décision prise en cours de projet : `chancedevivre-togo.org`**, pas encore acheté. Le `.tg` initialement visé reste possible en complément (redirigé vers le `.org`). Registrar identifié : **Netmaster** (Lomé, accrédité ARCEP) — `.org` à 15 000 FCFA/an, `.tg` à 10 000 FCFA/an, payables localement. Le `.tg` ne s'enregistre que via un registrar accrédité (registre : CAFE Informatique & Télécommunications), sans obligation de résidence togolaise. Prendre le `.tg` à l'international coûterait jusqu'à 126 $/an pour le même domaine
- Le nom court `chancedevivre.com` est **déjà pris** ; `chancedevivre.org` est libre au moment de la vérification
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
| Hébergement | Statique — **Netlify** (offre gratuite), HTTPS automatique Let's Encrypt (obligatoire pour la PWA). Vercel écarté : son offre gratuite interdit l'usage commercial |
| Domaine | `chancedevivre-togo.org`, à connecter une fois acheté |
| SEO | Prerendering Angular activé (`@angular/ssg` ou Angular Universal en mode statique) |
| Formulaire de contact | Netlify Forms (gratuit, soumissions illimitées sur les offres à crédits, sans backend), validation Angular Reactive Forms côté client |

---

## 9. LIVRABLES DU PROJET

- Document de compréhension du besoin *(présent document couvre cette base)*
- Cahier des charges fonctionnel — *ce document*
- Charte graphique — `design-system-chance-de-vivre.md`
- Code source Angular (site V1)
- Fichiers de traduction FR/EN/DE
- Manifest PWA + icônes
- Instructions de déploiement et de connexion du domaine — livrées sous forme de configuration exécutable (`netlify.toml`) plutôt que de documentation à appliquer à la main, complétée par `docs/stack-technique.md`
- **Site déployé et accessible : https://chancedevivre-togo.netlify.app** (publication automatique à chaque push sur `main`, HTTPS actif)

---

*Ce document constitue la référence du périmètre V1. Toute fonctionnalité non listée dans la section 5.1 est considérée hors périmètre du lancement et doit faire l'objet d'une validation explicite avant développement.*
