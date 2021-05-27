import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  email:string;
  password:string;
  res:any;



  userDetail = {

    name:"",
    email:"",
    password:""
  };
  constructor(private userService:Service1Service,private serv1:Service2Service) 
  {
    this.userService.HeaderDisplay.emit(false);
  }

  ngOnInit() {
  }

  myFunction()
  {
    this.userDetail.name = this.name;
    this.userDetail.email = this.email;
    this.userDetail.password = this.password;
    // alert(this.userDetail.name);
    this.serv1.myInsert(this.userDetail).subscribe(data=>{
      console.log(data);
      this.res = data;
      alert(this.res.message);
    });
  }

  

}
