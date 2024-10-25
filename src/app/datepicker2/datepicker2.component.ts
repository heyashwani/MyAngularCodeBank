import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-datepicker2',
  templateUrl: './datepicker2.component.html',
  styleUrls: ['./datepicker2.component.css']
})
export class Datepicker2Component implements OnInit {

  date:any;


  options: DatepickerOptions = {
    minYear: 2020,
    maxYear: 2030,
    // placeholder: '25-05-2012',
    firstCalendarDay: 0, // 0 for sunday
    addClass: 'form-control',
    useEmptyBarTitle: false,
    displayFormat: 'YYYY MM DD',
    //locale:frLocale
    // minDate: new Date(Date.now()),
    // maxDate: new Date(Date.now()),
  };
  constructor(private userService:Service1Service) { 
    this.userService.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    // this.date = new Date().toLocaleDateString();  //other method to get current date
    this.date = new Date(Date.now()); //for current date
  }


}
