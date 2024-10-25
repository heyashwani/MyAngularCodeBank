import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeLandingMoudleInAngularComponent } from './change-landing-moudle-in-angular/change-landing-moudle-in-angular.component';

const routes: Routes = [
  {
    path:"",
    component:ChangeLandingMoudleInAngularComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeLandingMoudleInAngularRoutingModule { }
