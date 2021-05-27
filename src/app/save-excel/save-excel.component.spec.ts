import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveExcelComponent } from './save-excel.component';

describe('SaveExcelComponent', () => {
  let component: SaveExcelComponent;
  let fixture: ComponentFixture<SaveExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
