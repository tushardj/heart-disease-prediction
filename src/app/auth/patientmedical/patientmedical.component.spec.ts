import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmedicalComponent } from './patientmedical.component';

describe('PatientmedicalComponent', () => {
  let component: PatientmedicalComponent;
  let fixture: ComponentFixture<PatientmedicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientmedicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientmedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
