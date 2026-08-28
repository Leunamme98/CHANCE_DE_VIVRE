# DESIGN SYSTEM — CHANCE DE VIVRE
### Direction validée : « Terre et espoir »
### Document de référence — Développeurs / Designers / IA génératives

---

## 1. COULEURS

### 1.1 Couleurs de marque

| Nom | Rôle | HEX | RGB | Usage |
|---|---|---|---|---|
| Vert palmier | Primaire | `#1E8A5B` | `30, 138, 91` | Boutons principaux, liens, header, éléments actifs |
| Vert forêt | Primaire foncé | `#155C3E` | `21, 92, 62` | Hover boutons, texte fort, footer, navigation active |
| Vert menthe | Primaire clair | `#D9F0E4` | `217, 240, 228` | Fonds de section, badges succès légers |
| Vert profond | Primaire 900 | `#0E3A28` | `14, 58, 40` | Texte sur fond clair nécessitant contraste renforcé |
| Terre cuite | Secondaire | `#C9754A` | `201, 117, 74` | Accents secondaires, icônes catégorie « santé » |
| Terre cuite foncée | Secondaire foncé | `#9C5636` | `156, 86, 54` | Hover éléments secondaires |
| Terre cuite claire | Secondaire clair | `#F3E1D6` | `243, 225, 214` | Fonds badges catégorie « santé » |
| Or solaire | Accent | `#F4A623` | `244, 166, 35` | Call-to-action principaux, highlights, icône catégorie « éducation » |
| Or foncé | Accent foncé | `#C9800F` | `201, 128, 15` | Hover CTA, texte sur fond or clair |
| Or clair | Accent clair | `#FDECC7` | `253, 236, 199` | Fonds badges catégorie « éducation » |

### 1.2 Couleurs neutres / interface

| Nom | Rôle | HEX | RGB | Usage |
|---|---|---|---|---|
| Blanc cassé | Fond principal | `#FBF9F5` | `251, 249, 245` | Fond de page par défaut |
| Blanc pur | Surface | `#FFFFFF` | `255, 255, 255` | Cartes, modales, header |
| Gris nuage | Surface alternée | `#F5F3EE` | `245, 243, 238` | Sections alternées, fond de champ désactivé |
| Anthracite chaud | Texte principal | `#2B2A27` | `43, 42, 39` | Texte courant, titres |
| Gris taupe | Texte secondaire | `#6B6A64` | `107, 106, 100` | Sous-titres, légendes, placeholders |
| Gris cendre | Texte tertiaire / désactivé | `#A6A49C` | `166, 164, 156` | Texte désactivé, hints |
| Gris clair | Bordure | `#E5E2DB` | `229, 226, 219` | Séparateurs, contours de champs |
| Gris moyen | Bordure forte | `#C9C6BC` | `201, 198, 188` | Bordure au hover / focus non actif |

### 1.3 Couleurs sémantiques (états)

| Nom | Rôle | HEX (fond) | HEX (texte/icône) | HEX (bordure) |
|---|---|---|---|---|
| Succès | Validation, confirmation | `#E5F5EA` | `#3B9E5C` | `#B7E4C4` |
| Avertissement | Alerte douce | `#FDF1DD` | `#D98E1C` | `#F5D6A0` |
| Erreur | Erreur formulaire, échec | `#FAE7E3` | `#B4472E` | `#F0BFB0` |
| Information | Notice, aide contextuelle | `#E3EFF5` | `#3E7FA8` | `#B9D8E8` |

### 1.4 Overlays et ombres

| Nom | Valeur | Usage |
|---|---|---|
| Overlay modal | `rgba(43, 42, 39, 0.45)` | Fond derrière une modale |
| Ombre légère | `0 1px 3px rgba(43, 42, 39, 0.08)` | Cartes au repos |
| Ombre moyenne | `0 4px 12px rgba(43, 42, 39, 0.10)` | Cartes au hover, dropdowns |
| Ombre forte | `0 8px 24px rgba(43, 42, 39, 0.14)` | Modales, popovers |

