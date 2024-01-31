import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySSRComponent } from './my-ssr/my-ssr.component';

const routes: Routes = [
  {
    path:"",
    component:MySSRComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySSRRoutingModule { }
