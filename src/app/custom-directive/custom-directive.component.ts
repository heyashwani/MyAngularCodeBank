import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  constructor(private service1:Service1Service) {
    this.service1.HeaderDisplay.emit(true);

   }

  ngOnInit() {
  }

}
