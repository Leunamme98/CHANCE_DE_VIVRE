export type CodeLangue = 'fr' | 'en' | 'de';

export interface Langue {
  code: CodeLangue;
  /**
   * Nom de la langue dans sa propre langue (endonyme). Volontairement pas traduit : un
   * germanophone doit reconnaître « Deutsch » sans comprendre un mot de la langue courante.
   */
  nom: string;
  /** Code court affiché dans le déclencheur compact, à côté du globe. */
  abrege: string;
}
