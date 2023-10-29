import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  days:number;
  hours:number;
  mins:number;
  secs:number;

  constructor(private service1:Service1Service) {
    this.service1.HeaderDisplay.emit(true);
   }

  ngOnInit() {
    setInterval(()=>{
      this.countDownTimer()
    },1000)

    
    this.countDownTimer()
  }

  countDownTimer(){
    var futureDate = new Date("Oct 21 2023 15:30:00").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    this.secs = Math.floor((distance % (1000 * 60)) / (1000))
    console.log(this.days)
  }

}
