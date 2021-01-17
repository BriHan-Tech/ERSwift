import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonShellComponent } from './back-button-shell.component';

describe('BackButtonShellComponent', () => {
  let component: BackButtonShellComponent;
  let fixture: ComponentFixture<BackButtonShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
