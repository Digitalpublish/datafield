import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterexportComponent } from './masterexport.component';

describe('MasterexportComponent', () => {
  let component: MasterexportComponent;
  let fixture: ComponentFixture<MasterexportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterexportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterexportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
