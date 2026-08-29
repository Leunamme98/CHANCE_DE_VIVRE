export interface IndicatifTelephonique {
  /** Code pays ISO 3166-1 alpha-2, utilisé comme valeur de l'option. */
  code: string;
  nom: string;
  indicatif: string;
}

// Togo en premier (ONG basée à Tsévié), puis pays voisins d'Afrique de l'Ouest, puis pays
// occidentaux les plus courants pour les partenaires/donateurs. Liste volontairement
// non exhaustive (pas les ~200 pays de la norme ISO) — à étendre au besoin.
export const INDICATIFS_TELEPHONIQUES: IndicatifTelephonique[] = [
  { code: 'TG', nom: 'Togo', indicatif: '+228' },
  { code: 'BJ', nom: 'Bénin', indicatif: '+229' },
  { code: 'GH', nom: 'Ghana', indicatif: '+233' },
  { code: 'CI', nom: "Côte d'Ivoire", indicatif: '+225' },
  { code: 'BF', nom: 'Burkina Faso', indicatif: '+226' },
  { code: 'NE', nom: 'Niger', indicatif: '+227' },
  { code: 'ML', nom: 'Mali', indicatif: '+223' },
  { code: 'SN', nom: 'Sénégal', indicatif: '+221' },
  { code: 'NG', nom: 'Nigeria', indicatif: '+234' },
  { code: 'FR', nom: 'France', indicatif: '+33' },
  { code: 'BE', nom: 'Belgique', indicatif: '+32' },
  { code: 'CH', nom: 'Suisse', indicatif: '+41' },
  { code: 'DE', nom: 'Allemagne', indicatif: '+49' },
  { code: 'GB', nom: 'Royaume-Uni', indicatif: '+44' },
  { code: 'US', nom: 'États-Unis', indicatif: '+1' },
  { code: 'CA', nom: 'Canada', indicatif: '+1' },
];
