
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  HeaderDisplay = new EventEmitter<boolean>();
  LoaderDisplay = new EventEmitter<boolean>();
  myVar:string = "false";
  routerAuth = new EventEmitter<boolean>();
  // userName = new Subject<any>(); // in Subject we can't set initial value
  userName = new BehaviorSubject<any>('MyDefaultValue'); // in Subject we can set initial value

  
  constructor() { 
    this.myVar = sessionStorage.getItem("routerFlag");
  }
  

  abc()
  {
    return false;

  }
  
}
