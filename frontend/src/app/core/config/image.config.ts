// Point unique de vérité pour l'extension et le chemin des images du site.
// Si le format des fichiers change un jour, une seule ligne à modifier.
export const IMAGE_EXT = 'jpg';

const IMAGES_BASE_PATH = 'images/accueil';

/** Construit le chemin complet d'une image à partir de son nom (sans extension). */
export function cheminImage(nom: string): string {
  return `${IMAGES_BASE_PATH}/${nom}.${IMAGE_EXT}`;
}
