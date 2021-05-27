import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userService:Service1Service) { 

    this.userService.HeaderDisplay.emit(true);
    
    
  }

  ngOnInit() {
    
    }
  
    copyText(){
      var copyText = document.getElementById("myInput") as HTMLInputElement;

      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
      /* Copy the text inside the text field */
      document.execCommand("copy");
    
      /* Alert the copied text */
      alert(copyText.value);
    }

  

}
