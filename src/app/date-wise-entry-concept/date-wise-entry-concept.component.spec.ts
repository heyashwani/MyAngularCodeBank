import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseEntryConceptComponent } from './date-wise-entry-concept.component';

describe('DateWiseEntryConceptComponent', () => {
  let component: DateWiseEntryConceptComponent;
  let fixture: ComponentFixture<DateWiseEntryConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateWiseEntryConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWiseEntryConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
