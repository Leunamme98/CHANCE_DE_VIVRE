import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChiffreCle } from '../models/chiffre-cle.model';

// Le cahier des charges (section 5.1) ne donne que des EXEMPLES de type de chiffre à afficher,
// pas des valeurs confirmées. Toutes les valeurs ci-dessous sont des placeholders :
// TODO: contenu à valider avec le client (voir docs/contraintes-a-verifier.md).
@Injectable({ providedIn: 'root' })
export class ChiffresClesService {
  private readonly chiffres: ChiffreCle[] = [
    { id: 'operations', valeur: '27', libelle: 'personnes opérées de la cataracte' },
    { id: 'tables-bancs', valeur: '50', libelle: 'tables-bancs offerts' },
    { id: 'localites', valeur: '4+', libelle: "localités d'intervention au Togo" },
  ];

  getAll(): Observable<ChiffreCle[]> {
    return of(this.chiffres);
  }
}
