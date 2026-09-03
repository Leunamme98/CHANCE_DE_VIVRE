import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Organisation } from '../models/organisation.model';

// Adresse, téléphone, WhatsApp, Messenger et Facebook sont confirmés par le client.
// L'adresse email est désormais celle retenue officiellement pour le projet.
// TODO: elle ne fonctionnera qu'une fois le domaine `chancedevivre-togo.org` acheté ET la
// boîte (ou la redirection) créée — d'ici là, le lien `mailto:` de la page Contact et du pied
// de page pointe dans le vide (voir docs/contraintes-a-verifier.md).
@Injectable({ providedIn: 'root' })
export class OrganisationService {
  private readonly organisation: Organisation = {
    nom: 'Chance De Vivre-Togo',
    adresse: 'Assomé, Tsévié, Togo',
    // Une seule ligne pour les appels et pour WhatsApp (confirmé par le client, remplace
    // l'ancien +228 90 19 25 82). Les deux entrées restent distinctes à l'affichage : même
    // numéro, mais un lien `tel:` d'un côté et un lien `wa.me` de l'autre.
    telephone: '+228 99 57 91 71',
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
