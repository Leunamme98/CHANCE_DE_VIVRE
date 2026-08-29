export interface MessageContact {
  nom: string;
  email: string;
  /** Numéro complet formaté avec indicatif (ex: "+228 90 19 25 82"), ou chaîne vide si non renseigné. */
  telephone: string;
  objet: string;
  message: string;
}
