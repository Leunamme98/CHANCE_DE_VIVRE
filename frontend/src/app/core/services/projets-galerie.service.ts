import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GaleriePhoto } from '../models/galerie-photo.model';

// Photos terrain illustrant nos réalisations. Légendes rédigées à partir du contenu visuel des
// photos : TODO: contenu à valider avec le client (voir docs/contraintes-a-verifier.md).
@Injectable({ providedIn: 'root' })
export class ProjetsGalerieService {
  private readonly photos: GaleriePhoto[] = [
    { image: 'projets-01-ciment-construction', legende: 'PROJETS.GALERIE_PHOTO_1' },
    { image: 'projets-02-sensibilisation', legende: 'PROJETS.GALERIE_PHOTO_2' },
    { image: 'projets-03-inauguration-sante', legende: 'PROJETS.GALERIE_PHOTO_3' },
  ];

  getAll(): Observable<GaleriePhoto[]> {
    return of(this.photos);
  }
}
