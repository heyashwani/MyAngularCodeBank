import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySSRRoutingModule } from './my-ssr-routing.module';
import { MySSRComponent } from './my-ssr/my-ssr.component';

@NgModule({
  declarations: [MySSRComponent],
  imports: [
    CommonModule,
    MySSRRoutingModule
  ]
})
export class MySSRModule { }
