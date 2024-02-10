import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveDataComponent } from './live-data/live-data.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { DataTransferFromComponent } from './data-transfer-from/data-transfer-from.component';
import { DataTransferToComponent } from './data-transfer-to/data-transfer-to.component';
import { Datepicker2Component } from './datepicker2/datepicker2.component';
import { TableSortingComponent } from './table-sorting/table-sorting.component';
import { DateWiseEntryConceptComponent } from './date-wise-entry-concept/date-wise-entry-concept.component';
import { AuthGuard } from './Guards/auth.guard';
import { RouterGuardComponent } from './router-guard/router-guard.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MultiFormConceptComponent } from './multi-form-concept/multi-form-concept.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustumPipeComponent } from './custum-pipe/custum-pipe.component';
import { FileSendingComponent } from './file-sending/file-sending.component'; 
import { SaveExcelComponent } from './save-excel/save-excel.component'; 
import { ProjectInDifferentVersionComponent } from './project-in-different-version/project-in-different-version.component'; 
import { SearchableDropdownComponent } from './searchable-dropdown/searchable-dropdown.component';
import { QrCodeGenratorComponent } from './qr-code-genrator/qr-code-genrator.component';
import { SaveCsvComponent } from './save-csv/save-csv.component';
import { SavePdfComponent } from './save-pdf/save-pdf.component';
import { EncodeDecodeComponent } from './encode-decode/encode-decode.component';
import { HttpLoaderComponent } from './http-loader/http-loader.component';
import { DynamicTitleComponent } from './dynamic-title/dynamic-title.component';
import { ChartComponent } from './chart/chart.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { SubjectComponent } from './subject/subject.component';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { RatingComponent } from './rating/rating.component';
import { LocationComponent } from './location/location.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { ProductComponent } from './product/product.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { MylivechatComponent } from './mylivechat/mylivechat.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { ScrollResizeComponent } from './scroll-resize/scroll-resize.component';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';
import { VoiceRecognitionComponent } from './voice-recognition/voice-recognition.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ChipsComponent } from './chips/chips.component';
import { RazorpayComponent } from './razorpay/razorpay.component';
import { PaypalComponent } from './paypal/paypal.component';
import { MultiForm2Component } from './multi-form2/multi-form2.component';
import { ParentReusableSliderComponent } from './parent-reusable-slider/parent-reusable-slider.component';
import { PushNotificationFirebaseComponent } from './push-notification-firebase/push-notification-firebase.component';
import { OtpFillerComponent } from './otp-filler/otp-filler.component';
import { CountdownComponent } from './countdown/countdown.component';
import { SearchRxjsComponent } from './search-rxjs/search-rxjs.component';
import { CaptchaV3Component } from './captcha-v3/captcha-v3.component';
import { SocialSharingComponent } from './social-sharing/social-sharing.component';
import { PasswordMatchValidatorComponent } from './password-match-validator/password-match-validator.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { MagnaticScrollComponent } from './magnatic-scroll/magnatic-scroll.component';
import { PageRefreshComponent } from './page-refresh/page-refresh.component';
import { DatatableComponent } from './datatable/datatable.component';
import { UnSavedChagesGuard } from './Guards/un-saved-chages.guard';
import { LogCreationComponent } from './log-creation/log-creation.component';
import { MyLangTranslationModule } from './my-lang-translation/my-lang-translation.module';
import { ImageLoadingComponent } from './image-loading/image-loading.component';
import { InternetSpeedComponent } from './internet-speed/internet-speed.component';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { CanWeLoadGuard } from './Guards/can-we-load.guard';



