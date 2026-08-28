import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactService } from '../../core/services/contact.service';
import { OrganisationService } from '../../core/services/organisation.service';
import { SeoService } from '../../core/services/seo.service';
import { Bouton } from '../../shared/bouton/bouton';

type EtatEnvoi = 'inactif' | 'en_cours' | 'succes' | 'erreur';

@Component({
  imports: [ReactiveFormsModule, TranslatePipe, AsyncPipe, Bouton],
  selector: 'cdv-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly organisationService = inject(OrganisationService);
  private readonly seo = inject(SeoService);

  readonly organisation$ = this.organisationService.getInfo();
  readonly etat = signal<EtatEnvoi>('inactif');

  readonly formulaire = this.fb.nonNullable.group({
    nom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  constructor() {
    this.seo.definirPage('CONTACT.TITRE_PAGE', 'CONTACT.DESCRIPTION_PAGE');
  }

  envoyer(): void {
    if (this.formulaire.invalid) {
      this.formulaire.markAllAsTouched();
      return;
    }

    this.etat.set('en_cours');
    this.contactService.envoyer(this.formulaire.getRawValue()).subscribe({
      next: () => {
        this.etat.set('succes');
        this.formulaire.reset();
      },
      error: () => {
        this.etat.set('erreur');
      },
    });
  }
}
