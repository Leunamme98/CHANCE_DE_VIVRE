import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeroCarousel } from './hero-carousel';

describe('HeroCarousel', () => {
  let component: HeroCarousel;
  let fixture: ComponentFixture<HeroCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCarousel],
      providers: [
        provideHttpClient(),
        provideTranslateService({
          lang: 'fr',
          fallbackLang: 'fr',
          loader: provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads the 4 slides from the service', () => {
    expect(component.slides().length).toBe(4);
  });

  it('cycles forward and wraps around', () => {
    component.allerA(3);
    expect(component.indexActif()).toBe(3);
    component.suivant();
    expect(component.indexActif()).toBe(0);
  });
});
