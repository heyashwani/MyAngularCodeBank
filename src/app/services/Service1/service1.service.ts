
import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  HeaderDisplay = new EventEmitter<boolean>();
  LoaderDisplay = new EventEmitter<boolean>();
  myVar:string = "false";
  routerAuth = new EventEmitter<boolean>();
  // userName = new Subject<any>(); // in Subject we can't set initial value
  userName = new BehaviorSubject<any>('MyDefaultValue'); // in Subject we can not set initial value
  myUserName = new BehaviorSubject<any>('Default User'); // in Subject we can set initial value
  
  
  constructor(public translate: TranslateService) { 
    this.myVar = sessionStorage.getItem("routerFlag");

    translate.addLangs(['en', 'hi']);
    translate.setDefaultLang('en');
    translate.use('hi');
  }
  

  abc()
  {
    return false;

  }

  // dynamic loader for individual containers...
  showLoader(id:string){
    var h = document.getElementById(id);
    let askLoader = document.createElement('article')
    askLoader.classList.add('ask_loader')
    let markup = `
      <figure>
      <div class="spinner-grow spinner-grow-sm"></div>
      <div class="spinner-grow spinner-grow-sm"></div>
      <div class="spinner-grow spinner-grow-sm"></div>
        
      </figure>
    `
    askLoader.innerHTML = markup
    h.appendChild(askLoader)
  }

  hideLoader(id:string){
    const mainContainer = document.getElementById(id);
    const askLoader = mainContainer.querySelector('.ask_loader')
    askLoader.remove();
  }

  changeLang(data:any){
    this.translate.use(data)
    console.log(data)
  }
  
}
