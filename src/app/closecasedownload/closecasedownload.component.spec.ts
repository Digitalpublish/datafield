import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosecasedownloadComponent } from './closecasedownload.component';

describe('ClosecasedownloadComponent', () => {
  let component: ClosecasedownloadComponent;
  let fixture: ComponentFixture<ClosecasedownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosecasedownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosecasedownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
