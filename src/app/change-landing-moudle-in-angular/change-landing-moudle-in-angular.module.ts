import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeLandingMoudleInAngularComponent } from './change-landing-moudle-in-angular/change-landing-moudle-in-angular.component';
import { ChangeLandingMoudleInAngularRoutingModule } from './change-landing-moudle-in-angular-routing.module';

@NgModule({
  declarations: [ChangeLandingMoudleInAngularComponent],
  imports: [
    CommonModule,
    ChangeLandingMoudleInAngularRoutingModule
  ]
})
export class ChangeLandingMoudleInAngularModule { }
