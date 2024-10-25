import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforCanLeaveComponent } from './befor-can-leave.component';

describe('BeforCanLeaveComponent', () => {
  let component: BeforCanLeaveComponent;
  let fixture: ComponentFixture<BeforCanLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforCanLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforCanLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
