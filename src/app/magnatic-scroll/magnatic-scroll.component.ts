import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-magnatic-scroll',
  templateUrl: './magnatic-scroll.component.html',
  styleUrls: ['./magnatic-scroll.component.css']
})
export class MagnaticScrollComponent implements OnInit {

  


  constructor(private userService:Service2Service,private service1:Service1Service,private router:Router) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    
  }

  
  sendNotification(){
   
    var url = "https://fcm.googleapis.com/fcm/send";
    var token = localStorage.getItem("notToken")
    var data = {
      notification: {
      title: "First Notification", 
      body: "Hello from Jishnu!!"
      },
      webpush: {
        fcm_options: {
          link: "https://www.w3schools.com/js/tryit.asp?filename=tryjs_callback5"
        }
      },
      to:token
  }
    this.userService.post1(url,data).subscribe((res:any)=>{

    })
  }



}
