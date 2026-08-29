import {
  Component,
  ElementRef,
  PLATFORM_ID,
  effect,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'cdv-modale',
  templateUrl: './modale.html',
  styleUrl: './modale.scss',
})
export class Modale {
  private readonly estNavigateur = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly boite = viewChild<ElementRef<HTMLElement>>('boite');

  readonly ouverte = input<boolean>(false);
  readonly titre = input<string>('');
  readonly fermer = output<void>();

  constructor() {
    effect(() => {
      if (this.ouverte() && this.estNavigateur) {
        // Focus la boîte au prochain tick pour laisser le temps au @if de l'insérer au DOM.
        queueMicrotask(() => this.boite()?.nativeElement.focus());
      }
    });
  }

  onFondClick(): void {
    this.fermer.emit();
  }

  onToucheClavier(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.fermer.emit();
    }
  }
}
