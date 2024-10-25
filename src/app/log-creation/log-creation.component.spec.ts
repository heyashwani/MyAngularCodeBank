import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCreationComponent } from './log-creation.component';

describe('LogCreationComponent', () => {
  let component: LogCreationComponent;
  let fixture: ComponentFixture<LogCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
