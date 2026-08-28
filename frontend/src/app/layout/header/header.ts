import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

interface LangueOption {
  code: 'fr' | 'en' | 'de';
  libelle: string;
}

@Component({
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  selector: 'cdv-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly translate = inject(TranslateService);

  readonly langues: LangueOption[] = [
    { code: 'fr', libelle: 'FR' },
    { code: 'en', libelle: 'EN' },
    { code: 'de', libelle: 'DE' },
  ];

  readonly menuOuvert = signal(false);
  readonly langueActuelle = this.translate.currentLang;

  changerLangue(code: string): void {
    this.translate.use(code);
    this.menuOuvert.set(false);
  }

  basculerMenu(): void {
    this.menuOuvert.update((ouvert) => !ouvert);
  }

  fermerMenu(): void {
    this.menuOuvert.set(false);
  }
}
