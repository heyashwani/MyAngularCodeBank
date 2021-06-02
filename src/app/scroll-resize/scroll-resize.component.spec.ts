import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollResizeComponent } from './scroll-resize.component';

describe('ScrollResizeComponent', () => {
  let component: ScrollResizeComponent;
  let fixture: ComponentFixture<ScrollResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
