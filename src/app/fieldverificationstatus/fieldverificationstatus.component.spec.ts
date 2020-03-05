import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldverificationstatusComponent } from './fieldverificationstatus.component';

describe('FieldverificationstatusComponent', () => {
  let component: FieldverificationstatusComponent;
  let fixture: ComponentFixture<FieldverificationstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldverificationstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldverificationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
