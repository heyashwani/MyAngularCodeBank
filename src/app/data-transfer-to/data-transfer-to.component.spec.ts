import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransferToComponent } from './data-transfer-to.component';

describe('DataTransferToComponent', () => {
  let component: DataTransferToComponent;
  let fixture: ComponentFixture<DataTransferToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTransferToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransferToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
