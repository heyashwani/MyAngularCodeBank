import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRxjsComponent } from './search-rxjs.component';

describe('SearchRxjsComponent', () => {
  let component: SearchRxjsComponent;
  let fixture: ComponentFixture<SearchRxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
