import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoecaseallocationlistComponent } from './foecaseallocationlist.component';

describe('FoecaseallocationlistComponent', () => {
  let component: FoecaseallocationlistComponent;
  let fixture: ComponentFixture<FoecaseallocationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoecaseallocationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoecaseallocationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
