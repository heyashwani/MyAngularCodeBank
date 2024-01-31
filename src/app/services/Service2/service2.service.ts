import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse,HttpParams,HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';



function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  

  get nativeWindow() : any {
    return _window();
 }
 
  name = ["ashwani","kumar"];
  
  tit:"ashwani"
 
  
  sideMenu = [
    {id:'1',title:'Home',url:'http://localhost:4200/home',url1:'home'},
    {id:'2',title:'reactive-form',url:'http://localhost:4200/reactive-form',url1:'reactive-form'},
    {id:'3',title:'Live Data',url:'http://localhost:4200/liveData',url1:'liveData'},
    {id:'4',title:'table-search',url:'http://localhost:4200/table-search',url1:'table-search'},
    {id:'5',title:'Datepicker',url:'http://localhost:4200/datepicker',url1:'datepicker'},
    {id:'6',title:'Timepicker',url:'http://localhost:4200/timepicker',url1:'timepicker'},
    {id:'7',title:'Data Transfer From',url:'http://localhost:4200/dt_from',url1:'dt_from'},
    {id:'8',title:'Data Transfer To',url:'http://localhost:4200/dt_to',url1:'dt_to'},
    {id:'9',title:'Datepicker2',url:'http://localhost:4200/datepicker2',url1:'datepicker2'},
    {id:'10',title:'table-sorting',url:'http://localhost:4200/table-sorting',url1:'table-sorting'},
    {id:'11',title:'Date-Wise Entry Concept',url:'http://localhost:4200/date-wise-entry',url1:'date-wise-entry'},
    {id:'12',title:'Can Activate Router Guard',url:'http://localhost:4200/router-guard',url1:'router-guard'},
    {id:'13',title:'Captcha',url:'http://localhost:4200/captcha',url1:'captcha'},
    {id:'14',title:'Pagination',url:'http://localhost:4200/pagination',url1:'pagination'},
    {id:'15',title:'Multi-Form-Concept',url:'http://localhost:4200/Multi-Form-Concept',url1:'Multi-Form-Concept'},
    {id:'16',title:'Error handling',url:'http://localhost:4200/error-handling',url1:'error-handling'},
    {id:'17',title:'Custum Pipe',url:'http://localhost:4200/custum-pipe',url1:'custum-pipe'},
    {id:'18',title:'File Sending',url:'http://localhost:4200/file-sending',url1:'file-sending'},
    {id:'19',title:'Save Excel',url:'http://localhost:4200/save-excel',url1:'save-excel'},
    {id:'20',title:'How To Create Project In Different Version With Different Angular CLI',url:'http://localhost:4200/project-creation',url1:'project-creation'},
    {id:'21',title:'Searchable Dropdown',url:'http://localhost:4200/searchable-dropdown',url1:'searchable-dropdown'},
    {id:'22',title:'QR Code Genrator',url:'http://localhost:4200/qr-code-genrator',url1:'qr-code-genrator'},
    {id:'23',title:'Save Csv',url:'http://localhost:4200/save-csv',url1:'save-csv'},
    {id:'24',title:'Save PDF',url:'http://localhost:4200/save-pdf',url1:'save-pdf/ashwani'},
    {id:'25',title:'Encode-Decode',url:'http://localhost:4200/encode-decode',url1:'encode-decode'},
    {id:'26',title:'http-loader',url:'http://localhost:4200/http-loader',url1:'http-loader'},
    {id:'27',title:'Dynamic Title And Favicon',url:'http://localhost:4200/dynamic-title',url1:'dynamic-title'},
    {id:'28',title:'Charts',url:'http://localhost:4200/chart',url1:'chart'},
    {id:'29',title:'Custom Directives',url:'http://localhost:4200/custom-directive',url1:'custom-directive'},
    {id:'30',title:'Subject And Behaviour Subject',url:'http://localhost:4200/subject-behaviourSubject',url1:'subject-behaviourSubject'},
    {id:'31',title:'Interceptor',url:'http://localhost:4200/interceptor',url1:'interceptor'},
    {id:'32',title:'Rating',url:'http://localhost:4200/rating',url1:'rating'},
    {id:'33',title:'User Location',url:'http://localhost:4200/location',url1:'location'},
    {id:'34',title:'Date Pipe',url:'http://localhost:4200/datePipe',url1:'datePipe'},
    {id:'35',title:'Product 1 >',url:'http://localhost:4200/product/product1',url1:'product/product1'},
    {id:'36',title:'Product 2 >',url:'http://localhost:4200/product/product2',url1:'product/product2'},
    {id:'37',title:'My Live Chat',url:'http://localhost:4200/product/mylivechat',url1:'mylivechat'},
    {id:'38',title:'Form Array(Reactive Form)',url:'http://localhost:4200/product/formArray',url1:'formArray'},
    {id:'39',title:'Slider',url:'http://localhost:4200/product/slider',url1:'slider'},
    {id:'40',title:'Lightbox',url:'http://localhost:4200/product/lightbox',url1:'lightbox'},
    {id:'41',title:'Scroll-Resize',url:'http://localhost:4200/product/scroll-resize',url1:'scroll-resize'},
    {id:'42',title:'Google-Recaptcha',url:'http://localhost:4200/product/recaptcha',url1:'recaptcha'},
    {id:'43',title:'Voice Recognition',url:'http://localhost:4200/product/voiceRecognition',url1:'voiceRecognition'},
    {id:'44',title:'Virtual Scroll',url:'http://localhost:4200/virtual-scroll',url1:'virtual-scroll'},
    {id:'45',title:'Chips',url:'http://localhost:4200/chips',url1:'chips'},
    {id:'46',title:'Razorpay',url:'http://localhost:4200/razorpay',url1:'razorpay'},
    {id:'47',title:'Paypal',url:'http://localhost:4200/paypal',url1:'paypal'},
    {id:'48',title:'Multi Form Concept 2',url:'http://localhost:4200/Multi-Form-Concept2',url1:'Multi-Form-Concept2'},
    {id:'49',title:'Parent Reusable Slider',url:'http://localhost:4200/parent-reusable-slider',url1:'parent-reusable-slider'},
    {id:'50',title:'Push-notification-firebase',url:'http://localhost:4200/push-notification-firebase',url1:'push-notification-firebase'},
    {id:'51',title:'OTP Filler',url:'http://localhost:4200/otp-filler',url1:'otp-filler'},
    {id:'53',title:'countdown',url:'http://localhost:4200/countdown',url1:'countdown'},
    {id:'54',title:'Search Box RXJS with debounce time',url:'http://localhost:4200/searchRxjs',url1:'searchRxjs'},
    {id:'55',title:'captchaV3',url:'http://localhost:4200/captchaV3',url1:'captchaV3'},
    {id:'56',title:'Social Sharing',url:'http://localhost:4200/social_sharing',url1:'social_sharing'},
    {id:'57',title:'password_match_validator',url:'http://localhost:4200/password_match_validator',url1:'password_match_validator'},
    {id:'58',title:'Image Cropper',url:'http://localhost:4200/image_cropper',url1:'image_cropper'},
    {id:'59',title:'Magnatic Scroll',url:'http://localhost:4200/magnatic_scroll',url1:'magnatic_scroll'},
    {id:'60',title:'Page Refresh',url:'http://localhost:4200/page-refresh',url1:'page-refresh'},
    {id:'61',title:'Datatable',url:'http://localhost:4200/datatable',url1:'datatable'},
    {id:'62',title:'Log Creation & Individual Loader',url:'http://localhost:4200/log-creation',url1:'log-creation'},
    {id:'63',title:'Image Loading',url:'http://localhost:4200/image-loading',url1:'image-loading'},
    {id:'64',title:'Check Internet Speed',url:'http://localhost:4200/internet-speed',url1:'internet-speed'},
    {id:'64',title:'RXJS Operators',url:'http://localhost:4200/rxjs-operators',url1:'rxjs-operators'},
    {id:'65',title:'blob-url',url:'http://localhost:4200/blob-url',url1:'blob-url'},
    {id:'66',title:'change-landing-module',url:'http://localhost:4200/change-landing-module',url1:'change-landing-module'},
    {id:'67',title:'before-can-leave',url:'http://localhost:4200/before-can-leave',url1:'before-can-leave'},
    {id:'67',title:'For SSR',url:'http://localhost:4200/for-ssr',url1:'for-ssr'},
    
    
    
    
  ]
  
  



