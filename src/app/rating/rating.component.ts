import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(private service1:Service1Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

}
