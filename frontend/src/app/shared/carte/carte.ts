import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'cdv-carte',
  templateUrl: './carte.html',
  styleUrl: './carte.scss',
})
export class Carte {
  padded = input<boolean>(true);
  centre = input<boolean>(false);
}
