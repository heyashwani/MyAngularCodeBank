import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobUrlComponent } from './blob-url.component';

describe('BlobUrlComponent', () => {
  let component: BlobUrlComponent;
  let fixture: ComponentFixture<BlobUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlobUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlobUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
