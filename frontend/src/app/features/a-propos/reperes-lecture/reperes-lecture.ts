import { AfterViewInit, Component, DestroyRef, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

interface Repere {
  id: string;
  libelleCle: string;
}

// Sections de la page A propos dans leur ordre d'affichage — sert à la fois de sommaire
// cliquable et de repère de progression pour que le visiteur sache toujours où il se trouve
// sur une page qui peut être longue.
const SECTIONS: Repere[] = [
  { id: 'histoire', libelleCle: 'QUI_SOMMES_NOUS.HISTOIRE_TITRE' },
  { id: 'missions', libelleCle: 'MISSIONS.TITRE' },
  { id: 'valeurs', libelleCle: 'QUI_SOMMES_NOUS.VALEURS_TITRE' },
  { id: 'zone', libelleCle: 'QUI_SOMMES_NOUS.ZONE_TITRE' },
  { id: 'galerie', libelleCle: 'A_PROPOS.GALERIE_TITRE' },
  { id: 'partenaires', libelleCle: 'PARTENAIRES.TITRE' },
];

@Component({
  imports: [TranslatePipe],
  selector: 'cdv-reperes-lecture',
  templateUrl: './reperes-lecture.html',
  styleUrl: './reperes-lecture.scss',
})
export class ReperesLecture implements AfterViewInit {
  private readonly estNavigateur = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly destroyRef = inject(DestroyRef);

  readonly sections = SECTIONS;
  readonly progression = signal(0);
  readonly sectionActive = signal<string>(SECTIONS[0].id);

  ngAfterViewInit(): void {
    if (!this.estNavigateur) {
      return;
    }

    const majProgression = (): void => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const distance = scrollHeight - clientHeight;
      this.progression.set(distance > 0 ? Math.min(100, Math.round((scrollTop / distance) * 100)) : 0);
    };
    window.addEventListener('scroll', majProgression, { passive: true });
    majProgression();

    if (typeof IntersectionObserver === 'undefined') {
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', majProgression));
      return;
    }

    const observateur = new IntersectionObserver(
      (entrees) => {
        const plusVisible = entrees
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (plusVisible) {
          this.sectionActive.set(plusVisible.target.id);
        }
      },
      { rootMargin: '-15% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        observateur.observe(element);
      }
    }

    this.destroyRef.onDestroy(() => {
      window.removeEventListener('scroll', majProgression);
      observateur.disconnect();
    });
  }

  allerA(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
