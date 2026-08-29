import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageContact } from '../models/message-contact.model';

// TODO: contenu à valider avec le client — remplacer par l'URL Formspree réelle une fois le formulaire créé.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TODO_FORM_ID';

// Le projet n'a pas de backend (cahier des charges section 5.1 : formulaire "sans backend",
// via Formspree) : on ne peut donc pas envoyer nous-mêmes un email SMTP depuis le site (ça
// exigerait un serveur et des identifiants secrets, impossibles à garder côté client). On
// s'appuie à la place sur les champs spéciaux de Formspree pour obtenir un email bien formaté :
// - `_subject` : objet de l'email reçu par l'ONG (repris du champ "Objet" du formulaire)
// - `_replyto` : répondre depuis la boîte mail de l'ONG revient directement à l'expéditeur
// - `_cc`      : envoie une copie du message à l'expéditeur lui-même
// TODO: `_cc` (copie à l'expéditeur) et les autoréponses Formspree dépendent du plan tarifaire
// du compte Formspree utilisé — à vérifier une fois le vrai compte/formulaire créé.
@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private readonly http: HttpClient) {}

  envoyer(message: MessageContact): Observable<object> {
    const payload = {
      nom: message.nom,
      email: message.email,
      telephone: message.telephone || undefined,
      objet: message.objet,
      message: message.message,
      _subject: `[Site web Chance De Vivre-Togo] ${message.objet}`,
      _replyto: message.email,
      _cc: message.email,
    };

    return this.http.post(FORMSPREE_ENDPOINT, payload, {
      headers: { Accept: 'application/json' },
    });
  }
}
