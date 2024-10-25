import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpFillerComponent } from './otp-filler.component';

describe('OtpFillerComponent', () => {
  let component: OtpFillerComponent;
  let fixture: ComponentFixture<OtpFillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpFillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
