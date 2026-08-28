# NORMES DE CODAGE — Chance de Vivre

## 1. Structure du projet Angular

```
frontend/
  src/
    app/
      core/               # services partagés, modèles, guards
        models/            # interfaces TS (Mission, Projet, Partenaire...)
        services/          # ex: missions.service.ts, projets.service.ts
      shared/              # composants réutilisables (bouton, carte, badge)
      features/            # une page = un dossier
        accueil/
        qui-sommes-nous/
        missions/
        projets/
        partenaires/
        contact/
      layout/              # header, footer, nav
    assets/
      i18n/                # fr.json, en.json, de.json
      images/
    styles/
      _variables.scss      # copie exacte des tokens du design system
      _mixins.scss
```

## 2. Règle des données "API-ready"

Toute donnée statique doit être servie par un service Angular via une interface typée, **jamais directement en dur dans un composant**.

```typescript
// core/models/projet.model.ts
export interface Projet {
  id: string;
  titre: string;
  categorie: 'education' | 'sante' | 'economie';
  description: string;
  image: string;
  date: string;
  lieu: string;
}

// core/services/projets.service.ts
@Injectable({ providedIn: 'root' })
export class ProjetsService {
  private projets: Projet[] = [ /* données en dur ici, uniquement dans ce fichier */ ];

  getAll(): Observable<Projet[]> {
    return of(this.projets); // Observable dès le départ → migration API sans changer les composants
  }
}
```

Un composant ne doit jamais importer un tableau de données directement — toujours passer par le service, même si le service retourne des données statiques aujourd'hui.

## 3. Nommage

- Fichiers : `kebab-case` (`nos-projets.component.ts`)
- Classes/Interfaces : `PascalCase`
- Variables/fonctions : `camelCase`
- Sélecteurs de composants : préfixe `cdv-` (ex: `cdv-carte-projet`)

## 4. Style (SCSS)

- **Jamais de couleur en dur dans un composant.** Toujours une variable du design system (`var(--color-primary)` ou `$color-primary`).
- Un fichier `_variables.scss` unique, généré depuis `design-system-chance-de-vivre.md` — toute divergence entre les deux fichiers est un bug.
- Mobile-first : écrire le CSS pour mobile par défaut, puis `@media (min-width: 768px)` pour desktop.

## 5. Accessibilité (non négociable)

- Toute image a un attribut `alt` descriptif
- Tout bouton/lien a un libellé clair (pas de "cliquez ici")
- Contraste conforme au design system (section 8 du document charte)
- Navigation clavier fonctionnelle (focus visible)

## 6. Internationalisation

- Aucun texte en dur dans un template HTML — toujours via `{{ 'CLE.TEXTE' | translate }}`
- Toute nouvelle clé ajoutée dans `fr.json` doit être ajoutée en même temps (même si approximative) dans `en.json` et `de.json`

## 7. Commits

Format : `type: description courte`
Types : `feat`, `fix`, `style`, `docs`, `refactor`, `perf`

Exemple : `feat: ajout page nos-projets avec filtrage par categorie`

## 8. Avant chaque livraison

Se référer systématiquement à `docs/contraintes-a-verifier.md`.
