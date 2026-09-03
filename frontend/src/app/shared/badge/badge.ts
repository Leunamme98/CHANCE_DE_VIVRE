import { Component, input } from '@angular/core';

export type BadgeType =
  | 'neutre'
  | 'education'
  | 'sante'
  | 'economie'
  | 'environnement'
  | 'succes'
  | 'erreur';

@Component({
  imports: [],
  selector: 'cdv-badge',
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  type = input<BadgeType>('neutre');
}
