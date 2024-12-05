import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPadraoComponent } from './card-padrao.component';

describe('CardPadraoComponent', () => {
  let component: CardPadraoComponent;
  let fixture: ComponentFixture<CardPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPadraoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
