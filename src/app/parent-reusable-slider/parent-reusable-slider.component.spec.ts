import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentReusableSliderComponent } from './parent-reusable-slider.component';

describe('ParentReusableSliderComponent', () => {
  let component: ParentReusableSliderComponent;
  let fixture: ComponentFixture<ParentReusableSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentReusableSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentReusableSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
