import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageContact } from '../models/message-contact.model';

// Netlify Forms (remplace Formspree). Fonctionnement :
//  1. au déploiement, Netlify analyse le HTML pré-rendu et détecte le formulaire de /contact
//     grâce à `data-netlify="true"` et aux attributs `name` des champs (cf. contact.html) ;
//  2. les soumissions sont ensuite postées sur n'importe quel chemin du site, en
//     `application/x-www-form-urlencoded`, avec un champ `form-name` qui doit correspondre
//     exactement au `name` du formulaire déclaré dans le template.
//
// Aucune clé d'API ni adresse de destination dans le dépôt : les notifications sont
// configurées côté tableau de bord Netlify et modifiables sans redéploiement.
//
// ⚠️ Ce point d'entrée n'existe QUE sur un déploiement Netlify. En `ng serve`, le POST vers `/`
// n'est intercepté par personne et échoue : le formulaire ne peut pas être testé en local
// autrement qu'avec `netlify dev` ou sur une preview de déploiement.
const NETLIFY_FORM_NAME = 'contact';
const NETLIFY_FORM_ENDPOINT = '/';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private readonly http: HttpClient) {}

  envoyer(message: MessageContact): Observable<string> {
    const corps = new URLSearchParams({
      'form-name': NETLIFY_FORM_NAME,
      nom: message.nom,
      email: message.email,
      telephone: message.telephone,
      objet: message.objet,
      message: message.message,
    });

    // `responseType: 'text'` est indispensable : Netlify répond avec du HTML, pas du JSON.
    // Sans ça, Angular tenterait un JSON.parse et basculerait sur la branche d'erreur alors
    // que l'envoi a réussi.
    return this.http.post(NETLIFY_FORM_ENDPOINT, corps.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'text',
    });
  }
}
