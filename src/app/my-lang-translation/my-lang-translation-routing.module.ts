import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLangComponent } from './my-lang/my-lang.component';

const routes: Routes = [
  {
    path:"",
    component:MyLangComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLangTranslationRoutingModule { }
