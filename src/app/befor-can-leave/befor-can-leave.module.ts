import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforCanLeaveRoutingModule } from './befor-can-leave-routing.module';
import { BeforCanLeaveComponent } from './befor-can-leave/befor-can-leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BeforCanLeaveComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // FormsModule,
    BeforCanLeaveRoutingModule,
    
  ]
})
export class BeforCanLeaveModule { }
