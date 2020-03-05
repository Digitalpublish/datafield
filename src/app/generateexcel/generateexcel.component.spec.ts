import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateexcelComponent } from './generateexcel.component';

describe('GenerateexcelComponent', () => {
  let component: GenerateexcelComponent;
  let fixture: ComponentFixture<GenerateexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
