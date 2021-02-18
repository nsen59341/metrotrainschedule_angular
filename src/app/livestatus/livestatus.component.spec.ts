import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivestatusComponent } from './livestatus.component';

describe('LivestatusComponent', () => {
  let component: LivestatusComponent;
  let fixture: ComponentFixture<LivestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
