import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GaleriePhoto } from '../models/galerie-photo.model';

// Photos terrain illustrant nos partenariats. Légendes rédigées à partir du contenu visuel des
// photos : TODO: contenu à valider avec le client (voir docs/contraintes-a-verifier.md).
@Injectable({ providedIn: 'root' })
export class AProposGalerieService {
  // 6 photos = 2 lignes pleines de 3 en desktop (cf. .cdv-galerie-photos, grille 3 colonnes).
  // `apropos-01-partenaires-terrain` a été retirée : c'était le même cliché que
  // `apropos-04-partenaire-micro` (cadrage un peu plus large), affiché deux fois avec deux
  // légendes différentes dans la même grille.
  private readonly photos: GaleriePhoto[] = [
    { image: 'apropos-02-partenaire-visite', legende: 'A_PROPOS.GALERIE_PHOTO_1', position: 'center 15%' },
    { image: 'projet-maison-jeunes-assome', legende: 'A_PROPOS.GALERIE_PHOTO_2', position: 'center 20%' },
    { image: 'apropos-04-partenaire-micro', legende: 'A_PROPOS.GALERIE_PHOTO_3', position: 'center 30%' },
    // Format très panoramique : le recadrage 4/3 rogne les côtés, l'inscription murale
    // « Projet réalisé par l'ONG Chance de Vivre avec l'appui financier de Tukolere Wamu
    // Allemagne » est centrée et reste donc entièrement visible.
    { image: 'apropos-06-partenariat-hiheatro', legende: 'A_PROPOS.GALERIE_PHOTO_4', position: 'center' },
    { image: 'apropos-05-remise-cles-hiheatro', legende: 'A_PROPOS.GALERIE_PHOTO_5', position: 'center 35%' },
    { image: 'apropos-03-certificat-covid', legende: 'A_PROPOS.GALERIE_PHOTO_6', position: 'center 30%' },
  ];

  getAll(): Observable<GaleriePhoto[]> {
    return of(this.photos);
  }
}
