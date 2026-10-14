import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketCalculator } from './ticket-calculator';

describe('TicketCalculator', () => {
  let component: TicketCalculator;
  let fixture: ComponentFixture<TicketCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
