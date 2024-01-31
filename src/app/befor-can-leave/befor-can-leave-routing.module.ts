import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeforCanLeaveComponent } from './befor-can-leave/befor-can-leave.component';
import { UnSavedChagesGuard } from '../Guards/un-saved-chages.guard';

const routes: Routes = [
  {
    path:"",
    component:BeforCanLeaveComponent,
    canDeactivate:[UnSavedChagesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeforCanLeaveRoutingModule { }
