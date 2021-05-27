import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-http-loader',
  templateUrl: './http-loader.component.html',
  styleUrls: ['./http-loader.component.css']
})
export class HttpLoaderComponent implements OnInit {

  constructor(private userService:Service1Service) { 
    this.userService.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

}
