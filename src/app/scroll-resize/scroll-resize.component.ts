import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-scroll-resize',
  templateUrl: './scroll-resize.component.html',
  styleUrls: ['./scroll-resize.component.css'],
  // host: {
  //   "(window:resize)":"onWindowResize($event)"
  // } //*** This also a way to use host listner ***//
})
export class ScrollResizeComponent implements OnInit {

  //------- resize ----------------//
  @HostListener('window:resize', ['$event']) onResize(event)
  {
    this.onWindowResize(event);
  }
  // ----------- end resize ---------------//


  //------------- resize ------------------//
  // @HostListener('scroll', ['$event']) onScroll(event){ // for scroll events of the current element
  @HostListener('window:scroll', ['$event']) onScroll(event) {       // for window scroll events
    alert("scroll")

  }
  // -------------- end scroll ---------------//



  constructor(private userService:Service1Service) {
    this.userService.HeaderDisplay.emit(true);
 }

  ngOnInit() {
  }

  onWindowResize(event) {
    

    if(event.target.innerWidth < 900){
   
      alert("window resize work condition true");
    }

    else{
      
    }
    
}

}
