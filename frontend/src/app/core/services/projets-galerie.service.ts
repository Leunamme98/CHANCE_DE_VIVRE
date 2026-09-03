import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GaleriePhoto } from '../models/galerie-photo.model';

// Photos terrain illustrant nos réalisations. Légendes rédigées à partir du contenu visuel des
// photos : TODO: contenu à valider avec le client (voir docs/contraintes-a-verifier.md).
@Injectable({ providedIn: 'root' })
export class ProjetsGalerieService {
  private readonly photos: GaleriePhoto[] = [
    { image: 'projets-01-ciment-construction', legende: 'PROJETS.GALERIE_PHOTO_1', position: 'center 55%' },
    { image: 'galerie-eau-enfants-yokele', legende: 'PROJETS.GALERIE_PHOTO_2', position: 'center 45%' },
    { image: 'projet-renovation-ceg-bafilo', legende: 'PROJETS.GALERIE_PHOTO_3', position: 'center 45%' },
    { image: 'projet-usp-danyi-ndigbe', legende: 'PROJETS.GALERIE_PHOTO_4', position: 'center 50%' },
    { image: 'projet-vaccination-hiheatro', legende: 'PROJETS.GALERIE_PHOTO_5', position: 'center 45%' },
    { image: 'environnement-01-moringa-plantation', legende: 'PROJETS.GALERIE_PHOTO_6', position: 'center 60%' },
  ];

  getAll(): Observable<GaleriePhoto[]> {
    return of(this.photos);
  }
}
