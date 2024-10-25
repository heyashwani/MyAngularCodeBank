import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-social-sharing',
  templateUrl: './social-sharing.component.html',
  styleUrls: ['./social-sharing.component.css']
})
export class SocialSharingComponent implements OnInit {

  constructor(private userService:Service1Service) {
    this.userService.HeaderDisplay.emit(true);
   }

  ngOnInit() {}
    

}
