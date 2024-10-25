import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFormConceptComponent } from './multi-form-concept.component';

describe('MultiFormConceptComponent', () => {
  let component: MultiFormConceptComponent;
  let fixture: ComponentFixture<MultiFormConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiFormConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFormConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