---

## 2. TYPOGRAPHIE

### 2.1 Familles de police

- **Police principale (titres, navigation, boutons)** : `Poppins` — Google Fonts, gratuite
- **Police secondaire (texte courant, formulaires)** : `Inter` — Google Fonts, gratuite
- **Police de secours (fallback système)** : `-apple-system, Segoe UI, Roboto, sans-serif`

```css
--font-heading: 'Poppins', -apple-system, Segoe UI, Roboto, sans-serif;
--font-body: 'Inter', -apple-system, Segoe UI, Roboto, sans-serif;
```

### 2.2 Échelle typographique précise

| Niveau | Taille (px) | Taille (rem) | Graisse | Line-height | Letter-spacing | Police |
|---|---|---|---|---|---|---|
| H1 | 32px | 2rem | 600 | 1.25 | -0.2px | Poppins |
| H2 | 24px | 1.5rem | 600 | 1.3 | -0.1px | Poppins |
| H3 | 19px | 1.1875rem | 600 | 1.35 | 0px | Poppins |
| H4 | 16px | 1rem | 600 | 1.4 | 0px | Poppins |
| Texte principal (body) | 16px | 1rem | 400 | 1.6 | 0px | Inter |
| Texte principal (medium) | 16px | 1rem | 500 | 1.6 | 0px | Inter |
| Petit texte | 13px | 0.8125rem | 400 | 1.5 | 0px | Inter |
| Légende / caption | 12px | 0.75rem | 400 | 1.4 | 0.1px | Inter |
| Bouton | 15px | 0.9375rem | 500 | 1 | 0.2px | Poppins |
| Libellé de formulaire | 13px | 0.8125rem | 500 | 1.4 | 0px | Inter |
| Lien inline | 16px | 1rem | 500 | 1.6 | 0px | Inter (souligné au hover) |

**Responsive mobile** (< 768px) : H1 → 26px, H2 → 21px, H3 → 17px, reste identique.

### 2.3 Couleurs de texte par contexte

| Contexte | Couleur |
|---|---|
| Titre sur fond clair | `#2B2A27` |
| Titre sur fond vert foncé | `#FFFFFF` |
| Texte courant sur fond clair | `#2B2A27` |
| Texte secondaire | `#6B6A64` |
| Lien | `#1E8A5B` (hover `#155C3E`) |
| Texte sur bouton primaire | `#FFFFFF` |
| Texte sur bouton accent (or) | `#2B2A27` |

---

## 3. SYSTÈME D'ESPACEMENT

Unité de base : **4px**

| Token | Valeur | Usage |
|---|---|---|
| `space-1` | 4px | Espacement minimal (icône-texte) |
| `space-2` | 8px | Padding interne petits éléments |
| `space-3` | 12px | Padding boutons, gap petits groupes |
| `space-4` | 16px | Padding standard cartes, gap entre éléments de formulaire |
| `space-5` | 24px | Marge entre blocs de contenu |
| `space-6` | 32px | Padding sections mobile, gap grands blocs |
| `space-7` | 48px | Marge entre sections desktop |
| `space-8` | 64px | Marge de page desktop (haut/bas de section) |

---

## 4. RAYONS ET FORMES

| Token | Valeur | Usage |
|---|---|---|
| `radius-sm` | 6px | Badges, petits tags |
| `radius-md` | 8px | Boutons, champs de formulaire |
| `radius-lg` | 12px | Cartes |
| `radius-xl` | 16px | Modales, grands conteneurs |
| `radius-full` | 999px | Avatars, pastilles rondes |

---

## 5. COMPOSANTS

### 5.1 Boutons

