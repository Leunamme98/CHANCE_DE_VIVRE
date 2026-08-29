export type TypeIconeContact = 'adresse' | 'telephone' | 'email' | 'whatsapp' | 'messenger' | 'facebook';

export interface CoordonneeAffichee {
  id: string;
  icone: TypeIconeContact;
  /** Clé de traduction ngx-translate du titre (ex: FOOTER.TELEPHONE_LIBELLE). */
  titreCle: string;
  valeur: string;
  lien: string | null;
  /** true pour un lien vers un site externe (cible _blank), false pour tel:/mailto:. */
  externe: boolean;
}
