import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocatedcasesComponent } from './unallocatedcases.component';

describe('UnallocatedcasesComponent', () => {
  let component: UnallocatedcasesComponent;
  let fixture: ComponentFixture<UnallocatedcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnallocatedcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnallocatedcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
