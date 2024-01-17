import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-internet-speed',
  templateUrl: './internet-speed.component.html',
  styleUrls: ['./internet-speed.component.css']
})
export class InternetSpeedComponent implements OnInit {

  time_start:number;
  end_time:number; 
  downloadSize:number = 5616998; 


  constructor(private service1:Service1Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
    this.checkInternetSpeed()

  }
      

    checkInternetSpeed(){
                var userImageLink = 
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200714180638/CIP_Launch-banner.png"; 
            
            var downloadImgSrc = new Image(); 
            
            downloadImgSrc.onload =  ()=> { 
              this.end_time = new Date().getTime(); 
              this.displaySpeed(); 
            }; 
            this.time_start = new Date().getTime(); 
            downloadImgSrc.src = userImageLink; 
            
        }

        

       displaySpeed() { 
        var timeDuration = (this.end_time - this.time_start) / 1000; 
        var loadedBits = this.downloadSize * 8; 
        
        /* Converts a number into string 
        using toFixed(2) rounding to 2 */
        var bps = Number((loadedBits / timeDuration).toFixed(2)); 
        var speedInKbps = Number((bps / 1024).toFixed(2)); 
        var speedInMbps = Number((speedInKbps / 1024).toFixed(2)); 
        
       
        

       
        


        alert("Your internet connection speed is: \n"
          + bps + " bps\n" + speedInKbps 
          + " kbps\n" + speedInMbps + " Mbps\n"); 
      } 

}
