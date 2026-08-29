import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconeContact } from './icone-contact';

describe('IconeContact', () => {
  let component: IconeContact;
  let fixture: ComponentFixture<IconeContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconeContact],
    }).compileComponents();

    fixture = TestBed.createComponent(IconeContact);
    fixture.componentRef.setInput('type', 'telephone');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
