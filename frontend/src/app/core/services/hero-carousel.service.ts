import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroSlide } from '../models/hero-slide.model';

@Injectable({ providedIn: 'root' })
export class HeroCarouselService {
  private readonly slides: HeroSlide[] = [
    { image: 'hero-01-foule-ecole', legende: 'HERO.SLIDE_1' },
    { image: 'hero-02-enfants-tables-bancs', legende: 'HERO.SLIDE_2' },
    { image: 'hero-03-danse-communaute', legende: 'HERO.SLIDE_3' },
    { image: 'hero-04-lavage-mains', legende: 'HERO.SLIDE_4' },
  ];

  getAll(): Observable<HeroSlide[]> {
    return of(this.slides);
  }
}
