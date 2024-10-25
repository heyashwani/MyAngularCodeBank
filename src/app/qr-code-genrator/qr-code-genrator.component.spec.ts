import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeGenratorComponent } from './qr-code-genrator.component';

describe('QrCodeGenratorComponent', () => {
  let component: QrCodeGenratorComponent;
  let fixture: ComponentFixture<QrCodeGenratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrCodeGenratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeGenratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
