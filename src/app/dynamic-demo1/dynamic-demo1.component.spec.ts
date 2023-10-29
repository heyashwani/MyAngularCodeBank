import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDemo1Component } from './dynamic-demo1.component';

describe('DynamicDemo1Component', () => {
  let component: DynamicDemo1Component;
  let fixture: ComponentFixture<DynamicDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
