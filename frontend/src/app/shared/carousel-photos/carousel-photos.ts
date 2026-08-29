import { Component, DestroyRef, PLATFORM_ID, effect, inject, input, signal, untracked } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { HeroSlide } from '../../core/models/hero-slide.model';
import { cheminImage } from '../../core/config/image.config';

const DUREE_AFFICHAGE_MS = 6000;
const SEUIL_SWIPE_PX = 40;

export type CarouselPhotosTaille = 'hero' | 'compact';

@Component({
  imports: [TranslatePipe],
  selector: 'cdv-carousel-photos',
  templateUrl: './carousel-photos.html',
  styleUrl: './carousel-photos.scss',
})
export class CarouselPhotos {
  private readonly destroyRef = inject(DestroyRef);
  private readonly estNavigateur = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly reduitMouvement =
    this.estNavigateur &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private minuteur?: ReturnType<typeof setTimeout>;
  private touchDepartX = 0;

  readonly slides = input<HeroSlide[]>([]);
  readonly taille = input<CarouselPhotosTaille>('hero');
  readonly libelleRegion = input.required<string>();

  readonly indexActif = signal(0);
  readonly enPause = signal(false);

  constructor() {
    effect(() => {
      // Ne dépendre que de `slides` : redemarrerMinuteur() lit enPause() en interne, et
      // l'appeler sans untracked() ferait dépendre cet effect de enPause — provoquant une
      // remise à 0 de la diapo active à chaque survol de souris (voir bug initial).
      this.slides();
      this.indexActif.set(0);
      untracked(() => this.redemarrerMinuteur());
    });

    this.destroyRef.onDestroy(() => this.arreterMinuteur());
  }

  cheminImage(nom: string): string {
    return cheminImage(nom);
  }

  // Décalage (en multiples de 100%) de la diapo i par rapport à la diapo active, en choisissant
  // toujours le sens le plus court sur l'anneau des diapos — c'est ce qui fait glisser la nouvelle
  // diapo depuis le bon côté (droite en avançant, gauche en reculant), y compris en bouclant du
  // dernier au premier élément.
  decalage(i: number): number {
    const total = this.slides().length;
    if (total === 0) {
      return 0;
    }
    let d = i - this.indexActif();
    if (d > total / 2) {
      d -= total;
    } else if (d < -total / 2) {
      d += total;
    }
    return d;
  }

  suivant(): void {
    const total = this.slides().length;
    if (total === 0) {
      return;
    }
    this.indexActif.update((i) => (i + 1) % total);
    this.redemarrerMinuteur();
  }

  precedent(): void {
    const total = this.slides().length;
    if (total === 0) {
      return;
    }
    this.indexActif.update((i) => (i - 1 + total) % total);
    this.redemarrerMinuteur();
  }

  allerA(index: number): void {
    this.indexActif.set(index);
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

  onTouchStart(event: TouchEvent): void {
    this.touchDepartX = event.touches[0].clientX;
    this.onSurvolEntree();
  }

  onTouchEnd(event: TouchEvent): void {
    const delta = event.changedTouches[0].clientX - this.touchDepartX;
    if (Math.abs(delta) > SEUIL_SWIPE_PX) {
      if (delta < 0) {
        this.suivant();
      } else {
        this.precedent();
      }
    }
    this.onSurvolSortie();
  }

  private redemarrerMinuteur(): void {
    this.arreterMinuteur();

    if (!this.estNavigateur || this.reduitMouvement || this.enPause() || this.slides().length < 2) {
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
