import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjetsService } from '../../core/services/projets.service';
import { SeoService } from '../../core/services/seo.service';
import { Carte } from '../../shared/carte/carte';
import { Badge } from '../../shared/badge/badge';

@Component({
  imports: [AsyncPipe, TranslatePipe, Carte, Badge],
  selector: 'cdv-projets',
  templateUrl: './projets.html',
  styleUrl: './projets.scss',
})
export class Projets {
  private readonly projetsService = inject(ProjetsService);
  private readonly seo = inject(SeoService);

  readonly projets$ = this.projetsService.getAll();

  constructor() {
    this.seo.definirPage('PROJETS.TITRE_PAGE', 'PROJETS.DESCRIPTION_PAGE');
  }
}
