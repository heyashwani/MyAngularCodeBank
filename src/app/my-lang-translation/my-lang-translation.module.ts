import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLangTranslationRoutingModule } from './my-lang-translation-routing.module';
import { MyLangComponent } from './my-lang/my-lang.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [MyLangComponent],
  imports: [
    CommonModule,
    MyLangTranslationRoutingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      isolate: true
  })
  ]
})
export class MyLangTranslationModule { }
