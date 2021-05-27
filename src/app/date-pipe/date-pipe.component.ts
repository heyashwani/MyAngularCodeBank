import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.css'],
  // providers:[DatePipe]
})
export class DatePipeComponent implements OnInit {

  mydate:any;
  constructor(private service1:Service1Service,private dateP:DatePipe) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
  }
  xyz(){
    alert(this.dateP.transform(this.mydate,'dd-MM-yyy'));
  }

}
