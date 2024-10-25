import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-custum-pipe',
  templateUrl: './custum-pipe.component.html',
  styleUrls: ['./custum-pipe.component.css']
})
export class CustumPipeComponent implements OnInit {

  arr = ["ashwani","rajiv","anshul"];
  myvar:string = "AShwani";

  constructor(private userService:Service1Service) { 
    this.userService.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

}
