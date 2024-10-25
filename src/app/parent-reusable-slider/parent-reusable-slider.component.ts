import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-parent-reusable-slider',
  templateUrl: './parent-reusable-slider.component.html',
  styleUrls: ['./parent-reusable-slider.component.css']
})
export class ParentReusableSliderComponent implements OnInit {

  imgDet:any = [
    {
      id:1,
      path:"assets/images/img1.jpg"
    },
    {
      id:2,
      path:"assets/images/img2.jpg"
    },
    {
      id:3,
      path:"assets/images/img3.jpg"
    },
  ] 

  

  

  constructor(private userService:Service2Service,private service1:Service1Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }


  showItem(newItem){
    alert(newItem)
  }

  

}
