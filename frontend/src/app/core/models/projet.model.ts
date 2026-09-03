export type CategorieProjet = 'education' | 'sante' | 'economie' | 'environnement';

export interface Projet {
  id: string;
  titre: string;
  categorie: CategorieProjet;
  description: string;
  image: string;
  imageAlt: string;
  /** Année de l'action. Omise quand la publication d'origine ne la mentionne pas. */
  date?: string;
  /** Localité de l'action. Omise quand la publication d'origine ne la mentionne pas. */
  lieu?: string;
}
