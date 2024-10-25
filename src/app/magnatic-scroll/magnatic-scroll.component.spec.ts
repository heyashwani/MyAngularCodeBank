import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnaticScrollComponent } from './magnatic-scroll.component';

describe('MagnaticScrollComponent', () => {
  let component: MagnaticScrollComponent;
  let fixture: ComponentFixture<MagnaticScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagnaticScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnaticScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
