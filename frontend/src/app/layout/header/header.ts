import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';
import { CodeLangue, Langue } from '../../core/models/langue.model';
import { DrapeauLangue } from '../../shared/drapeau-langue/drapeau-langue';

interface PositionIndicateur {
  left: number;
  width: number;
}

@Component({
  imports: [RouterLink, RouterLinkActive, TranslatePipe, DrapeauLangue],
  selector: 'cdv-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);
  private readonly estNavigateur = isPlatformBrowser(inject(PLATFORM_ID));

  @ViewChildren('navLien') private readonly navLiens!: QueryList<ElementRef<HTMLAnchorElement>>;
  @ViewChild('selecteurLangue') private readonly selecteurLangue?: ElementRef<HTMLElement>;

  // Les noms sont volontairement en dur et non traduits : c'est tout l'intérêt d'un endonyme.
  // Un visiteur germanophone arrivant sur la version française doit reconnaître « Deutsch ».
  readonly langues: Langue[] = [
    { code: 'fr', nom: 'Français', abrege: 'FR' },
    { code: 'en', nom: 'English', abrege: 'EN' },
    { code: 'de', nom: 'Deutsch', abrege: 'DE' },
  ];

  readonly menuOuvert = signal(false);
  readonly languesOuvertes = signal(false);
  readonly langueActuelle = this.translate.currentLang;
  readonly indicateur = signal<PositionIndicateur>({ left: 0, width: 0 });

  readonly abregeCourant = computed(
    () => this.langues.find((l) => l.code === this.langueActuelle())?.abrege ?? 'FR',
  );

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

  // Ferme le panneau de langue si l'on clique ailleurs. Sans ceci, le panneau resterait ouvert
  // par-dessus le contenu de la page une fois l'attention partie ailleurs.
  @HostListener('document:click', ['$event'])
  onClicDocument(evenement: MouseEvent): void {
    if (!this.estNavigateur || !this.languesOuvertes()) {
      return;
    }

    const cible = evenement.target as Node | null;
    if (cible && !this.selecteurLangue?.nativeElement.contains(cible)) {
      this.languesOuvertes.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEchap(): void {
    this.languesOuvertes.set(false);
    this.menuOuvert.set(false);
  }

  changerLangue(code: CodeLangue): void {
    this.translate.use(code);
    this.languesOuvertes.set(false);
    this.menuOuvert.set(false);
  }

  // Les deux panneaux se recouvriraient sur mobile : ouvrir l'un ferme toujours l'autre.
  basculerLangues(): void {
    this.languesOuvertes.update((ouvert) => !ouvert);
    this.menuOuvert.set(false);
  }

  basculerMenu(): void {
    this.menuOuvert.update((ouvert) => !ouvert);
    this.languesOuvertes.set(false);
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