| État | Fond | Texte | Bordure |
|---|---|---|---|
| Primaire — repos | `#1E8A5B` | `#FFFFFF` | aucune |
| Primaire — hover | `#155C3E` | `#FFFFFF` | aucune |
| Primaire — active | `#0E3A28` | `#FFFFFF` | aucune |
| Primaire — focus | `#1E8A5B` | `#FFFFFF` | anneau `0 0 0 3px #D9F0E4` |
| Primaire — désactivé | `#C9C6BC` | `#F5F3EE` | aucune |
| Primaire — chargement | `#1E8A5B` (opacité 0.7) | `#FFFFFF` | spinner blanc 16px |
| Secondaire — repos | transparent | `#1E8A5B` | `1px solid #1E8A5B` |
| Secondaire — hover | `#D9F0E4` | `#155C3E` | `1px solid #155C3E` |
| Secondaire — désactivé | transparent | `#A6A49C` | `1px solid #E5E2DB` |
| Tertiaire (texte seul) — repos | transparent | `#1E8A5B` | aucune |
| Tertiaire — hover | `#F5F3EE` | `#155C3E` | aucune |
| CTA accent — repos | `#F4A623` | `#2B2A27` | aucune |
| CTA accent — hover | `#C9800F` | `#FFFFFF` | aucune |

Dimensions : hauteur 44px (desktop) / 48px (mobile, zone tactile), padding horizontal 20px, radius 8px.

### 5.2 Cartes

| Propriété | Valeur |
|---|---|
| Fond | `#FFFFFF` |
| Bordure | `1px solid #E5E2DB` (optionnelle si ombre suffisante) |
| Radius | 12px |
| Ombre repos | `0 1px 3px rgba(43,42,39,0.08)` |
| Ombre hover | `0 4px 12px rgba(43,42,39,0.10)` |
| Padding interne | 20px (desktop), 16px (mobile) |
| Gap entre cartes (grille) | 16px |

### 5.3 Champs de formulaire

| État | Fond | Bordure | Texte |
|---|---|---|---|
| Normal | `#FFFFFF` | `1px solid #E5E2DB` | `#2B2A27` |
| Focus | `#FFFFFF` | `1px solid #1E8A5B` + anneau `0 0 0 3px #D9F0E4` | `#2B2A27` |
| Erreur | `#FAE7E3` | `1px solid #B4472E` | `#2B2A27` |
| Désactivé | `#F5F3EE` | `1px solid #E5E2DB` | `#A6A49C` |
| Succès | `#E5F5EA` | `1px solid #3B9E5C` | `#2B2A27` |
| Placeholder | — | — | `#A6A49C` |

Dimensions : hauteur 44px, radius 8px, padding horizontal 14px.

### 5.4 Badges

| Type | Fond | Texte |
|---|---|---|
| Neutre | `#F5F3EE` | `#6B6A64` |
| Catégorie éducation | `#FDECC7` | `#C9800F` |
| Catégorie santé | `#F3E1D6` | `#9C5636` |
| Catégorie économie | `#D9F0E4` | `#155C3E` |
| Succès | `#E5F5EA` | `#3B9E5C` |
| Erreur | `#FAE7E3` | `#B4472E` |

Dimensions : hauteur 24px, padding horizontal 10px, radius 999px (pilule), taille texte 12px medium.

### 5.5 Alertes / notices

| Type | Fond | Bordure gauche | Icône/texte |
|---|---|---|---|
| Succès | `#E5F5EA` | `4px solid #3B9E5C` | `#3B9E5C` |
| Avertissement | `#FDF1DD` | `4px solid #D98E1C` | `#D98E1C` |
| Erreur | `#FAE7E3` | `4px solid #B4472E` | `#B4472E` |
| Information | `#E3EFF5` | `4px solid #3E7FA8` | `#3E7FA8` |

Padding 16px, radius 8px (coins droits seulement du côté de la bordure).

### 5.6 Modales

| Propriété | Valeur |
|---|---|
| Fond overlay | `rgba(43, 42, 39, 0.45)` |
| Fond modale | `#FFFFFF` |
| Radius | 16px |
| Ombre | `0 8px 24px rgba(43,42,39,0.14)` |
| Padding interne | 24px |
| Largeur max desktop | 560px |

### 5.7 Navigation

