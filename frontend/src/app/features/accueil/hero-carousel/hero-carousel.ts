import { Component, DestroyRef, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { HeroCarouselService } from '../../../core/services/hero-carousel.service';
import { HeroSlide } from '../../../core/models/hero-slide.model';
import { cheminImage } from '../../../core/config/image.config';

const DUREE_AFFICHAGE_MS = 6000;
const SEUIL_SWIPE_PX = 40;

@Component({
  imports: [TranslatePipe],
  selector: 'cdv-hero-carousel',
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.scss',
})
export class HeroCarousel {
  private readonly heroCarouselService = inject(HeroCarouselService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly estNavigateur = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly reduitMouvement =
    this.estNavigateur &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private minuteur?: ReturnType<typeof setTimeout>;
  private touchDepartX = 0;

  readonly slides = signal<HeroSlide[]>([]);
  readonly indexActif = signal(0);
  readonly enPause = signal(false);

  constructor() {
    this.heroCarouselService.getAll().subscribe((slides) => {
      this.slides.set(slides);
      this.redemarrerMinuteur();
    });

    this.destroyRef.onDestroy(() => this.arreterMinuteur());
  }

  cheminImage(nom: string): string {
    return cheminImage(nom);
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
