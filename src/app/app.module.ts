import { BrowserModule } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { Service1Service } from './services/Service1/service1.service';
import { Service2Service } from './services/Service2/service2.service';
import { LiveDataComponent } from './live-data/live-data.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SearchPipePipe } from './pipe/search-pipe.pipe';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DataTransferFromComponent } from './data-transfer-from/data-transfer-from.component';
import { DataTransferToComponent } from './data-transfer-to/data-transfer-to.component';
import { Datepicker2Component } from './datepicker2/datepicker2.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { TableSortingComponent } from './table-sorting/table-sorting.component';
import { DateWiseEntryConceptComponent } from './date-wise-entry-concept/date-wise-entry-concept.component';
// import { AuthGuard } from './Guards/auth.guard';
import { RouterGuardComponent } from './router-guard/router-guard.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MultiFormConceptComponent } from './multi-form-concept/multi-form-concept.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MypipePipe } from './pipe/mypipe.pipe';
import { CustumPipeComponent } from './custum-pipe/custum-pipe.component';
import { FileSendingComponent } from './file-sending/file-sending.component';
import { SaveExcelComponent } from './save-excel/save-excel.component';
import { ProjectInDifferentVersionComponent } from './project-in-different-version/project-in-different-version.component';
import { SearchableDropdownComponent } from './searchable-dropdown/searchable-dropdown.component'; 
import { NgSelectModule } from '@ng-select/ng-select';
import { QrCodeGenratorComponent } from './qr-code-genrator/qr-code-genrator.component';
import { SaveCsvComponent } from './save-csv/save-csv.component';
import { SavePdfComponent } from './save-pdf/save-pdf.component';
import {NgxPrintModule} from 'ngx-print';
import { EncodeDecodeComponent } from './encode-decode/encode-decode.component';
import { HttpLoaderComponent } from './http-loader/http-loader.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { DynamicTitleComponent } from './dynamic-title/dynamic-title.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { OnlynumberDirective } from './directives/onlynumber.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AmountDirectiveDirective } from './directives/amount-directive.directive';
import { AlphanumericDirective } from './directives/alphanumeric.directive';
import { SubjectModule } from './subject/subject.module';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { HttpConfigInterceptor } from './myinterceptors/httpconfig.interceptor';
import { RatingComponent } from './rating/rating.component';
import { RatingModule } from 'ng-starrating';
import { LocationComponent } from './location/location.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { ProductComponent } from './product/product.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { MylivechatComponent } from './mylivechat/mylivechat.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LightboxModule } from 'ngx-lightbox';
import { LightboxComponent } from './lightbox/lightbox.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ScrollResizeComponent } from './scroll-resize/scroll-resize.component';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { VoiceRecognitionComponent } from './voice-recognition/voice-recognition.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { ChipsComponent } from './chips/chips.component';
import { TagInputModule } from 'ngx-chips';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RazorpayComponent } from './razorpay/razorpay.component';
import { PaypalComponent } from './paypal/paypal.component';
import { MultiForm2Component } from './multi-form2/multi-form2.component';
import { ReusableSliderComponent } from './reusable-slider/reusable-slider.component';
import { ParentReusableSliderComponent } from './parent-reusable-slider/parent-reusable-slider.component';
import { PushNotificationFirebaseComponent } from './push-notification-firebase/push-notification-firebase.component';

import { environment } from "../environments/environment";
import { initializeApp } from "firebase/app";
import { OtpFillerComponent } from './otp-filler/otp-filler.component';
initializeApp(environment.firebase);
import { NgOtpInputModule } from  'ng-otp-input';
import { CountdownComponent } from './countdown/countdown.component';
import { SearchRxjsComponent } from './search-rxjs/search-rxjs.component';
import { CaptchaV3Component } from './captcha-v3/captcha-v3.component';
import { SocialSharingComponent } from './social-sharing/social-sharing.component';
import { PasswordMatchValidatorComponent } from './password-match-validator/password-match-validator.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MagnaticScrollComponent } from './magnatic-scroll/magnatic-scroll.component';
import { PageRefreshComponent } from './page-refresh/page-refresh.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DynamicDemo1Component } from './dynamic-demo1/dynamic-demo1.component';
import { DynamicDemo2Component } from './dynamic-demo2/dynamic-demo2.component';
import { LogCreationComponent } from './log-creation/log-creation.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ImageLoadingComponent } from './image-loading/image-loading.component';
import { InternetSpeedComponent } from './internet-speed/internet-speed.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// import { Guard2Guard } from './Guards/guard2.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LiveDataComponent,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
    RegisterComponent,
    SearchPipePipe,
    ReactiveFormComponent,
    TableSearchComponent,
    DatepickerComponent,
    TimepickerComponent,
    DataTransferFromComponent,
    DataTransferToComponent,
    Datepicker2Component,
    TableSortingComponent,
    DateWiseEntryConceptComponent,
    RouterGuardComponent,
    CaptchaComponent,
    PaginationComponent,
    MultiFormConceptComponent,
    ErrorHandlingComponent,
    PagenotfoundComponent,
    MypipePipe,
    CustumPipeComponent,
    FileSendingComponent,
    SaveExcelComponent,
    ProjectInDifferentVersionComponent,
    SearchableDropdownComponent,
    QrCodeGenratorComponent,
    SaveCsvComponent,
    SavePdfComponent,
    EncodeDecodeComponent,
    HttpLoaderComponent,
    DynamicTitleComponent,
    ChartComponent,
    OnlynumberDirective,
    CustomDirectiveComponent,
    AmountDirectiveDirective,
    AlphanumericDirective,
    InterceptorComponent,
    RatingComponent,
    LocationComponent,
    DatePipeComponent,
    ProductComponent,
    FormArrayComponent,
    MylivechatComponent,
    ImageSliderComponent,
    LightboxComponent,
    ScrollResizeComponent,
    RecaptchaComponent,
    VoiceRecognitionComponent,
    VirtualScrollComponent,
    ChipsComponent,
    RazorpayComponent,
    PaypalComponent,
    MultiForm2Component,
    ReusableSliderComponent,
    ParentReusableSliderComponent,
    PushNotificationFirebaseComponent,
    OtpFillerComponent,
    
    CountdownComponent,
    SearchRxjsComponent,
    CaptchaV3Component,
    SocialSharingComponent,
    PasswordMatchValidatorComponent,
    ImageCropperComponent,
    MagnaticScrollComponent,
    PageRefreshComponent,
    DatatableComponent,
    DynamicDemo1Component,
    DynamicDemo2Component,
    LogCreationComponent,
    ImageLoadingComponent,
    InternetSpeedComponent,
    RxjsOperatorsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TimepickerModule.forRoot(),
    NgDatepickerModule,
    Ng2OrderModule,
    NgxPaginationModule ,//for pagination
    NgSelectModule,
    NgxPrintModule,
    ChartsModule,
    NgHttpLoaderModule.forRoot(),
    SubjectModule,
    RatingModule,
    LightboxModule,
    CarouselModule.forRoot(),
    AccordionModule.forRoot(),
    NgxCaptchaModule,
    NgxCsvParserModule,
    VirtualScrollerModule,
    TagInputModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgOtpInputModule,
    ImageCropperModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports:[],
  entryComponents: [ DynamicDemo1Component,DynamicDemo2Component ],
  providers: [Service1Service,Service2Service,Title,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
