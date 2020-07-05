import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientregiComponent } from './patientregi.component';

describe('PatientregiComponent', () => {
  let component: PatientregiComponent;
  let fixture: ComponentFixture<PatientregiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientregiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientregiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
