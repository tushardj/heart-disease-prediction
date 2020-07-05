import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineListComponent } from './combine-list.component';

describe('CombineListComponent', () => {
  let component: CombineListComponent;
  let fixture: ComponentFixture<CombineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
