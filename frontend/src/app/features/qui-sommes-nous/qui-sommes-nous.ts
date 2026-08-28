import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../core/services/seo.service';
import { Carte } from '../../shared/carte/carte';

@Component({
  imports: [TranslatePipe, Carte],
  selector: 'cdv-qui-sommes-nous',
  templateUrl: './qui-sommes-nous.html',
  styleUrl: './qui-sommes-nous.scss',
})
export class QuiSommesNous {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.definirPage('QUI_SOMMES_NOUS.TITRE_PAGE', 'QUI_SOMMES_NOUS.DESCRIPTION_PAGE');
  }
}
