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

  
    //Step 2
    // setInterval(()=>{
    //   this.myDateTime()
    // },1000)
  }

  countDownTimer(){
    var futureDate = new Date("July 18 2024 15:30:00").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    this.secs = Math.floor((distance % (1000 * 60)) / (1000))
    // console.log(this.days)
  }

  convertDateTime(){
    const indiaDateTime = new Date();
  
    const swedenDatetime = indiaDateTime.toLocaleString('sv-SE', { timeZone: 'Europe/Stockholm' });
  
    console.log("India==>> ",indiaDateTime)
    console.log("India==>> ",swedenDatetime)

    /// to confirm check on google, write "sweden current date time"
  }


  
//Step 1
// this is the concept for we are accessing website in all over the world.
// and we want to show a popup on a specific time(india time) 
//assume an user visiting the website from Yakutsuk(Russia)
// triggerTime:string = "20:28" //india time
// flag:boolean = false
// myDateTime(){
//   const yakutsukDateTime = new Date();
//   const indiaDateTime = yakutsukDateTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
//   const indiaDateTime1 = new Date(indiaDateTime);
//   const time = `${indiaDateTime1.getHours()}:${indiaDateTime1.getMinutes()}`

//   if(time == this.triggerTime && !this.flag){
//     alert(time)
//     this.flag = true
//   }  
// }



}
