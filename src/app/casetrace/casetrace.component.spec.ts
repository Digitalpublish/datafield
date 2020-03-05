import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasetraceComponent } from './casetrace.component';

describe('CasetraceComponent', () => {
  let component: CasetraceComponent;
  let fixture: ComponentFixture<CasetraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasetraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasetraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
