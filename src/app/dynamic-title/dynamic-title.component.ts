import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-title',
  templateUrl: './dynamic-title.component.html',
  styleUrls: ['./dynamic-title.component.css']
})
export class DynamicTitleComponent implements OnInit {

  favIcon: HTMLLinkElement = document.querySelector('#my_favicon');

  constructor(private userService:Service1Service,private titleService:Title) { 
    this.userService.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    setTimeout(()=>{
      this.titleService.setTitle("Ashwani");
      this.favIcon.href = "assets/images/logo.png"
    },4000)
  }

}
