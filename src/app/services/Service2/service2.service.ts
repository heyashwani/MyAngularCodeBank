import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse,HttpParams,HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  name = ["ashwani","kumar"];
  
  tit:"ashwani"
 
  
  sdMenu = {
    menu1:{id:'1',title:'Home',url:'http://localhost:4200/home',url1:'home'},
    menu2:{id:'2',title:'reactive-form',url:'http://localhost:4200/reactive-form',url1:'reactive-form'},
    menu3:{id:'3',title:'Live Data',url:'http://localhost:4200/liveData',url1:'liveData'},
    menu4:{id:'4',title:'table-search',url:'http://localhost:4200/table-search',url1:'table-search'},
    menu5:{id:'5',title:'Datepicker',url:'http://localhost:4200/datepicker',url1:'datepicker'},
    menu6:{id:'6',title:'Timepicker',url:'http://localhost:4200/timepicker',url1:'timepicker'},
    menu7:{id:'7',title:'Data Transfer From',url:'http://localhost:4200/dt_from',url1:'dt_from'},
    menu8:{id:'8',title:'Data Transfer To',url:'http://localhost:4200/dt_to',url1:'dt_to'},
    menu9:{id:'9',title:'Datepicker2',url:'http://localhost:4200/datepicker2',url1:'datepicker2'},
    menu10:{id:'10',title:'table-sorting',url:'http://localhost:4200/table-sorting',url1:'table-sorting'},
    menu11:{id:'11',title:'Date-Wise Entry Concept',url:'http://localhost:4200/date-wise-entry',url1:'date-wise-entry'},
    menu12:{id:'12',title:'Can Activate Router Guard',url:'http://localhost:4200/router-guard',url1:'router-guard'},
    menu13:{id:'13',title:'Captcha',url:'http://localhost:4200/captcha',url1:'captcha'},
    menu14:{id:'14',title:'Pagination',url:'http://localhost:4200/pagination',url1:'pagination'},
    menu15:{id:'15',title:'Multi-Form-Concept',url:'http://localhost:4200/Multi-Form-Concept',url1:'Multi-Form-Concept'},
    menu16:{id:'16',title:'Error handling',url:'http://localhost:4200/error-handling',url1:'error-handling'},
    menu17:{id:'17',title:'Custum Pipe',url:'http://localhost:4200/custum-pipe',url1:'custum-pipe'},
    menu18:{id:'18',title:'File Sending',url:'http://localhost:4200/file-sending',url1:'file-sending'},
    menu19:{id:'19',title:'Save Excel',url:'http://localhost:4200/save-excel',url1:'save-excel'},
    menu20:{id:'20',title:'How To Create Project In Different Version With Different Angular CLI',url:'http://localhost:4200/project-creation',url1:'project-creation'},
    menu21:{id:'21',title:'Searchable Dropdown',url:'http://localhost:4200/searchable-dropdown',url1:'searchable-dropdown'},
    menu22:{id:'22',title:'QR Code Genrator',url:'http://localhost:4200/qr-code-genrator',url1:'qr-code-genrator'},
    menu23:{id:'23',title:'Save Csv',url:'http://localhost:4200/save-csv',url1:'save-csv'},
    menu24:{id:'24',title:'Save PDF',url:'http://localhost:4200/save-pdf',url1:'save-pdf/ashwani'},
    menu25:{id:'25',title:'Encode-Decode',url:'http://localhost:4200/encode-decode',url1:'encode-decode'},
    menu26:{id:'26',title:'http-loader',url:'http://localhost:4200/http-loader',url1:'http-loader'},
    menu27:{id:'27',title:'Dynamic Title And Favicon',url:'http://localhost:4200/dynamic-title',url1:'dynamic-title'},
    menu28:{id:'28',title:'Charts',url:'http://localhost:4200/chart',url1:'chart'},
    menu29:{id:'29',title:'Custom Directives',url:'http://localhost:4200/custom-directive',url1:'custom-directive'},
    menu30:{id:'30',title:'Subject And Behaviour Subject',url:'http://localhost:4200/subject-behaviourSubject',url1:'subject-behaviourSubject'},
    menu31:{id:'31',title:'Interceptor',url:'http://localhost:4200/interceptor',url1:'interceptor'},
    menu32:{id:'32',title:'Rating',url:'http://localhost:4200/rating',url1:'rating'},
    menu33:{id:'33',title:'User Location',url:'http://localhost:4200/location',url1:'location'},
    menu34:{id:'34',title:'Date Pipe',url:'http://localhost:4200/datePipe',url1:'datePipe'},
    menu35:{id:'35',title:'Product 1 >',url:'http://localhost:4200/product/product1',url1:'product/product1'},
    menu36:{id:'36',title:'Product 2 >',url:'http://localhost:4200/product/product2',url1:'product/product2'},
    menu37:{id:'37',title:'My Live Chat',url:'http://localhost:4200/product/mylivechat',url1:'mylivechat'},
    menu38:{id:'38',title:'Form Array(Reactive Form)',url:'http://localhost:4200/product/formArray',url1:'formArray'},
    menu39:{id:'39',title:'Slider',url:'http://localhost:4200/product/slider',url1:'slider'},
    menu40:{id:'40',title:'Lightbox',url:'http://localhost:4200/product/lightbox',url1:'lightbox'},
    menu41:{id:'41',title:'Scroll-Resize',url:'http://localhost:4200/product/scroll-resize',url1:'scroll-resize'},
    menu42:{id:'42',title:'Google-Recaptcha',url:'http://localhost:4200/product/recaptcha',url1:'recaptcha'},
    menu43:{id:'43',title:'Voice Recognition',url:'http://localhost:4200/product/voiceRecognition',url1:'voiceRecognition'},
    menu44:{id:'44',title:'Virtual Scroll',url:'http://localhost:4200/virtual-scroll',url1:'virtual-scroll'},
    menu45:{id:'45',title:'Chips',url:'http://localhost:4200/chips',url1:'chips'},
    
    
    
  }
  
  

