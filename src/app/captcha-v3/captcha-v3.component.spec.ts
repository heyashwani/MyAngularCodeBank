import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptchaV3Component } from './captcha-v3.component';

describe('CaptchaV3Component', () => {
  let component: CaptchaV3Component;
  let fixture: ComponentFixture<CaptchaV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptchaV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptchaV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
