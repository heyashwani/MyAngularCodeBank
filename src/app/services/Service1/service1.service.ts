
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
    h.setAttribute("style","position:relative;")
    let askLoader = document.createElement('article')
    askLoader.setAttribute(
      "style", 
      ` width: 100%;
        height: 100%;
        background-color: rgb(255 255 255);
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 50;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #f1f1f1;
      `
    );
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
    const askLoader = mainContainer.querySelector('article')
    askLoader.remove();
  }

  changeLang(data:any){
    this.translate.use(data)
    console.log(data)
  }
  
}
