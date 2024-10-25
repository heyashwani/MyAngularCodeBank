import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTransferFromComponent } from './data-transfer-from.component';

describe('DataTransferFromComponent', () => {
  let component: DataTransferFromComponent;
  let fixture: ComponentFixture<DataTransferFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTransferFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTransferFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
