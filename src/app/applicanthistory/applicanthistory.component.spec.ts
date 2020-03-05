import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicanthistoryComponent } from './applicanthistory.component';

describe('ApplicanthistoryComponent', () => {
  let component: ApplicanthistoryComponent;
  let fixture: ComponentFixture<ApplicanthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicanthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicanthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
