import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';
import { OrganisationService } from '../../core/services/organisation.service';
import { IconeContact } from '../../shared/icone-contact/icone-contact';

@Component({
  imports: [TranslatePipe, AsyncPipe, IconeContact],
  selector: 'cdv-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly organisationService = inject(OrganisationService);

  readonly organisation$ = this.organisationService.getInfo();
  readonly anneeCourante = new Date().getFullYear();
}
