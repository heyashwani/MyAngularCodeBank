import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/Service1/service1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  uName:string;
  constructor(private service1:Service1Service) {
    this.service1.userName.subscribe((data)=>{
      this.uName = data;
    })
   }

  ngOnInit() {
  }

}
