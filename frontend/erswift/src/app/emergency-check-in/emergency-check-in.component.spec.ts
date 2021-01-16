import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyCheckInComponent } from './emergency-check-in.component';

describe('EmergencyCheckInComponent', () => {
  let component: EmergencyCheckInComponent;
  let fixture: ComponentFixture<EmergencyCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyCheckInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
