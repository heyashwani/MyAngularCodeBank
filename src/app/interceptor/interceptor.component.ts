import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {

  constructor(private service1:Service1Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
  }

}
