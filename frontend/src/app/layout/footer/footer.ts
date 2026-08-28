import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AsyncPipe } from '@angular/common';
import { OrganisationService } from '../../core/services/organisation.service';

@Component({
  imports: [RouterLink, TranslatePipe, AsyncPipe],
  selector: 'cdv-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly organisationService = inject(OrganisationService);

  readonly organisation$ = this.organisationService.getInfo();
  readonly anneeCourante = new Date().getFullYear();
}
