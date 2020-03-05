import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncasesComponent } from './incases.component';

describe('IncasesComponent', () => {
  let component: IncasesComponent;
  let fixture: ComponentFixture<IncasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
