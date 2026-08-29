import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjetsService } from '../../core/services/projets.service';
import { SeoService } from '../../core/services/seo.service';
import { Carte } from '../../shared/carte/carte';
import { Badge } from '../../shared/badge/badge';
import { Bouton } from '../../shared/bouton/bouton';
import { RevealAuScroll } from '../../shared/reveal-au-scroll/reveal-au-scroll';
import { CategorieProjet } from '../../core/models/projet.model';

type FiltreCategorie = 'tous' | CategorieProjet;

@Component({
  imports: [TranslatePipe, Carte, Badge, Bouton, RevealAuScroll],
  selector: 'cdv-projets',
  templateUrl: './projets.html',
  styleUrl: './projets.scss',
})
export class Projets {
  private readonly projetsService = inject(ProjetsService);
  private readonly seo = inject(SeoService);

  readonly filtres: FiltreCategorie[] = ['tous', 'education', 'sante', 'economie'];
  readonly filtreActif = signal<FiltreCategorie>('tous');

  private readonly tousLesProjets = toSignal(this.projetsService.getAll(), { initialValue: [] });

  readonly projetsFiltres = computed(() => {
    const filtre = this.filtreActif();
    const projets = this.tousLesProjets();
    return filtre === 'tous' ? projets : projets.filter((p) => p.categorie === filtre);
  });

  constructor() {
    this.seo.definirPage('PROJETS.TITRE_PAGE', 'PROJETS.DESCRIPTION_PAGE');
  }

  choisirFiltre(filtre: FiltreCategorie): void {
    this.filtreActif.set(filtre);
  }
}