| Propriété | Valeur |
|---|---|
| Fond header | `#FFFFFF` |
| Bordure basse header | `1px solid #E5E2DB` |
| Lien nav — repos | `#2B2A27`, 15px, Poppins 500 |
| Lien nav — hover/actif | `#1E8A5B` |
| Indicateur actif | trait `2px solid #1E8A5B` sous le lien |
| Hauteur header | 72px desktop / 60px mobile |

---

## 6. ICONOGRAPHIE

- **Style** : linéaire (outline), jamais rempli sauf icônes d'état actif
- **Épaisseur de trait** : 1.5px
- **Coins** : légèrement arrondis (`stroke-linecap: round`)
- **Taille standard** : 20px (inline texte), 24px (boutons/actions), 32px (illustrations de cartes)
- **Couleur par défaut** : `#2B2A27` (icônes neutres), `#1E8A5B` (icônes actives/liens)
- **Espacement icône-texte** : 8px
- **Bibliothèque recommandée** : Tabler Icons ou Lucide (gratuites, cohérentes, style outline)

---

## 7. IMAGES

| Critère | Règle |
|---|---|
| Style | Photos terrain authentiques (Facebook de l'ONG), jamais de stock générique |
| Luminosité | Naturelle, légèrement réchauffée (+5% chaleur) |
| Traitement | Uniformisation légère du contraste, pas de filtre artificiel visible |
| Ratio héro | 16:9 ou 3:2 |
| Ratio carte projet | 4:3 |
| Radius sur images | 12px (aligné avec les cartes) |
| Overlay texte sur image | `rgba(21, 92, 62, 0.55)` si texte blanc superposé |

---

## 8. ACCESSIBILITÉ

| Règle | Valeur |
|---|---|
| Contraste texte principal / fond | 12:1 (`#2B2A27` sur `#FBF9F5`) — conforme AAA |
| Contraste texte secondaire / fond | 4.6:1 — conforme AA |
| Contraste bouton primaire | 4.8:1 (blanc sur `#1E8A5B`) — conforme AA |
| Taille minimale de texte | 13px |
| Taille minimale zone tactile | 44×44px |
| Focus visible | Anneau `0 0 0 3px` couleur claire correspondante, jamais supprimé |
| Information par couleur seule | Interdit — toujours doubler d'un texte ou icône |

---

## 9. VARIABLES CSS PRÊTES À L'EMPLOI

```css
:root {
  /* Couleurs marque */
  --color-primary: #1E8A5B;
  --color-primary-dark: #155C3E;
  --color-primary-light: #D9F0E4;
  --color-primary-900: #0E3A28;
  --color-secondary: #C9754A;
  --color-secondary-dark: #9C5636;
  --color-secondary-light: #F3E1D6;
  --color-accent: #F4A623;
  --color-accent-dark: #C9800F;
  --color-accent-light: #FDECC7;

  /* Neutres */
  --color-bg: #FBF9F5;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F5F3EE;
  --color-text-primary: #2B2A27;
  --color-text-secondary: #6B6A64;
  --color-text-tertiary: #A6A49C;
  --color-border: #E5E2DB;
  --color-border-strong: #C9C6BC;

  /* Sémantique */
  --color-success-bg: #E5F5EA;
  --color-success-text: #3B9E5C;
  --color-warning-bg: #FDF1DD;
  --color-warning-text: #D98E1C;
  --color-error-bg: #FAE7E3;
  --color-error-text: #B4472E;
  --color-info-bg: #E3EFF5;
  --color-info-text: #3E7FA8;

  /* Typographie */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Espacement */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;

  /* Rayons */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 999px;

  /* Ombres */
  --shadow-sm: 0 1px 3px rgba(43,42,39,0.08);
  --shadow-md: 0 4px 12px rgba(43,42,39,0.10);
  --shadow-lg: 0 8px 24px rgba(43,42,39,0.14);
}
```

---

*Document de référence — Direction « Terre et espoir » validée le 28 août 2026. Toute modification de ces valeurs doit être approuvée avant application.*
