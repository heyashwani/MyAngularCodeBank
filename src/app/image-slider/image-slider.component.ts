import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

declare var $:any;

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

 

 
  constructor(private userService:Service1Service) {
     this.userService.HeaderDisplay.emit(true);

     
  }

     

  ngOnInit() {


  }

}
