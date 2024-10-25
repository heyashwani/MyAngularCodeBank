import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDemo2Component } from './dynamic-demo2.component';

describe('DynamicDemo2Component', () => {
  let component: DynamicDemo2Component;
  let fixture: ComponentFixture<DynamicDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
