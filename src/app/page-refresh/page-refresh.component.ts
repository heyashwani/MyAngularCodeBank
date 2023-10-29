import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-page-refresh',
  templateUrl: './page-refresh.component.html',
  styleUrls: ['./page-refresh.component.css']
})
export class PageRefreshComponent implements OnInit {

  a:string = "ashwani"
  sayHello;

  constructor(private userService:Service2Service,private service1:Service1Service,private router:Router) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    console.log("magnatic scroll works")

    this.sayHello = this.throttle(this.printMessage,2000);
  }

  abc(){
    this.a = "ruby"
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  
  b;

  

   printMessage(){
    console.log("You have clicked a button");
  };

  throttle(fn, delay){
    let lastCalled = 0;
    return () => {
      let now = new Date().getTime();
      if(now - lastCalled < delay) {
        return;
      }
      lastCalled = now;
      return fn();
    }
  }

}
