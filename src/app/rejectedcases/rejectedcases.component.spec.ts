import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedcasesComponent } from './rejectedcases.component';

describe('RejectedcasesComponent', () => {
  let component: RejectedcasesComponent;
  let fixture: ComponentFixture<RejectedcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
