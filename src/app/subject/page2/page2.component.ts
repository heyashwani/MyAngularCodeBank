import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/Service1/service1.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  uName:string;
  constructor(private service1:Service1Service) {
    this.service1.userName.subscribe((data)=>{
      this.uName = data;
      // alert("ashwani");  // this alert will be called everytime whenever data received a value wheather value is same as previous.in paymonk project this concept is being used for real time balance update.
    })
   }

  ngOnInit() {
  }

}
