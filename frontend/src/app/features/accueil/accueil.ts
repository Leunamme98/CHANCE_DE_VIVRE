import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MissionsService } from '../../core/services/missions.service';
import { ChiffresClesService } from '../../core/services/chiffres-cles.service';
import { SeoService } from '../../core/services/seo.service';
import { HeroCarouselService } from '../../core/services/hero-carousel.service';
import { AProposGalerieService } from '../../core/services/a-propos-galerie.service';
import { ProjetsGalerieService } from '../../core/services/projets-galerie.service';
import { Carte } from '../../shared/carte/carte';
import { Bouton } from '../../shared/bouton/bouton';
import { CarouselPhotos } from '../../shared/carousel-photos/carousel-photos';

@Component({
  imports: [AsyncPipe, RouterLink, TranslatePipe, Carte, Bouton, CarouselPhotos],
  selector: 'cdv-accueil',
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  private readonly missionsService = inject(MissionsService);
  private readonly chiffresClesService = inject(ChiffresClesService);
  private readonly seo = inject(SeoService);
  private readonly heroCarouselService = inject(HeroCarouselService);
  private readonly aProposGalerieService = inject(AProposGalerieService);
  private readonly projetsGalerieService = inject(ProjetsGalerieService);

  readonly missions$ = this.missionsService.getAll();
  readonly chiffresCles$ = this.chiffresClesService.getAll();
  readonly heroSlides$ = this.heroCarouselService.getAll();
  readonly galerieAPropos$ = this.aProposGalerieService.getAll();
  readonly galerieProjets$ = this.projetsGalerieService.getAll();

  constructor() {
    this.seo.definirPage('ACCUEIL.TITRE_PAGE', 'ACCUEIL.DESCRIPTION_PAGE');
  }
}
