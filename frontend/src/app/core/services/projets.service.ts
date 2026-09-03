import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Projet } from '../models/projet.model';
import { cheminImage } from '../config/image.config';

// Réalisations documentées par les publications officielles du client (page Facebook de l'ONG).
// Titres, lieux et sujets sont repris de ces publications — ce ne sont plus des placeholders.
// Règle appliquée : `date` et `lieu` ne sont renseignés que lorsque la publication les mentionne
// explicitement, et sont omis sinon plutôt que devinés (la carte s'adapte, cf. projets.html).
// Chaque photo provient de la publication qui décrit le projet auquel elle est rattachée.
@Injectable({ providedIn: 'root' })
export class ProjetsService {
  private readonly projets: Projet[] = [
    {
      id: 'maison-jeunes-assome',
      titre: "La maison des jeunes d'Assomé",
      categorie: 'education',
      description:
        "Un centre dédié aux jeunes du village, inauguré en présence des autorités préfectorales et traditionnelles et des partenaires allemands. Il réunit une infirmerie, une salle de spectacle et une bibliothèque.",
      image: cheminImage('projet-maison-jeunes-assome'),
      imageAlt:
        "Coupure du ruban d'inauguration de la maison des jeunes par une partenaire allemande et deux responsables de l'ONG, devant la foule",
      date: '2018',
      lieu: 'Assomé, préfecture de Zio',
    },
    {
      id: 'tables-bancs-nkassaide',
      titre: "Don de tables-bancs à l'EPP N'Kassaïdé",
      categorie: 'education',
      description:
        "Remise de tables-bancs aux élèves de l'école primaire publique de N'Kassaïdé, organisée par la coordination régionale de la Kara.",
      image: cheminImage('projet-tables-bancs-nkassaide'),
      imageAlt:
        "Élèves en uniforme kaki réunis autour de tables-bancs neufs marqués « Don de Chance de Vivre », en plein air",
      lieu: "N'Kassaïdé, préfecture d'Assoli",
    },
    {
      id: 'tables-bancs-yokele',
      titre: "Des tables-bancs pour l'EPP de Yokélé",
      categorie: 'education',
      description:
        "Des tables-bancs livrés en pleine pandémie pour permettre aux élèves de respecter la distanciation dans les salles de classe.",
      image: cheminImage('projet-tables-bancs-yokele'),
      imageAlt:
        "Deux écoliers masqués assis à une table-banc neuve portant le prénom d'un donateur",
      date: '2020',
      lieu: 'Yokélé, Kpalimé',
    },
    {
      id: 'eau-potable-yokele',
      titre: "De l'eau potable à l'EPP de Yokélé",
      categorie: 'sante',
      description:
        "Installation d'un point d'eau potable dans la cour de l'école primaire publique de Yokélé.",
      image: cheminImage('projet-eau-potable-yokele'),
      imageAlt:
        "Écoliers en uniforme kaki se lavant les mains et buvant à la borne-fontaine de leur école",
      lieu: 'Yokélé, Kpalimé',
    },
    {
      id: 'batiment-agodeke',
      titre: "Un bâtiment scolaire pour l'EPP d'Agodeke",
      categorie: 'education',
      description:
        "Lancement des travaux de construction d'un bâtiment scolaire, dans le cadre du projet d'amélioration des conditions d'études en milieu rural.",
      image: cheminImage('projet-batiment-agodeke'),
      imageAlt:
        "Déchargement de sacs de ciment depuis un camion sous le regard des enfants du village",
      lieu: 'Agodeke, près de Kpalimé',
    },
    {
      id: 'renovation-ceg-bafilo',
      titre: 'Rénovation du CEG de Bafilo',
      categorie: 'education',
      description:
        "Rénovation complète d'un bâtiment scolaire de quatre classes, réfection du plancher et construction de toilettes séparées pour les filles, les garçons et les professeurs.",
      image: cheminImage('projet-renovation-ceg-bafilo'),
      imageAlt:
        "Coursive du bâtiment scolaire en chantier, sacs de ciment et tables-bancs entassées à l'extérieur",
      lieu: 'Bafilo, région de la Kara',
    },
    {
      id: 'batiment-batamboure',
      titre: "Un bâtiment scolaire pour l'EPP de Batambouré",
      categorie: 'education',
      description:
        "Lancement des travaux de construction d'un bâtiment scolaire, suivi sur place par le président de l'ONG lors d'une visite dans le grand nord du pays.",
      image: cheminImage('projet-batiment-batamboure'),
      imageAlt:
        "Responsables de l'ONG et notables réunis autour des charpentes en bois posées sur le terrain du chantier",
      lieu: 'Batambouré, Dapaong',
    },
    {
      id: 'usp-danyi-ndigbe',
      titre: "Rénovation de l'USP de Danyi N'Digbé",
      categorie: 'sante',
      description:
        "Réhabilitation de l'unité de soins périphérique du village, aux côtés de la population de Danyi N'Digbé.",
      image: cheminImage('projet-usp-danyi-ndigbe'),
      imageAlt:
        "Le bâtiment de l'unité de soins rénové, murs jaunes et volets de bois, vu de trois-quarts",
      lieu: "Danyi N'Digbé, région des Plateaux",
    },
    {
      id: 'vaccination-hiheatro',
      titre: 'Antenne de vaccination du CMS Hiheatro',
      categorie: 'sante',
      description:
        "Construction d'un bâtiment dédié à la vaccination pour le centre médico-social, avec l'appui financier de Tukolere Wamu Allemagne.",
      image: cheminImage('projet-vaccination-hiheatro'),
      imageAlt:
        "Le bâtiment neuf de l'antenne de vaccination, façade jaune et toit vert, avec une soignante devant l'entrée",
      // Date lue sur la plaque commémorative du bâtiment (« Ce 15 Janvier 2020 »).
      date: '2020',
      lieu: 'Hiheatro, région des Plateaux',
    },
    {
      id: 'consultation-prenatale',
      titre: 'Sensibilisation à la consultation prénatale',
      categorie: 'sante',
      description:
        "Séances de sensibilisation sur les avantages de la consultation prénatale et la place de l'échographie dans le suivi d'une grossesse.",
      image: cheminImage('projet-consultation-prenatale'),
      imageAlt:
        "Soignante en blouse blanche remplissant un dossier à côté d'un appareil d'échographie",
    },
    {
      id: 'journee-vih-sida-assome',
      titre: 'Journée mondiale de lutte contre le VIH/SIDA',
      categorie: 'sante',
      description:
        "Une journée entière mobilisée autour du village : caravane, projection d'un film de sensibilisation, kermesse et jeux pour les jeunes, et dépistage du VIH.",
      image: cheminImage('hero-05-sida-assome-kermesse'),
      imageAlt:
        "Jeunes du village recevant leurs lots lors de la kermesse organisée pour la journée de lutte contre le VIH/SIDA",
      date: '2018',
      lieu: 'Assomé, préfecture de Zio',
    },
    {
      id: 'production-savon-femmes',
      titre: 'Production de savon par des groupements de femmes',
      categorie: 'economie',
      description:
        "Des activités génératrices de revenus lancées pour amortir les effets de la crise financière née de la pandémie, avec la production de savon au siège de l'ONG.",
      image: cheminImage('projet-production-savon'),
      imageAlt:
        "Rangées de boules de savon jaune façonnées à la main, alignées sur une table de travail",
      date: '2020',
      lieu: "Siège de l'ONG",
    },
    {
      id: 'vulgarisation-moringa-artemisia',
      titre: "Vulgarisation du Moringa et de l'Artémisia Annua",
      categorie: 'environnement',
      description:
        "Médecine naturelle : culture, pépinières et vulgarisation du Moringa et de l'Artémisia Annua auprès des communautés.",
      image: cheminImage('environnement-04-artemisia-champ'),
      imageAlt:
        "Trois hommes debout dans un champ d'Artémisia Annua, présentant un plant arrivé à maturité",
      date: '2018',
    },
    // Activité confirmée par le cahier des charges (section 2) mais sans publication détaillée
    // fournie : ni date, ni lieu, ni photo dédiée. Photo de campagne de santé par défaut.
    // TODO: demander au client une publication (date, lieu, photos) sur ce volet.
    {
      id: 'campagne-cataracte',
      titre: 'Campagnes de chirurgie de la cataracte',
      categorie: 'sante',
      description:
        "Consultations et opérations de la cataracte, menées en collaboration avec le Programme National de Santé Oculaire.",
      image: cheminImage('projets-03-inauguration-sante'),
      imageAlt: "Cérémonie d'inauguration lors d'une campagne de santé",
    },
  ];

  getAll(): Observable<Projet[]> {
    return of(this.projets);
  }

  getByCategorie(categorie: Projet['categorie']): Observable<Projet[]> {
    return of(this.projets.filter((p) => p.categorie === categorie));
  }
}
