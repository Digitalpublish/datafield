import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocverificationlistComponent } from './docverificationlist.component';

describe('DocverificationlistComponent', () => {
  let component: DocverificationlistComponent;
  let fixture: ComponentFixture<DocverificationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocverificationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocverificationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
