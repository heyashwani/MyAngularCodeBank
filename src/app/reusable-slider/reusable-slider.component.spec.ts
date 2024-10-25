import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableSliderComponent } from './reusable-slider.component';

describe('ReusableSliderComponent', () => {
  let component: ReusableSliderComponent;
  let fixture: ComponentFixture<ReusableSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
