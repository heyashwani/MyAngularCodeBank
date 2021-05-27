import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumPipeComponent } from './custum-pipe.component';

describe('CustumPipeComponent', () => {
  let component: CustumPipeComponent;
  let fixture: ComponentFixture<CustumPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustumPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
