import { Component, input } from '@angular/core';
import { CodeLangue } from '../../core/models/langue.model';

@Component({
  imports: [],
  selector: 'cdv-drapeau-langue',
  templateUrl: './drapeau-langue.html',
  styleUrl: './drapeau-langue.scss',
})
export class DrapeauLangue {
  code = input.required<CodeLangue>();
}
