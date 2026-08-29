import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { CarouselPhotos } from './carousel-photos';
import { HeroSlide } from '../../core/models/hero-slide.model';

const SLIDES: HeroSlide[] = [
  { image: 'slide-1', legende: 'HERO.SLIDE_1' },
  { image: 'slide-2', legende: 'HERO.SLIDE_2' },
  { image: 'slide-3', legende: 'HERO.SLIDE_3' },
  { image: 'slide-4', legende: 'HERO.SLIDE_4' },
];

describe('CarouselPhotos', () => {
  let component: CarouselPhotos;
  let fixture: ComponentFixture<CarouselPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPhotos],
      providers: [
        provideHttpClient(),
        provideTranslateService({
          lang: 'fr',
          fallbackLang: 'fr',
          loader: provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselPhotos);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('slides', SLIDES);
    fixture.componentRef.setInput('libelleRegion', 'HERO.REGION');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reçoit ses diapositives via l\'input slides', () => {
    expect(component.slides().length).toBe(4);
  });

  it('cycles forward and wraps around', () => {
    component.allerA(3);
    expect(component.indexActif()).toBe(3);
    component.suivant();
    expect(component.indexActif()).toBe(0);
  });
});
