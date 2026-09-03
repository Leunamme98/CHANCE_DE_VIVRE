# CONTRAINTES À TOUJOURS VÉRIFIER

À revalider avant chaque livraison de page ou de fonctionnalité — ne pas attendre la fin du projet.

## Design & charte graphique

- [ ] Toutes les couleurs utilisées existent dans `design-system-chance-de-vivre.md` (aucune couleur inventée)
- [ ] ⚠️ **Couleurs « tertiaire » du pilier Environnement à faire valider** : `#4E9A2F` / `#3B7522` / `#E2F3D9` (vert feuille) ont été ajoutées à la charte (section 1.1 + badges 5.4) pour habiller le 4e domaine, mais choisies par Claude et **non validées par le client** — c'est la seule entorse à la règle « aucune couleur improvisée ». Vert volontairement tiré vers le jaune-vert pour ne pas se confondre avec le vert menthe/palmier de la catégorie « Économie ». Contrastes vérifiés : texte `#3B7522` sur fond `#E2F3D9` = 4,8:1 et texte blanc sur `#3B7522` = 5,6:1 (≥ 4,5:1, conforme AA)
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

- [ ] **Chiffres clés accueil** (`chiffres-cles.service.ts`) : « 500+ personnes soignées » et « 80+ bâtiments et équipements scolaires » restent des ordres de grandeur non confirmés — à valider avec le client. Le chiffre « localités » est passé de « 4+ » à « 12+ » : 14 localités sont désormais nommément documentées par les publications fournies (Assomé, Davié, Tsévié, Kpalimé, Agodeke, Yokélé, Avetonou, Danyi N'Digbé, Hiheatro, Bafilo, N'Kassaïdé, Batambouré, Agbonou, Anié), sur 4 des 5 régions du pays
- [x] ~~**Année de création de l'ONG**~~ : confirmée. La publication sur l'inauguration de la maison des jeunes indique « Créée en Mars 2012 » — `ANNEE_CREATION` est passée de 2015 (provisoire) à 2012, ce qui porte « Années d'engagement au Togo » à 14+
- [ ] **Descriptions des 4 missions** (`missions.service.ts`) : faits d'activité confirmés (cahier des charges section 2), mais formulation éditoriale non validée par le client. Le pilier **Environnement**, ajouté après coup à la demande du client, s'appuie sur une seule publication officielle (« Médecine naturelle : Vulgarisation de Moringa et d'Artémisia Annua », 23 octobre 2018) : à confirmer que ce pilier couvre bien d'autres actions que celle-ci, et à compléter le cas échéant
- [x] ~~**Projets placeholders**~~ : supprimés. Les 4 projets inventés ont été remplacés par **14 réalisations réelles** documentées par les publications officielles fournies par le client (maison des jeunes d'Assomé, tables-bancs N'Kassaïdé et Yokélé, eau potable Yokélé, bâtiments scolaires Agodeke / Batambouré, rénovation CEG Bafilo, USP Danyi N'Digbé, vaccination CMS Hiheatro, consultation prénatale, journée VIH/SIDA, production de savon, Moringa/Artémisia). Titres, lieux et sujets proviennent des publications, plus des placeholders
- [ ] **Dates et lieux manquants sur les cartes projets** (`projets.service.ts`) : `date` et `lieu` sont désormais **optionnels** dans le modèle et ne sont renseignés que lorsque la publication d'origine les mentionne, plutôt que devinés. Seuls 4 projets ont une année confirmée (2018 pour la maison des jeunes, la journée VIH/SIDA et le Moringa ; 2020 pour les tables-bancs de Yokélé et le savon). À compléter si le client fournit les dates des autres
- [ ] **Campagne de cataracte** (`projets.service.ts`) : activité confirmée par le cahier des charges section 2, mais aucune publication détaillée n'a été fournie — ni date, ni lieu, ni photo dédiée (la carte réutilise `projets-03-inauguration-sante`). À documenter avec le client
- [x] ~~**Doublon dans la galerie "Nos partenaires sur le terrain"**~~ : corrigé. `apropos-01-partenaires-terrain` et `apropos-04-partenaire-micro` (issue de `don 3.jpg`) étaient **le même cliché** à deux cadrages près, affiché deux fois dans la même grille avec deux légendes différentes. Erreur introduite en n'ayant pas comparé les nouvelles sources aux images déjà présentes. `apropos-01` a été retirée
- [ ] **Galerie "Nos partenaires sur le terrain"** (`a-propos-galerie.service.ts`) : portée à **6 photos distinctes**, soit 2 lignes pleines de 3 en desktop — visite aux communautés · coupure du ruban de la maison des jeunes · prise de parole avec les partenaires · mères de Hiheatro devant l'inscription « Projet réalisé par l'ONG Chance de Vivre avec l'appui financier de Tukolere Wamu Allemagne » · remise des clés · certificat d'honneur Covid-19. Légendes rédigées par Claude — à faire valider
- [x] ~~**Date de l'antenne de vaccination du CMS Hiheatro**~~ : confirmée à **2020**, lue sur la plaque commémorative du bâtiment visible sur `cms 1.jpg` (« Ce 15 Janvier 2020 »)
- [x] ~~**Mention « Rue » dans l'adresse**~~ : retirée à la demande du client — l'adresse affichée est désormais `Assomé, Tsévié, Togo`
- [x] ~~**Numéro de téléphone**~~ : le client a confirmé que `+228 99 57 91 71` sert **à la fois aux appels et à WhatsApp**, et remplace l'ancien `+228 90 19 25 82`. Les rubriques « Téléphone » et « WhatsApp » du pied de page et de la page Contact affichent donc le même numéro, avec deux liens différents (`tel:` et `wa.me`). À fusionner en une seule entrée si le client trouve la répétition gênante
- [x] ~~**Légende erronée du 1er slide du carrousel d'accueil**~~ : corrigée. `hero-01-foule-ecole` était légendée « Des centaines d'enfants rassemblés pour l'ouverture d'une école rénovée » alors qu'elle documentait la **Journée mondiale de lutte contre le VIH/SIDA à Assomé (1er décembre 2018)** — erreur signalée par le client. Le fichier a été supprimé et remplacé par deux photos du même événement fournies par le client : `hero-01-sida-assome-rassemblement` (slide 1) et `hero-05-sida-assome-kermesse` (slide 5)
- [x] ~~**Journée VIH/SIDA absente de la page Projets**~~ : ajoutée comme projet (catégorie Santé), illustrée par la photo de la kermesse
- [ ] **Toutes les légendes de photos** (`HERO.SLIDE_1` à `_6`, `PROJETS.GALERIE_PHOTO_1` à `_6`, `A_PROPOS.GALERIE_PHOTO_1` à `_5`) : rédigées par Claude à partir du contenu visuel et des publications d'origine — formulations à valider par le client
- [ ] **Carrousel d'accueil recomposé** (`hero-carousel.service.ts`) : 6 diapositives, une par pilier (eau potable Yokélé, tables-bancs Yokélé, journée VIH/SIDA Assomé, savon des femmes, Artémisia, danse communautaire). Les anciennes `hero-02-enfants-tables-bancs`, `hero-04-lavage-mains` et `hero-05-sida-assome-kermesse` ne sont plus dans le carrousel (la dernière sert de photo au projet VIH/SIDA)
- [ ] **⚠️ Photos écartées pour cause de montage ou de basse définition** — parmi les ~69 sources fournies, une part importante n'est **pas exploitable** sur le site et n'a pas été intégrée :
  - **Montages / collages avec texte incrusté** (grilles PhotoGrid, mentions « avant / après », filigrane « chance de vivre ») : `usp 3`, `kara`, `toit`, `savane`, `savane 2`, `bafilo 1`, `prudence 2/3/4`, `noel 1`. Le texte gravé dans le pixel devient illisible au recadrage, ne se traduit pas en EN/DE et entre en conflit avec la charte graphique. **Conséquence : deux réalisations réelles n'apparaissent pas sur le site** faute de photo brute — le toit de l'EPP d'Avetonou et les toilettes du CEG de Bafilo (cette dernière est mentionnée dans la description du projet Bafilo). À réintégrer si le client fournit les photos d'origine non montées
  - **Volet Covid-19 entièrement inexploitable** : les 4 photos `prudence*` sont soit des collages, soit en 590 px avec bordure et filigrane. La distribution de kits (25 dispositifs de lavage, 1500 masques, 200 désinfectants…) n'est donc **pas représentée** sur le site. Photos d'origine à demander
  - **Basse définition ou flou marqué** : `usp 1`, `remerciements 1`, `prudence 1`, `eau 1`, `visiteur 1` (590 px, captures d'écran), `cms 4`, `amelioration`, `amelioration 3`, `construction 1`, `don 2`, `sida 3`
  - **`sensibilisation2.jpg` écartée pour un motif de dignité** : elle montre une patiente allongée, identifiable, sur une table d'examen en cours d'échographie. Publier cette image sur un site public poserait un problème de consentement — à ne pas intégrer, même si le client la propose, sans accord écrit de la personne
  - **`visite.jpg`** : c'est la photographie d'une coupure de presse allemande (article sur le financement du centre de jeunes par Tukolere Wamu), pas une photo. Elle conviendrait à une future rubrique « revue de presse », pas à une galerie
- [ ] **6 photos intégrées mais non utilisées** dans `assets/images/accueil/` (~437 Ko embarqués inutilement dans le build et pré-cachés par le service worker) : `environnement-02` (pépinière d'Artémisia), `environnement-05` (semences de Moringa), `hero-02-enfants-tables-bancs`, `hero-04-lavage-mains`, `projets-02-sensibilisation`, `apropos-01-partenaires-terrain` (le doublon retiré). À placer quelque part ou à supprimer — conservées pour l'instant car ce sont des photos du client
- [ ] **⚠️ Définition des sources insuffisante pour le plein écran** : aucune photo fournie ne dépasse 1080 px de large, et le carrousel les affiche en pleine largeur (jusqu'à ~1920 px) avec un zoom progressif, soit un agrandissement d'environ 2×. Un masque de netteté a été appliqué à toutes les photos intégrées, mais **le détail manquant ne peut pas être recréé**. Demander au client les fichiers d'origine avant compression Facebook (typiquement 3000-4000 px) ; à défaut, envisager de réduire l'amplitude du zoom du carrousel
- [x] ~~**Poids des photos Environnement**~~ : traité — les 5 photos ont été repassées au masque de netteté doux + mozjpeg q68 (feuillage dense : une netteté plus forte faisait *gonfler* le fichier). Ramenées de 162-184 Ko brut à 74-163 Ko, dans la fourchette du cahier des charges
- [ ] **Lieu du projet Moringa/Artémisia** (`projets.service.ts`) : non communiqué par le client, le champ `lieu` est volontairement omis (la carte n'affiche que l'année). À renseigner si le client fournit la localité
- [ ] **Logos partenaires** (`partenaires.service.ts`) : noms confirmés (cahier des charges section 2). 4 fichiers fournis par le client, intégrés dans `assets/images/partenaires/` — mais 2 sont des substituts imparfaits, à remplacer dès que possible :
  - `tukolere-wamu.png` : le fichier fourni était la couverture scannée d'un bulletin ("Tukolere Zeitung" n°34, 2e semestre 2012), pas un logo isolé — recadré et nettoyé (retrait de la mention du numéro/année et de la citation coupée) pour ne garder que le bandeau "Tukolere Zeitung" + la carte Afrique ; reste un visuel de bulletin, pas un vrai logo d'association
  - `ambassade-allemagne.jpg` : photo générique de drapeau allemand (rendu 3D), pas l'emblème officiel de l'ambassade — style photo réaliste qui tranche avec les 3 autres logos plats
  - `ministere-sante-togo.png` et `pnso.jpg` : logos officiels propres, fournis tels quels, aucune réserve
- [x] ~~**Formspree**~~ : abandonné au profit de **Netlify Forms**, sur décision du client. Plus aucun service tiers en dehors de l'hébergeur, et les soumissions sont gratuites et illimitées sur les offres à crédits de Netlify (contre 50/mois chez Formspree). Le formulaire de test créé pendant la mise au point **reste à supprimer côté compte Formspree** par le client (identifiant volontairement non recopié ici : ce dépôt est public, et un formulaire encore actif pourrait être inondé de spam)
- [ ] **⚠️ Le formulaire ne peut plus être testé en local** : Netlify Forms n'existe que sur un déploiement Netlify. En `ng serve`, le POST vers `/` n'est intercepté par personne et le formulaire affiche l'erreur. Tester avec `netlify dev` ou sur une preview de déploiement — **ne pas conclure à une régression** en voyant l'échec en local
- [ ] **À vérifier après le premier déploiement** : que le formulaire `contact` apparaisse bien dans l'onglet *Forms* du tableau de bord Netlify. La détection se fait au build en analysant le HTML pré-rendu ; si elle échoue, les soumissions retournent une 404 sans autre signal
- [ ] **Notification email à configurer côté Netlify** : aucune adresse de destination n'est dans le dépôt (c'est voulu). Sans configuration dans le tableau de bord, les messages sont stockés dans Netlify mais **personne n'est prévenu**
- [ ] **Fonction perdue au passage à Netlify Forms** : la copie du message envoyée à l'expéditeur (l'ancien champ Formspree `_cc`) n'a pas d'équivalent intégré. À rétablir uniquement via une Netlify Function si le client y tient
- [ ] **Anti-spam** : un piège à robots (`netlify-honeypot="bot-field"`) est en place, invisible et retiré de l'arbre d'accessibilité. Netlify propose en plus un reCAPTCHA activable côté tableau de bord — à envisager si du spam passe malgré le piège
- [ ] **⚠️ Email de contact** (`organisation.service.ts`) : `contact@chancedevivre-togo.org` est désormais l'adresse **retenue officiellement**, mais elle **ne fonctionne pas encore** — le domaine n'est pas acheté et la boîte (ou la redirection) n'est pas créée. D'ici là, le lien `mailto:` affiché sur la page Contact et dans le pied de page **pointe dans le vide, sans message d'erreur pour le visiteur**. À traiter en priorité au moment de l'achat du domaine, ou masquer la ligne « Email » en attendant
- [ ] **⚠️ Contradiction sur le siège social** : `organisation.service.ts` affiche `Rue Assomé, Tsévié, Togo`, adresse notée comme **confirmée par le client**. Or la description officielle de l'association indique `SIÈGE SOCIAL : DAVIÉ ASSOMÉ`, et la publication sur la maison des jeunes situe Assomé « à 5 km de Davié, dans la préfecture de Zio ». L'adresse **n'a pas été modifiée** dans l'attente d'un arbitrage : c'est celle qui s'affiche sur la page Contact et dans le pied de page
- [ ] **Textes narratifs FR** (`assets/i18n/fr.json` — valeurs, sous-titres) : premier jet éditorial, formulation non validée. En revanche « Notre histoire » (`QUI_SOMMES_NOUS.HISTOIRE_TEXTE`) et « Notre zone d'action » (`ZONE_TEXTE`) sont désormais **repris de la description officielle et des publications du client** (création en mars 2012, mission d'accès à l'éducation et à la santé, attention aux jeunes, IST/VIH/SIDA, veuves et orphelins, partenariat Tukolere Wamu, 14 localités sur 4 régions) — seule la mise en forme reste à valider
- [ ] **Traductions EN/DE** (`assets/i18n/en.json`, `de.json`) : traduction assistée (pas de traducteur professionnel pour la V1, conformément au cahier des charges section 6) — à faire relire par un locuteur natif avant mise en ligne
