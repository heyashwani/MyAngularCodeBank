import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInDifferentVersionComponent } from './project-in-different-version.component';

describe('ProjectInDifferentVersionComponent', () => {
  let component: ProjectInDifferentVersionComponent;
  let fixture: ComponentFixture<ProjectInDifferentVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInDifferentVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInDifferentVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
