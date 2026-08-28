import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projet } from '../models/projet.model';

// Zones d'action confirmées (cahier des charges section 2). Titres, descriptions, dates et photos
// sont des placeholders : TODO: contenu à valider avec le client (voir docs/contraintes-a-verifier.md).
@Injectable({ providedIn: 'root' })
export class ProjetsService {
  private readonly projets: Projet[] = [
    {
      id: 'renovation-epp-tsevie',
      titre: "Rénovation d'une école publique à Tsévié",
      categorie: 'education',
      description: 'Rénovation de salles de classe et don de tables-bancs.', // TODO: contenu à valider avec le client
      image: 'images/projets/education-tsevie.jpg',
      imageAlt: "Salle de classe rénovée dans une école publique à Tsévié",
      date: '2025', // TODO: contenu à valider avec le client
      lieu: 'Tsévié, région Maritime',
    },
    {
      id: 'campagne-cataracte',
      titre: 'Campagne de chirurgie de la cataracte',
      categorie: 'sante',
      description: "Consultations et opérations de la cataracte en collaboration avec le PNSO.", // TODO: contenu à valider avec le client
      image: 'images/projets/sante-cataracte.jpg',
      imageAlt: 'Équipe médicale lors d\'une campagne de chirurgie de la cataracte',
      date: '2025', // TODO: contenu à valider avec le client
      lieu: 'Région de Kara',
    },
    {
      id: 'production-savon-femmes',
      titre: 'Groupement de femmes — production de savon',
      categorie: 'economie',
      description: "Accompagnement d'un groupement de femmes dans la production et la vente de savon.", // TODO: contenu à valider avec le client
      image: 'images/projets/economie-savon.jpg',
      imageAlt: 'Groupe de femmes lors d\'une session de production de savon',
      date: '2025', // TODO: contenu à valider avec le client
      lieu: 'Agbonou, région des Plateaux',
    },
    {
      id: 'dons-tables-bancs-anie',
      titre: 'Don de tables-bancs',
      categorie: 'education',
      description: "Don de tables-bancs à une école publique.", // TODO: contenu à valider avec le client
      image: 'images/projets/education-anie.jpg',
      imageAlt: 'Tables-bancs neufs livrés dans une école',
      date: '2024', // TODO: contenu à valider avec le client
      lieu: 'Anié, région des Plateaux',
    },
  ];

  getAll(): Observable<Projet[]> {
    return of(this.projets);
  }

  getByCategorie(categorie: Projet['categorie']): Observable<Projet[]> {
    return of(this.projets.filter((p) => p.categorie === categorie));
  }
}
