import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type BoutonVariante = 'primaire' | 'secondaire' | 'tertiaire' | 'accent';

@Component({
  imports: [RouterLink],
  selector: 'cdv-bouton',
  templateUrl: './bouton.html',
  styleUrl: './bouton.scss',
})
export class Bouton {
  variante = input<BoutonVariante>('primaire');
  type = input<'button' | 'submit'>('button');
  disabled = input<boolean>(false);
  chargement = input<boolean>(false);
  routerLink = input<string | undefined>(undefined);
}