const routes: Routes = [
	
	{ 
		path: '', 
		redirectTo:'login',
		pathMatch:"full"
	},
	{ 
		path: 'liveData', 
		component: LiveDataComponent 
	},
	{ 
		path: 'login', 
		component: LoginComponent 
	},
	{
		path:"lang",
		loadChildren:'./my-lang-translation/my-lang-translation.module#MyLangTranslationModule',
	},
	{ 
		path: 'sidebar', 
		component: SidebarComponent 
	},
	{ 
		path: 'home', 
		component: HomeComponent 
	},
	{ 
		path: 'register', 
		component: RegisterComponent 
	},
	{ 
		path: 'reactive-form', 
		component: ReactiveFormComponent,
		canDeactivate:[UnSavedChagesGuard] 
	},
	{ 
		path: 'table-search', 
		component: TableSearchComponent 
	},
	{ 
		path: 'datepicker', 
		component: DatepickerComponent 
	},
	{ 
		path: 'timepicker', 
		component: TimepickerComponent 
	},
	{ 
		path: 'dt_from', 
		component: DataTransferFromComponent, //if you want to load child component in default router outlet then remove 'component'line and create a blank route like blow(commented) and remove <router-outlet></router-outlet> from data-transfer-form component.
		children:[
			// {
			// 	path: '',
			// 	component: DataTransferFromComponent   // like this
			// },
			{ 
				path: 'dt_to', 
				component: DataTransferToComponent 
			},
		] 
	},
	
	{ 
		path: 'datepicker2', 
		component: Datepicker2Component 
	},
	{ 
		path: 'table-sorting', 
		component: TableSortingComponent 
	},
	{ 
		path: 'date-wise-entry', 
		component: DateWiseEntryConceptComponent 
	},
	{
		path: 'router-guard',
		component: RouterGuardComponent,
		canActivate : [AuthGuard]
	},
	{
		path: 'captcha',
		component: CaptchaComponent,
		
	},
	{
		path: 'pagination',
		component: PaginationComponent
	},
	{
		path: 'Multi-Form-Concept',
		component: MultiFormConceptComponent
	},
	{
		path: 'Multi-Form-Concept2',
		component: MultiForm2Component
	},
	{
		path: 'error-handling',
		component: ErrorHandlingComponent
	},
	{
		path: 'custum-pipe',
		component: CustumPipeComponent
	},
	{
		path: 'file-sending',
		component: FileSendingComponent
	},
	{
		path: 'save-excel',
		component: SaveExcelComponent
	},
	{
		path: 'project-creation',
		component: ProjectInDifferentVersionComponent
	},
	{
		path: 'searchable-dropdown',
		component: SearchableDropdownComponent
	},
	{
		path: 'qr-code-genrator',
		component: QrCodeGenratorComponent
	},
	{
		path: 'save-csv',
		component: SaveCsvComponent
	},
	{
		path: 'save-pdf/:abc', //path variable 
		component: SavePdfComponent
	},
	{
		path: 'encode-decode', 
		component: EncodeDecodeComponent
	},
	{
		path: 'http-loader', 
		component: HttpLoaderComponent
	},
	{
		path: 'dynamic-title', 
		component: DynamicTitleComponent
	},
	{
		path: 'chart', 
		component: ChartComponent
	},
	{
		path: 'custom-directive', 
		component: CustomDirectiveComponent
	},
	{
		path: 'subject-behaviourSubject', 
		component: SubjectComponent
	},
	{
		path: 'interceptor', 
		component: InterceptorComponent
	},
	{
		path: 'rating', 
		component: RatingComponent
	},
	{
		path: 'location', 
		component: LocationComponent
	},
	{
		path: 'datePipe', 
		component: DatePipeComponent
	},
	{
		path: 'product/:id', 
		component: ProductComponent
	},
	{
		path: 'mylivechat', 
		component: MylivechatComponent
	},
	{
		path: 'formArray', 
		component: FormArrayComponent
	},
	{
		path: 'slider', 
		component: ImageSliderComponent
	},
	{
		path: 'lightbox', 
		component: LightboxComponent
	},
	{
		path: 'scroll-resize', 
		component: ScrollResizeComponent
	},
	{
		path: 'recaptcha', 
		component: RecaptchaComponent
	},
	{
		path: 'voiceRecognition', 
		component: VoiceRecognitionComponent
	},
	{
		path: 'virtual-scroll', 
		component: VirtualScrollComponent
	},
	{
		path: 'chips', 
		component: ChipsComponent
	},
	{
		path: 'razorpay', 
		component:RazorpayComponent
	},
	{
		path: 'paypal', 
		component:PaypalComponent
	},
	{
		path: 'parent-reusable-slider', 
		component:ParentReusableSliderComponent
	},
	{
		path: 'push-notification-firebase', 
		component:PushNotificationFirebaseComponent
	},
	{
		path: 'otp-filler', 
		component:OtpFillerComponent
	},
	{
		path: 'countdown', 
		component:CountdownComponent
	},
	{
		path: 'searchRxjs', 
		component:SearchRxjsComponent
	},
	{
		path: 'captchaV3', 
		component:CaptchaV3Component
	},
	{
		path: 'social_sharing', 
		component:SocialSharingComponent
	},
	{
		path: 'password_match_validator', 
		component:PasswordMatchValidatorComponent
	},
	{
		path: 'image_cropper', 
		component:ImageCropperComponent
	},
	{
		path: 'magnatic_scroll', 
		component:MagnaticScrollComponent
	},
	{
		path: 'page-refresh', 
		component:PageRefreshComponent
	},
	{
		path: 'datatable', 
		component:DatatableComponent
	},
	{
		path: 'log-creation', 
		component:LogCreationComponent
	},
	{
		path: 'image-loading', 
		component:ImageLoadingComponent
	},
	{
		path: 'internet-speed', 
		component:InternetSpeedComponent
	},
	{
		path: 'rxjs-operators', 
		component:RxjsOperatorsComponent,
		data: {some_data: 'some value'}
	},
	{
		path: 'blob-url', 
		loadChildren:'./blob-url/blob-url.module#BlobUrlModule'
	},
	{
		path: 'change-landing-module', 
		loadChildren:'./change-landing-moudle-in-angular/change-landing-moudle-in-angular.module#ChangeLandingMoudleInAngularModule'
	},
	{
		path: 'before-can-leave', 
		loadChildren:'./befor-can-leave/befor-can-leave.module#BeforCanLeaveModule',
		
	},
	{
		path: 'for-ssr', 
		loadChildren:'./my-ssr/my-ssr.module#MySSRModule',
		canActivate : [AuthGuard]
	},

	{
		path: '**',
		component: PagenotfoundComponent  // it is called wildcard routing. always make this route in the end of all routes.
	},
	
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
