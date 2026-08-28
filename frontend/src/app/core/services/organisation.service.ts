import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Organisation } from '../models/organisation.model';

// TODO: contenu à valider avec le client — téléphone, email et lien Facebook réels
// (voir docs/contraintes-a-verifier.md). Seule l'adresse (Tsévié) est confirmée (cahier des charges).
@Injectable({ providedIn: 'root' })
export class OrganisationService {
  private readonly organisation: Organisation = {
    nom: 'Chance De Vivre-Togo',
    adresse: 'Tsévié, région Maritime, Togo',
    telephone: '+228 00 00 00 00',
    email: 'contact@chancedevivre-togo.org',
    facebookUrl: 'https://www.facebook.com/',
  };

  getInfo(): Observable<Organisation> {
    return of(this.organisation);
  }
}
