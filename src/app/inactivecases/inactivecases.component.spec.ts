import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivecasesComponent } from './inactivecases.component';

describe('InactivecasesComponent', () => {
  let component: InactivecasesComponent;
  let fixture: ComponentFixture<InactivecasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivecasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
