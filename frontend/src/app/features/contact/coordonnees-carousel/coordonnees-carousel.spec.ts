import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { CoordonneesCarousel } from './coordonnees-carousel';
import { CoordonneeAffichee } from '../../../core/models/coordonnee-affichee.model';

const ITEMS: CoordonneeAffichee[] = [
  { id: 'adresse', icone: 'adresse', titreCle: 'FOOTER.ADRESSE_LIBELLE', valeur: 'Tsévié', lien: null, externe: false },
  { id: 'telephone', icone: 'telephone', titreCle: 'FOOTER.TELEPHONE_LIBELLE', valeur: '+228', lien: 'tel:+228', externe: false },
];

describe('CoordonneesCarousel', () => {
  let component: CoordonneesCarousel;
  let fixture: ComponentFixture<CoordonneesCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordonneesCarousel],
      providers: [
        provideHttpClient(),
        provideTranslateService({
          lang: 'fr',
          fallbackLang: 'fr',
          loader: provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CoordonneesCarousel);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('items', ITEMS);
    fixture.componentRef.setInput('libelleRegion', 'CONTACT.COORDONNEES_TITRE');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cycles forward and wraps around', () => {
    component.allerA(1);
    expect(component.indexActif()).toBe(1);
    component.suivant();
    expect(component.indexActif()).toBe(0);
  });
});