sideMenu = [
  this.sdMenu.menu1,
  this.sdMenu.menu2,
  this.sdMenu.menu3,
  this.sdMenu.menu4,
  this.sdMenu.menu5,
  this.sdMenu.menu6,
  this.sdMenu.menu7,
  this.sdMenu.menu8,
  this.sdMenu.menu9,
  this.sdMenu.menu10,
  this.sdMenu.menu11,
  this.sdMenu.menu12,
  this.sdMenu.menu13,
  this.sdMenu.menu14,
  this.sdMenu.menu15,
  this.sdMenu.menu16,
  this.sdMenu.menu17,
  this.sdMenu.menu18,
  this.sdMenu.menu19,
  this.sdMenu.menu20,
  this.sdMenu.menu21,
  this.sdMenu.menu22,
  this.sdMenu.menu23,
  this.sdMenu.menu24,
  this.sdMenu.menu25,
  this.sdMenu.menu26,
  this.sdMenu.menu27,
  this.sdMenu.menu28,
  this.sdMenu.menu29,
  this.sdMenu.menu30,
  this.sdMenu.menu31,
  this.sdMenu.menu32,
  this.sdMenu.menu33,
  this.sdMenu.menu34,
  this.sdMenu.menu35,
  this.sdMenu.menu36,
  this.sdMenu.menu37,
  this.sdMenu.menu38,
  this.sdMenu.menu39,
  this.sdMenu.menu40,
  this.sdMenu.menu41,
  this.sdMenu.menu42,
  this.sdMenu.menu43,
  this.sdMenu.menu44,
  this.sdMenu.menu45,
];

baseUrl = "https://imashwani.000webhostapp.com/MyAngularCodeBank_Api/";

  constructor(private http:HttpClient) { }
  getPosts():Observable<any>{
    
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .catch((error:HttpErrorResponse)=>{
        return Observable.throwError(error.message);
    });
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
    return this.http.get(url,{responseType: 'text'});
    
  }

  post(url,data){
    let headers = new HttpHeaders({ 'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaXNfcHJpbmNpcGxlIjowLCJ1c2VyX3R5cGUiOjEsInVzZXJfaWQiOjgsIm5nb19pZCI6MCwiaWF0IjoxNjM0MDMyMjQ2fQ.pKEiZQhFACU9AgorXy4dMbpwx3ZL78VwdS9yNDrf2PQ' });

    return this.http.post(url,data,{headers:headers});
  }
  
}


 