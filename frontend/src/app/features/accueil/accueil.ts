import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MissionsService } from '../../core/services/missions.service';
import { ChiffresClesService } from '../../core/services/chiffres-cles.service';
import { SeoService } from '../../core/services/seo.service';
import { Carte } from '../../shared/carte/carte';
import { Badge } from '../../shared/badge/badge';
import { Bouton } from '../../shared/bouton/bouton';

@Component({
  imports: [AsyncPipe, RouterLink, TranslatePipe, Carte, Badge, Bouton],
  selector: 'cdv-accueil',
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil {
  private readonly missionsService = inject(MissionsService);
  private readonly chiffresClesService = inject(ChiffresClesService);
  private readonly seo = inject(SeoService);

  readonly missions$ = this.missionsService.getAll();
  readonly chiffresCles$ = this.chiffresClesService.getAll();

  constructor() {
    this.seo.definirPage('ACCUEIL.TITRE_PAGE', 'ACCUEIL.DESCRIPTION_PAGE');
  }
}
