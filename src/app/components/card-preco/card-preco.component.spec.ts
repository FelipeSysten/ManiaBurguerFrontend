import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrecoComponent } from './card-preco.component';

describe('CardPrecoComponent', () => {
  let component: CardPrecoComponent;
  let fixture: ComponentFixture<CardPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPrecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
