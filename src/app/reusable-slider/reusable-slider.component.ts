import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-slider',
  templateUrl: './reusable-slider.component.html',
  styleUrls: ['./reusable-slider.component.css']
})
export class ReusableSliderComponent implements OnInit {

  @Input() imgDetails:any = []; // decorate the property with @Input()

  //@Output
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  //@Output
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
