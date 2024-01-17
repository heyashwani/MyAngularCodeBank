import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlobUrlRoutingModule } from './blob-url-routing.module';
import { BlobUrlComponent } from './blob-url/blob-url.component';

@NgModule({
  declarations: [BlobUrlComponent],
  imports: [
    CommonModule,
    BlobUrlRoutingModule
  ]
})
export class BlobUrlModule { }
