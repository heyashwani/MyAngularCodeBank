import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMatchValidatorComponent } from './password-match-validator.component';

describe('PasswordMatchValidatorComponent', () => {
  let component: PasswordMatchValidatorComponent;
  let fixture: ComponentFixture<PasswordMatchValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordMatchValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordMatchValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
