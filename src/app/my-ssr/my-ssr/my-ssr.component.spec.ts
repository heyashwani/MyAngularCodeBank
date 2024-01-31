import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySSRComponent } from './my-ssr.component';

describe('MySSRComponent', () => {
  let component: MySSRComponent;
  let fixture: ComponentFixture<MySSRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySSRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
