import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { QuiSommesNous } from './qui-sommes-nous';

describe('QuiSommesNous', () => {
  let component: QuiSommesNous;
  let fixture: ComponentFixture<QuiSommesNous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuiSommesNous],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideTranslateService({
          lang: 'fr',
          fallbackLang: 'fr',
          loader: provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(QuiSommesNous);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
