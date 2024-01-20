import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/Service1/service1.service';

@Component({
  selector: 'app-change-landing-moudle-in-angular',
  templateUrl: './change-landing-moudle-in-angular.component.html',
  styleUrls: ['./change-landing-moudle-in-angular.component.css']
})
export class ChangeLandingMoudleInAngularComponent implements OnInit {

  constructor(private userService:Service1Service) {
    this.userService.HeaderDisplay.emit(true);
   }

  ngOnInit() {
  }

}
