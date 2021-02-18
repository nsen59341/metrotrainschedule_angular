import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatavailabilityComponent } from './seatavailability.component';

describe('SeatavailabilityComponent', () => {
  let component: SeatavailabilityComponent;
  let fixture: ComponentFixture<SeatavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatavailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
