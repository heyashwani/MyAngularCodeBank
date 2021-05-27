import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-date-wise-entry-concept',
  templateUrl: './date-wise-entry-concept.component.html',
  styleUrls: ['./date-wise-entry-concept.component.css']
})
export class DateWiseEntryConceptComponent implements OnInit {

  date:any;
  date1:any;
  place:string;
  purpose:string;

  details = {
    date:"",
    place:"",
    purpose:""
  }

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

  constructor(private userService:Service1Service,private service2:Service2Service) { 
    this.userService.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    // this.date = new Date().toLocaleDateString();  //other method to get current date
    this.date = new Date(Date.now()); //for current date
  }
  dateChange(val)
  {
    var dt = new Date(val);
    var currentdate= dt.getFullYear() + "-" + (dt.getMonth()+1) + "-" + dt.getDate();
    this.date1 = currentdate;
    console.log(currentdate);
    console.log(typeof(currentdate));

  }
  sendData()
  {
    this.details.date = this.date1;
    this.details.place = this.place;
    this.details.purpose = this.purpose;

    console.log(this.details);
    this.service2.pmShedInsert(this.details).subscribe((data)=>{
      
      console.log(data);
    })  
  }

}
