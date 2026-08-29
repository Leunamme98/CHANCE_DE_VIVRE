import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GaleriePhoto } from '../models/galerie-photo.model';

// Photos terrain illustrant nos partenariats. Légendes rédigées à partir du contenu visuel des
// photos : TODO: contenu à valider avec le client (voir docs/contraintes-a-verifier.md).
@Injectable({ providedIn: 'root' })
export class AProposGalerieService {
  private readonly photos: GaleriePhoto[] = [
    { image: 'apropos-01-partenaires-terrain', legende: 'A_PROPOS.GALERIE_PHOTO_1', position: 'center 25%' },
    { image: 'apropos-02-partenaire-visite', legende: 'A_PROPOS.GALERIE_PHOTO_2', position: 'center 15%' },
    { image: 'apropos-03-certificat-covid', legende: 'A_PROPOS.GALERIE_PHOTO_3', position: 'center 30%' },
  ];

  getAll(): Observable<GaleriePhoto[]> {
    return of(this.photos);
  }
}
