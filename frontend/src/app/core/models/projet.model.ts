export type CategorieProjet = 'education' | 'sante' | 'economie';

export interface Projet {
  id: string;
  titre: string;
  categorie: CategorieProjet;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
  lieu: string;
}
