import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { OrganisationService } from '../../core/services/organisation.service';
import { IconeContact } from '../../shared/icone-contact/icone-contact';

@Component({
  imports: [TranslatePipe, IconeContact],
  selector: 'cdv-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly organisationService = inject(OrganisationService);

  // toSignal plutôt que `| async` avec un @if englobant tout le composant : cette dernière
  // combinaison a été identifiée comme une source possible d'incohérence à l'hydratation SSR.
  readonly organisation = toSignal(this.organisationService.getInfo());
  readonly anneeCourante = new Date().getFullYear();
}
