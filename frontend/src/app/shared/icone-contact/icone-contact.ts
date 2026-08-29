import { Component, input } from '@angular/core';
import { TypeIconeContact } from '../../core/models/coordonnee-affichee.model';

@Component({
  imports: [],
  selector: 'cdv-icone-contact',
  templateUrl: './icone-contact.html',
  styleUrl: './icone-contact.scss',
})
export class IconeContact {
  type = input.required<TypeIconeContact>();
}
