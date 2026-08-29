export interface HeroSlide {
  /** Nom du fichier image, sans extension (résolue via IMAGE_EXT). */
  image: string;
  /** Clé de traduction ngx-translate de la légende (jamais le texte en dur). */
  legende: string;
  /** Valeur CSS object-position (ex: "center 30%") pour garder le sujet visible malgré le recadrage plein cadre. Par défaut "center". */
  position?: string;
}
