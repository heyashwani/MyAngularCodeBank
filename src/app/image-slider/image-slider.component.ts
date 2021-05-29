import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Lightbox } from 'ngx-lightbox';
import { LightboxConfig } from 'ngx-lightbox';


@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

 

    _albums:any = [];
  constructor(private userService:Service1Service) {
     this.userService.HeaderDisplay.emit(true);

     
  }

     

  ngOnInit() {
  }

}
