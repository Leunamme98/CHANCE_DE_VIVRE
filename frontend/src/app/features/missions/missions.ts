import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MissionsService } from '../../core/services/missions.service';
import { SeoService } from '../../core/services/seo.service';
import { Carte } from '../../shared/carte/carte';
import { Badge } from '../../shared/badge/badge';

@Component({
  imports: [AsyncPipe, TranslatePipe, Carte, Badge],
  selector: 'cdv-missions',
  templateUrl: './missions.html',
  styleUrl: './missions.scss',
})
export class Missions {
  private readonly missionsService = inject(MissionsService);
  private readonly seo = inject(SeoService);

  readonly missions$ = this.missionsService.getAll();

  constructor() {
    this.seo.definirPage('MISSIONS.TITRE_PAGE', 'MISSIONS.DESCRIPTION_PAGE');
  }
}
