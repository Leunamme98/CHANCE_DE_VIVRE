import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevealAuScroll } from './reveal-au-scroll';

@Component({
  imports: [RevealAuScroll],
  template: `<div cdvRevele>Contenu</div>`,
})
class HoteTest {}

describe('RevealAuScroll', () => {
  let fixture: ComponentFixture<HoteTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HoteTest] }).compileComponents();
    fixture = TestBed.createComponent(HoteTest);
  });

  it('se crée sans erreur', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('div')).toBeTruthy();
  });
});
