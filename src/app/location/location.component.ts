import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {

  constructor(private service1:Service1Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }
   

  ngOnInit() {
    this.getLocation();
  }

  

   getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition,this.showError);
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  showPosition(position) {
    alert("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude);
  }

   showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        window.location.reload();
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

}
