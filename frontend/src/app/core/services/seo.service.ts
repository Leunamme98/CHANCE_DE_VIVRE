import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);

  definirPage(titreCle: string, descriptionCle: string): void {
    effect(() => {
      this.translate.currentLang();
      this.translate.get([titreCle, descriptionCle]).subscribe((traductions) => {
        this.title.setTitle(traductions[titreCle]);
        this.meta.updateTag({ name: 'description', content: traductions[descriptionCle] });
      });
    });
  }

  definirLangueDocument(): void {
    effect(() => {
      const lang = this.translate.currentLang();
      if (lang) {
        this.document.documentElement.lang = lang;
      }
    });
  }
}
