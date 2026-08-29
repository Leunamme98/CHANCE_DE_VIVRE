import { AfterViewInit, Directive, ElementRef, PLATFORM_ID, inject, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Ajoute une classe `cdv-revele--visible` (définie dans styles/_reveal.scss, globale car
// appliquée à des hôtes de composants différents) dès que l'élément entre dans le viewport.
// Sans JS ou avec prefers-reduced-motion, le contenu reste visible immédiatement.
@Directive({
  selector: '[cdvRevele]',
})
export class RevealAuScroll implements AfterViewInit {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly estNavigateur = isPlatformBrowser(inject(PLATFORM_ID));

  readonly delai = input<number>(0, { alias: 'cdvReveleDelai' });

  ngAfterViewInit(): void {
    const hote = this.el.nativeElement;

    if (
      !this.estNavigateur ||
      typeof window.matchMedia !== 'function' ||
      typeof IntersectionObserver === 'undefined'
    ) {
      hote.classList.add('cdv-revele--visible');
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      hote.classList.add('cdv-revele--visible');
      return;
    }

    hote.classList.add('cdv-revele');
    if (this.delai()) {
      hote.style.transitionDelay = `${this.delai()}ms`;
    }

    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          hote.classList.add('cdv-revele--visible');
          observateur.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );
    observateur.observe(hote);
  }
}
