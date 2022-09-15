import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myUserName:string = "Ashwani Kumar"
	
  constructor(private router:Router,private service1:Service1Service,private service2:Service2Service) { 
    this.service1.myUserName.subscribe((data)=>{
      this.myUserName = data;
      
      this.test()

    })
  }

  

  ngOnInit() {
   

  }

  test(){
    console.log("test called")
  }

  logout()
  {
    sessionStorage.removeItem("routerFlag");
    this.service1.myVar = "false";
    this.router.navigate(['']);
   
  }

  


}

