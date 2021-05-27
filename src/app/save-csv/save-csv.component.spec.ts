import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCsvComponent } from './save-csv.component';

describe('SaveCsvComponent', () => {
  let component: SaveCsvComponent;
  let fixture: ComponentFixture<SaveCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
