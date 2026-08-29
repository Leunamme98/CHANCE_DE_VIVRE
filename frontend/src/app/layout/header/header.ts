import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

interface LangueOption {
  code: 'fr' | 'en' | 'de';
  libelle: string;
}

interface PositionIndicateur {
  left: number;
  width: number;
}

@Component({
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  selector: 'cdv-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly estNavigateur = isPlatformBrowser(inject(PLATFORM_ID));

  @ViewChildren('navLien') private readonly navLiens!: QueryList<ElementRef<HTMLAnchorElement>>;

  readonly langues: LangueOption[] = [
    { code: 'fr', libelle: 'FR' },
    { code: 'en', libelle: 'EN' },
    { code: 'de', libelle: 'DE' },
  ];

  readonly menuOuvert = signal(false);
  readonly langueActuelle = this.translate.currentLang;
  readonly indicateur = signal<PositionIndicateur>({ left: 0, width: 0 });

  constructor() {
    // Le repositionnement de l'indicateur lit le DOM (offsetLeft/offsetWidth) : uniquement côté navigateur, jamais en SSR/prerendering.
    if (!this.estNavigateur) {
      return;
    }

    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      requestAnimationFrame(() => this.positionnerIndicateur());
    });

    // La largeur des liens change avec la langue (ex: "Nos projets" -> "Unsere Projekte") :
    // sans ceci, l'indicateur gardait la largeur calculée pour l'ancienne langue.
    this.translate.onLangChange.subscribe(() => {
      requestAnimationFrame(() => this.positionnerIndicateur());
    });
  }

  ngAfterViewInit(): void {
    if (!this.estNavigateur) {
      return;
    }

    requestAnimationFrame(() => this.positionnerIndicateur());
    this.navLiens.changes.subscribe(() => requestAnimationFrame(() => this.positionnerIndicateur()));
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.estNavigateur) {
      this.positionnerIndicateur();
    }
  }

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

  private positionnerIndicateur(): void {
    const lienActif = this.navLiens?.find((lien) =>
      lien.nativeElement.classList.contains('active'),
    );

    if (!lienActif) {
      return;
    }

    this.indicateur.set({
      left: lienActif.nativeElement.offsetLeft,
      width: lienActif.nativeElement.offsetWidth,
    });
  }
}
