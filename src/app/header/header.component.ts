import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


	
  constructor(private router:Router,private service1:Service1Service) { }

  ngOnInit() {
   

  }

  logout()
  {
    sessionStorage.removeItem("routerFlag");
    this.service1.myVar = "false";
    this.router.navigate(['']);
   
  }


}

