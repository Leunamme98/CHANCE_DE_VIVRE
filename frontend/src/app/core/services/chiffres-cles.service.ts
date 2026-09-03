import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChiffreCle } from '../models/chiffre-cle.model';

// Le cahier des charges (section 5.1) ne donne que des EXEMPLES de type de chiffre à afficher
// (« 27 personnes opérées », « 50 tables-bancs offertes »), pas des valeurs confirmées — et
// précise explicitement d'utiliser un contenu provisoire en attendant les chiffres exacts du
// client. Ci-dessous, ces exemples sont généralisés (santé/éducation au sens large plutôt que
// des actes précis) pour refléter l'ensemble des actions, pas un seul type d'intervention :
// TODO: contenu à valider avec le client (voir docs/contraintes-a-verifier.md).
//
// Année de création confirmée par le client (publication officielle sur l'inauguration de la
// maison des jeunes d'Assomé : « Créée en Mars 2012 »). Le nombre d'années affiché se recalcule
// automatiquement chaque année.
const ANNEE_CREATION = 2012;

@Injectable({ providedIn: 'root' })
export class ChiffresClesService {
  private readonly chiffres: ChiffreCle[] = [
    { id: 'sante', valeur: '500+', libelle: 'Personnes soignées', icone: 'sante' },
    {
      id: 'education',
      valeur: '80+',
      libelle: 'Bâtiments et équipements scolaires financés',
      icone: 'education',
    },
    // 14 localités nommément documentées (publications du client + cahier des charges section 2),
    // réparties sur 4 des 5 régions du Togo. Le « 12+ » reste volontairement en deçà du décompte.
    { id: 'localites', valeur: '12+', libelle: "Localités d'intervention au Togo", icone: 'localites' },
    {
      id: 'anciennete',
      valeur: `${new Date().getFullYear() - ANNEE_CREATION}+`,
      libelle: "Années d'engagement au Togo",
      icone: 'anciennete',
    },
  ];

  getAll(): Observable<ChiffreCle[]> {
    return of(this.chiffres);
  }
}
