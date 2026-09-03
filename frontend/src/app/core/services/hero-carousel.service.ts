import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroSlide } from '../models/hero-slide.model';

@Injectable({ providedIn: 'root' })
export class HeroCarouselService {
  // Une diapo par pilier d'action (santé, éducation, économie, environnement) plus une image
  // de communauté, toutes issues de publications officielles du client. Seules des photos
  // brutes sont retenues : les montages « avant / après » fournis portent du texte incrusté,
  // illisible une fois recadré en plein cadre et zoomé.
  private readonly slides: HeroSlide[] = [
    { image: 'hero-eau-potable-yokele', legende: 'HERO.SLIDE_1', position: 'center 45%' },
    { image: 'hero-classe-tables-bancs-yokele', legende: 'HERO.SLIDE_2', position: 'center 45%' },
    { image: 'hero-01-sida-assome-rassemblement', legende: 'HERO.SLIDE_3', position: 'center 45%' },
    { image: 'hero-savon-femmes-agr', legende: 'HERO.SLIDE_4', position: 'center 40%' },
    { image: 'environnement-03-artemisia-degustation', legende: 'HERO.SLIDE_5', position: 'center 40%' },
    { image: 'hero-03-danse-communaute', legende: 'HERO.SLIDE_6', position: 'center 30%' },
  ];

  getAll(): Observable<HeroSlide[]> {
    return of(this.slides);
  }
}
