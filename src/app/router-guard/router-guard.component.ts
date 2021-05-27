import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-router-guard',
  templateUrl: './router-guard.component.html',
  styleUrls: ['./router-guard.component.css']
})
export class RouterGuardComponent implements OnInit {

  constructor(private service1:Service1Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

}
