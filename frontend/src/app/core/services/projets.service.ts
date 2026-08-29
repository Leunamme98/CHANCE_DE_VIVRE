import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projet } from '../models/projet.model';
import { cheminImage } from '../config/image.config';

// Zones d'action confirmées (cahier des charges section 2). Titres, descriptions et dates
// sont des placeholders : TODO: contenu à valider avec le client (voir docs/contraintes-a-verifier.md).
// Photos réelles fournies par le client, associées ici par correspondance visuelle avec chaque
// projet : TODO: confirmer avec le client que chaque photo illustre bien le projet auquel elle est
// rattachée (voir docs/contraintes-a-verifier.md).
@Injectable({ providedIn: 'root' })
export class ProjetsService {
  private readonly projets: Projet[] = [
    {
      id: 'renovation-epp-tsevie',
      titre: "Rénovation d'une école publique à Tsévié",
      categorie: 'education',
      description: 'Rénovation de salles de classe et don de tables-bancs.', // TODO: contenu à valider avec le client
      image: cheminImage('projets-01-ciment-construction'),
      imageAlt: 'Sacs de ciment transportés sur un chantier de rénovation scolaire',
      date: '2025', // TODO: contenu à valider avec le client
      lieu: 'Tsévié, région Maritime',
    },
    {
      id: 'campagne-cataracte',
      titre: 'Campagne de chirurgie de la cataracte',
      categorie: 'sante',
      description: "Consultations et opérations de la cataracte en collaboration avec le PNSO.", // TODO: contenu à valider avec le client
      image: cheminImage('projets-03-inauguration-sante'),
      imageAlt: "Cérémonie d'inauguration lors d'une campagne de santé",
      date: '2025', // TODO: contenu à valider avec le client
      lieu: 'Région de Kara',
    },
    {
      id: 'production-savon-femmes',
      titre: 'Groupement de femmes — production de savon',
      categorie: 'economie',
      description: "Accompagnement d'un groupement de femmes dans la production et la vente de savon.", // TODO: contenu à valider avec le client
      image: cheminImage('projets-02-sensibilisation'),
      imageAlt: 'Séance de sensibilisation auprès d\'un groupe de femmes',
      date: '2025', // TODO: contenu à valider avec le client
      lieu: 'Agbonou, région des Plateaux',
    },
    {
      id: 'dons-tables-bancs-anie',
      titre: 'Don de tables-bancs',
      categorie: 'education',
      description: "Don de tables-bancs à une école publique.", // TODO: contenu à valider avec le client
      image: cheminImage('hero-02-enfants-tables-bancs'),
      imageAlt: 'Enfants installés à une table-banc neuve offerte par l\'association',
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
