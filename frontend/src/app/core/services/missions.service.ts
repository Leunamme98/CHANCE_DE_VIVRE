import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mission } from '../models/mission.model';

// Faits vérifiés via le cahier des charges (section 2 - Contexte métier).
// Les libellés/descriptions sont un premier jet éditorial : // TODO: contenu à valider avec le client.
@Injectable({ providedIn: 'root' })
export class MissionsService {
  private readonly missions: Mission[] = [
    {
      id: 'education',
      pilier: 'education',
      titre: 'Éducation',
      description:
        "Construction et rénovation d'écoles publiques (EPP), don de tables-bancs pour améliorer les conditions d'apprentissage.",
      exemples: ["Construction et rénovation d'écoles publiques (EPP)", 'Dons de tables-bancs'],
      icone: 'school',
    },
    {
      id: 'sante',
      pilier: 'sante',
      titre: 'Santé',
      description:
        "Campagnes de chirurgie de la cataracte, services d'ophtalmologie, et actions de santé maternelle et infantile.",
      exemples: [
        'Campagnes de chirurgie de la cataracte',
        "Services d'ophtalmologie",
        'Santé maternelle et infantile',
      ],
      icone: 'health',
    },
    {
      id: 'economie',
      pilier: 'economie',
      titre: 'Économie locale',
      description:
        'Activités génératrices de revenus pour les femmes, notamment la production de savon.',
      exemples: ['Production de savon par des groupements de femmes'],
      icone: 'economy',
    },
    {
      id: 'environnement',
      pilier: 'environnement',
      titre: 'Environnement',
      description:
        "Valorisation des plantes locales et de la médecine naturelle : culture, pépinières et vulgarisation du Moringa et de l'Artémisia Annua auprès des communautés.",
      exemples: [
        "Vulgarisation du Moringa et de l'Artémisia Annua",
        'Pépinières et production de plants',
        'Récolte et conservation des semences de Moringa',
      ],
      icone: 'environment',
    },
  ];

  getAll(): Observable<Mission[]> {
    return of(this.missions);
  }

  getById(id: string): Observable<Mission | undefined> {
    return of(this.missions.find((m) => m.id === id));
  }
}
