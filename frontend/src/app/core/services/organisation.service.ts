import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Organisation } from '../models/organisation.model';

// TODO: email à valider avec le client — placeholder non confirmé (voir docs/contraintes-a-verifier.md).
// Adresse, téléphone, WhatsApp, Messenger et Facebook sont confirmés par le client.
@Injectable({ providedIn: 'root' })
export class OrganisationService {
  private readonly organisation: Organisation = {
    nom: 'Chance De Vivre-Togo',
    adresse: 'Rue Assomé, Tsévié, Togo',
    telephone: '+228 90 19 25 82',
    whatsapp: '+228 99 57 91 71',
    whatsappUrl: 'https://wa.me/22899579171',
    messengerUrl: 'https://m.me/100064758517120',
    email: 'contact@chancedevivre-togo.org',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100064758517120',
  };

  getInfo(): Observable<Organisation> {
    return of(this.organisation);
  }
}
