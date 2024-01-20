import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLandingMoudleInAngularComponent } from './change-landing-moudle-in-angular.component';

describe('ChangeLandingMoudleInAngularComponent', () => {
  let component: ChangeLandingMoudleInAngularComponent;
  let fixture: ComponentFixture<ChangeLandingMoudleInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLandingMoudleInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLandingMoudleInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
