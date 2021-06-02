import { HostListener, Renderer2, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';


declare var $:any;

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
 
})
export class ImageSliderComponent implements OnInit {

  constructor(private userService:Service1Service,private renderer:Renderer2,private _el:ElementRef) {
    this.userService.HeaderDisplay.emit(true);
 }


@ViewChild ('mainImg') mainImg:ElementRef;

  itemsPerSlide:number = 4;
  singleSlideOffset = true;
  noWrap = true;
 
  slides = [
    {image: 'assets/images/thumb1.jpg'},
    {image: 'assets/images/thumb2.jpg'},
    {image: 'assets/images/thumb3.jpg'},
    {image: 'assets/images/thumb4.jpg'},
    {image: 'assets/images/thumb1.jpg'},
    {image: 'assets/images/thumb2.jpg'},
    {image: 'assets/images/thumb3.jpg'},
    {image: 'assets/images/thumb4.jpg'},
    {image: 'assets/images/thumb1.jpg'},
    {image: 'assets/images/thumb2.jpg'}
  ];


  ngOnInit(){

   
    
  }

  abc(data){
    var a = data.getAttribute("src");
    this.renderer.setAttribute(this.mainImg.nativeElement,"src",a);

    console.log(a);
  }

 
  
  



}
