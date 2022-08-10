import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-slider',
  templateUrl: './reusable-slider.component.html',
  styleUrls: ['./reusable-slider.component.css']
})
export class ReusableSliderComponent implements OnInit {

  @Input() imgDetails:any = []; // decorate the property with @Input()

  constructor() { }

  ngOnInit() {
  }

}