baseUrl = "https://imashwani.000webhostapp.com/MyAngularCodeBank_Api/";

  constructor(private http:HttpClient) { 
    
  }

  

  

  getPosts():Observable<any>{
    
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  xyz()
  {
    return this.sideMenu;
  }
  
  userLogin(userDetail1:any)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.baseUrl+'api.php',userDetail1,{headers:headers});   //for live
    // return this.http.post("http://localhost/MyAngularCodeBank/api.php",userDetail1,{headers:headers}); //for local
  }
  myInsert(userDetail:any)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.baseUrl+'register.php',userDetail,{headers:headers});   //for live
    // return this.http.post('http://localhost/MyAngularCodeBank/register.php',userDetail,{headers:headers});
  }


  pmShedInsert(details:any)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.baseUrl+'pm_schedule.php',details,{headers:headers});
  }

  uploadAttachment(frmData: FormData)
  {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    // return this.http.post('http://localhost/img_upload_by_angular/upload_img.php', frmData);
    return this.http.post(this.baseUrl+'upload_img.php', frmData);
}

  insertGuardian(details){
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.baseUrl+'insert_guard.php',details,{headers:headers});  //for live
    // return this.http.post('http://localhost/MyAngularCodeBank/insert_guard.php',details);  //for local
  
  }
  
  insertChild(details){
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(this.baseUrl+'insert_child.php',details,{headers:headers});  //for live

    // return this.http.post('http://localhost/MyAngularCodeBank/insert_child.php',details)
  
  }

  get(url:any){
    let headers = new HttpHeaders({ 'responseType': 'text' });
    return this.http.get(url);
    
  }
  
  postNew(url,data){

    return this.http.post(url,data);
    
  }

  post(url,data){
    let headers = new HttpHeaders({ 
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaXNfcHJpbmNpcGxlIjowLCJ1c2VyX3R5cGUiOjEsInVzZXJfaWQiOjgsIm5nb19pZCI6MCwiaWF0IjoxNjM0MDMyMjQ2fQ.pKEiZQhFACU9AgorXy4dMbpwx3ZL78VwdS9yNDrf2PQ' 
    });

    return this.http.post(url,data,{headers:headers});
  }

  post1(url,data){
    let headers = new HttpHeaders({ 
      'Authorization': 'key=AAAAui5KpAA:APA91bGEXrLV3i5EFNXUiSYOUb0IjU341FFj8PQvZWUa8KNll0xZEVKzMhXZBELo50HVVZkQPxcbln7_VZvEqzXl7Nf4rtj7Fln8wp6GJxLvVfKkfp-W59ep3Ok1XEMogwqo0JhetLwX',
      'Content-Type':'application/json'
    });
    return this.http.post(url,data,{headers:headers});
  }
}


 