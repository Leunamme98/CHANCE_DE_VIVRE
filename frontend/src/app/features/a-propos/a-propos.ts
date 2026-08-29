import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MissionsService } from '../../core/services/missions.service';
import { PartenairesService } from '../../core/services/partenaires.service';
import { AProposGalerieService } from '../../core/services/a-propos-galerie.service';
import { SeoService } from '../../core/services/seo.service';
import { Carte } from '../../shared/carte/carte';
import { Badge } from '../../shared/badge/badge';
import { RevealAuScroll } from '../../shared/reveal-au-scroll/reveal-au-scroll';
import { ReperesLecture } from './reperes-lecture/reperes-lecture';
import { cheminImage } from '../../core/config/image.config';

@Component({
  imports: [AsyncPipe, TranslatePipe, Carte, Badge, RevealAuScroll, ReperesLecture],
  selector: 'cdv-a-propos',
  templateUrl: './a-propos.html',
  styleUrl: './a-propos.scss',
})
export class APropos {
  private readonly missionsService = inject(MissionsService);
  private readonly partenairesService = inject(PartenairesService);
  private readonly galerieService = inject(AProposGalerieService);
  private readonly seo = inject(SeoService);

  readonly missions$ = this.missionsService.getAll();
  readonly partenaires$ = this.partenairesService.getAll();
  readonly galeriePhotos$ = this.galerieService.getAll();

  // Localités citées dans QUI_SOMMES_NOUS.ZONE_TEXTE, reprises en repères visuels
  // (puces + icône) en complément du paragraphe.
  readonly localites = [
    'QUI_SOMMES_NOUS.ZONE_LOCALITE_TSEVIE',
    'QUI_SOMMES_NOUS.ZONE_LOCALITE_AGBONOU',
    'QUI_SOMMES_NOUS.ZONE_LOCALITE_ANIE',
    'QUI_SOMMES_NOUS.ZONE_LOCALITE_KARA',
  ];

  constructor() {
    this.seo.definirPage('A_PROPOS.TITRE_PAGE', 'A_PROPOS.DESCRIPTION_PAGE');
  }

  cheminImage(nom: string): string {
    return cheminImage(nom);
  }
}
