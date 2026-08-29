import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { ContactService } from '../../core/services/contact.service';
import { OrganisationService } from '../../core/services/organisation.service';
import { SeoService } from '../../core/services/seo.service';
import { Bouton } from '../../shared/bouton/bouton';
import { Modale } from '../../shared/modale/modale';
import { CoordonneesCarousel } from './coordonnees-carousel/coordonnees-carousel';
import { CoordonneeAffichee } from '../../core/models/coordonnee-affichee.model';
import { Organisation } from '../../core/models/organisation.model';
import { INDICATIFS_TELEPHONIQUES } from '../../core/config/indicatifs-telephoniques.config';

type EtatEnvoi = 'inactif' | 'en_cours' | 'succes' | 'erreur';

// Regex HTML5/WHATWG standard pour la validation d'email (celle utilisée par les navigateurs
// pour <input type="email">) — plus rigoureuse que le simple Validators.email d'Angular.
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function construireCoordonnees(org: Organisation): CoordonneeAffichee[] {
  return [
    {
      id: 'adresse',
      icone: 'adresse',
      titreCle: 'FOOTER.ADRESSE_LIBELLE',
      valeur: org.adresse,
      lien: null,
      externe: false,
    },
    {
      id: 'telephone',
      icone: 'telephone',
      titreCle: 'FOOTER.TELEPHONE_LIBELLE',
      valeur: org.telephone,
      lien: 'tel:' + org.telephone,
      externe: false,
    },
    {
      id: 'whatsapp',
      icone: 'whatsapp',
      titreCle: 'FOOTER.WHATSAPP_LIBELLE',
      valeur: org.whatsapp,
      lien: org.whatsappUrl,
      externe: true,
    },
    {
      id: 'email',
      icone: 'email',
      titreCle: 'FOOTER.EMAIL_LIBELLE',
      valeur: org.email,
      lien: 'mailto:' + org.email,
      externe: false,
    },
    {
      id: 'messenger',
      icone: 'messenger',
      titreCle: 'FOOTER.MESSENGER_LIBELLE',
      valeur: org.nom,
      lien: org.messengerUrl,
      externe: true,
    },
    {
      id: 'facebook',
      icone: 'facebook',
      titreCle: 'FOOTER.FACEBOOK',
      valeur: org.nom,
      lien: org.facebookUrl,
      externe: true,
    },
  ];
}

@Component({
  imports: [ReactiveFormsModule, TranslatePipe, Bouton, Modale, CoordonneesCarousel],
  selector: 'cdv-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly organisationService = inject(OrganisationService);
  private readonly seo = inject(SeoService);

  readonly indicatifs = INDICATIFS_TELEPHONIQUES;
  readonly etat = signal<EtatEnvoi>('inactif');

  private readonly organisation = toSignal(this.organisationService.getInfo());
  readonly coordonnees = computed(() => {
    const org = this.organisation();
    return org ? construireCoordonnees(org) : [];
  });

  readonly formulaire = this.fb.nonNullable.group({
    nom: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
    indicatif: [this.indicatifs[0].indicatif, [Validators.required]],
    telephoneNumero: ['', [Validators.pattern(/^[0-9 ]{6,15}$/)]],
    objet: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  constructor() {
    this.seo.definirPage('CONTACT.TITRE_PAGE', 'CONTACT.DESCRIPTION_PAGE');
  }

  fermerErreur(): void {
    this.etat.set('inactif');
  }

  envoyer(): void {
    if (this.formulaire.invalid) {
      this.formulaire.markAllAsTouched();
      return;
    }

    const { nom, email, indicatif, telephoneNumero, objet, message } = this.formulaire.getRawValue();
    const telephone = telephoneNumero.trim() ? `${indicatif} ${telephoneNumero.trim()}` : '';

    this.etat.set('en_cours');
    this.contactService.envoyer({ nom, email, telephone, objet, message }).subscribe({
      next: () => {
        this.etat.set('succes');
        this.formulaire.reset({ indicatif: this.indicatifs[0].indicatif });
      },
      error: () => {
        this.etat.set('erreur');
      },
    });
  }
}
