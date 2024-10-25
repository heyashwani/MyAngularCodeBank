import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylivechatComponent } from './mylivechat.component';

describe('MylivechatComponent', () => {
  let component: MylivechatComponent;
  let fixture: ComponentFixture<MylivechatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylivechatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylivechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
