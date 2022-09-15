import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-magnatic-scroll',
  templateUrl: './magnatic-scroll.component.html',
  styleUrls: ['./magnatic-scroll.component.css']
})
export class MagnaticScrollComponent implements OnInit {

  


  constructor(private userService:Service2Service,private service1:Service1Service,private router:Router) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    
  }

  



}
