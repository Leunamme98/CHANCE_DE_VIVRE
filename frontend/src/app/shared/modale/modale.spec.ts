import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { Modale } from './modale';

describe('Modale', () => {
  let component: Modale;
  let fixture: ComponentFixture<Modale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modale],
      providers: [
        provideHttpClient(),
        provideTranslateService({
          lang: 'fr',
          fallbackLang: 'fr',
          loader: provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Modale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ne rend rien tant que ouverte est false', () => {
    expect(fixture.nativeElement.querySelector('.cdv-modale')).toBeNull();
  });

  it('affiche la boîte quand ouverte devient true', async () => {
    fixture.componentRef.setInput('ouverte', true);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('.cdv-modale')).not.toBeNull();
  });

  it('émet fermer au clic sur le fond', async () => {
    fixture.componentRef.setInput('ouverte', true);
    fixture.detectChanges();
    await fixture.whenStable();

    let ferme = false;
    component.fermer.subscribe(() => (ferme = true));
    fixture.nativeElement.querySelector('.cdv-modale__fond').click();
    expect(ferme).toBe(true);
  });
});
