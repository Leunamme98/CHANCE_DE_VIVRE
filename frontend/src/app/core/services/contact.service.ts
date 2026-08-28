import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageContact } from '../models/message-contact.model';

// TODO: contenu à valider avec le client — remplacer par l'URL Formspree réelle une fois le formulaire créé.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/TODO_FORM_ID';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private readonly http: HttpClient) {}

  envoyer(message: MessageContact): Observable<object> {
    return this.http.post(FORMSPREE_ENDPOINT, message, {
      headers: { Accept: 'application/json' },
    });
  }
}
