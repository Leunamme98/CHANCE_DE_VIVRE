import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { PartenairesService } from '../../core/services/partenaires.service';
import { SeoService } from '../../core/services/seo.service';
import { Carte } from '../../shared/carte/carte';

@Component({
  imports: [AsyncPipe, TranslatePipe, Carte],
  selector: 'cdv-partenaires',
  templateUrl: './partenaires.html',
  styleUrl: './partenaires.scss',
})
export class Partenaires {
  private readonly partenairesService = inject(PartenairesService);
  private readonly seo = inject(SeoService);

  readonly partenaires$ = this.partenairesService.getAll();

  constructor() {
    this.seo.definirPage('PARTENAIRES.TITRE_PAGE', 'PARTENAIRES.DESCRIPTION_PAGE');
  }
}
