import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlobUrlComponent } from './blob-url/blob-url.component';

const routes: Routes = [
  {
    path:"",
    component:BlobUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlobUrlRoutingModule { }
