import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationFirebaseComponent } from './push-notification-firebase.component';

describe('PushNotificationFirebaseComponent', () => {
  let component: PushNotificationFirebaseComponent;
  let fixture: ComponentFixture<PushNotificationFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushNotificationFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushNotificationFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
