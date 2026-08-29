import { Component, DestroyRef, PLATFORM_ID, effect, inject, input, signal, untracked } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { CoordonneeAffichee } from '../../../core/models/coordonnee-affichee.model';
import { IconeContact } from '../../../shared/icone-contact/icone-contact';

const DUREE_AFFICHAGE_MS = 5000;

@Component({
  imports: [TranslatePipe, IconeContact],
  selector: 'cdv-coordonnees-carousel',
  templateUrl: './coordonnees-carousel.html',
  styleUrl: './coordonnees-carousel.scss',
})
export class CoordonneesCarousel {
  private readonly destroyRef = inject(DestroyRef);
  private readonly estNavigateur = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly reduitMouvement =
    this.estNavigateur &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private minuteur?: ReturnType<typeof setTimeout>;

  readonly items = input<CoordonneeAffichee[]>([]);
  readonly libelleRegion = input.required<string>();

  readonly indexActif = signal(0);
  readonly enPause = signal(false);

  constructor() {
    effect(() => {
      // Ne dépendre que de `items` : redemarrerMinuteur() lit enPause() en interne, l'appeler
      // sans untracked() ferait dépendre cet effect de enPause (remise à 0 à chaque survol).
      this.items();
      this.indexActif.set(0);
      untracked(() => this.redemarrerMinuteur());
    });

    this.destroyRef.onDestroy(() => this.arreterMinuteur());
  }

  allerA(index: number): void {
    this.indexActif.set(index);
    this.redemarrerMinuteur();
  }

  suivant(): void {
    const total = this.items().length;
    if (total === 0) {
      return;
    }
    this.indexActif.update((i) => (i + 1) % total);
    this.redemarrerMinuteur();
  }

  precedent(): void {
    const total = this.items().length;
    if (total === 0) {
      return;
    }
    this.indexActif.update((i) => (i - 1 + total) % total);
    this.redemarrerMinuteur();
  }

  onSurvolEntree(): void {
    this.enPause.set(true);
    this.arreterMinuteur();
  }

  onSurvolSortie(): void {
    this.enPause.set(false);
    this.redemarrerMinuteur();
  }

  onToucheClavier(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.suivant();
      event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
      this.precedent();
      event.preventDefault();
    }
  }

  private redemarrerMinuteur(): void {
    this.arreterMinuteur();

    if (!this.estNavigateur || this.reduitMouvement || this.enPause() || this.items().length < 2) {
      return;
    }

    this.minuteur = setTimeout(() => this.suivant(), DUREE_AFFICHAGE_MS);
  }

  private arreterMinuteur(): void {
    if (this.minuteur) {
      clearTimeout(this.minuteur);
      this.minuteur = undefined;
    }
  }
}
