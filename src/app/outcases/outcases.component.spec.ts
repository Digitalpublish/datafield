import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcasesComponent } from './outcases.component';

describe('OutcasesComponent', () => {
  let component: OutcasesComponent;
  let fixture: ComponentFixture<OutcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
