import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetSpeedComponent } from './internet-speed.component';

describe('InternetSpeedComponent', () => {
  let component: InternetSpeedComponent;
  let fixture: ComponentFixture<InternetSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
