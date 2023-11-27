
import { Injectable, EventEmitter } from '@angular/core';
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
  
  
  constructor() { 
    this.myVar = sessionStorage.getItem("routerFlag");
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
        <img src="assets/images/loader.gif" />
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
  
}
