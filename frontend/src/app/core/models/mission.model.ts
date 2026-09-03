export type PilierMission = 'education' | 'sante' | 'economie' | 'environnement';

export interface Mission {
  id: string;
  pilier: PilierMission;
  titre: string;
  description: string;
  exemples: string[];
  icone: string;
}
