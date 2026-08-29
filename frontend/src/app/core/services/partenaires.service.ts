import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Partenaire } from '../models/partenaire.model';

// Partenaires confirmés (cahier des charges section 2). Logos fournis par le client :
// TODO: voir docs/contraintes-a-verifier.md — deux fichiers sont des substituts imparfaits
// (bulletin recadré pour Tukolere Wamu, photo de drapeau pour l'ambassade), à remplacer par
// de vrais logos dès qu'ils seront disponibles.
@Injectable({ providedIn: 'root' })
export class PartenairesService {
  private readonly partenaires: Partenaire[] = [
    {
      id: 'tukolere-wamu',
      nom: 'Tukolere Wamu e.V.',
      description: 'Association partenaire basée en Allemagne.',
      logo: 'images/partenaires/tukolere-wamu.png',
      logoAlt: 'Logo de Tukolere Wamu e.V.',
    },
    {
      id: 'ambassade-allemagne-togo',
      nom: "Ambassade d'Allemagne au Togo",
      description: 'Partenaire institutionnel.',
      logo: 'images/partenaires/ambassade-allemagne.jpg',
      logoAlt: "Drapeau de l'Allemagne, représentant l'Ambassade d'Allemagne au Togo",
    },
    {
      id: 'ministere-sante-togo',
      nom: 'Ministère de la Santé du Togo',
      description: 'Partenaire institutionnel.',
      logo: 'images/partenaires/ministere-sante-togo.png',
      logoAlt: 'Logo du Ministère de la Santé du Togo',
    },
    {
      id: 'pnso',
      nom: 'Programme National de Santé Oculaire (PNSO)',
      description: 'Partenaire institutionnel.',
      logo: 'images/partenaires/pnso.jpg',
      logoAlt: 'Logo du Programme National de Santé Oculaire',
    },
  ];

  getAll(): Observable<Partenaire[]> {
    return of(this.partenaires);
  }
}
