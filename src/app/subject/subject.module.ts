import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [SubjectComponent, Page1Component, Page2Component],
  imports: [
    CommonModule
  ]
})
export class SubjectModule { }
