import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:any;
  password:any;

  imgShow:boolean = true;

  res:any;

  userDetail = {

    username:"",
    password:""
  } 

  constructor(private userService:Service1Service,
    private service2:Service2Service, private router:Router) 
  { 
    this.userService.HeaderDisplay.emit(false);

   
  }

  ngOnInit() {
    

  }

 

  loginUser()
  {
    
      this.userDetail.username = this.username;
      this.userDetail.password = this.password;

      this.userService.LoaderDisplay.emit(true);
      this.userService.LoaderDisplay.emit(false);
        this.router.navigate(['home']);
        this.userService.myVar = "true";
      // this.service2.userLogin(this.userDetail).subscribe(data=>{
          
      //   this.res = data;

        
        
      //   if(this.res.message == "Successful")
      //   {
          
      //    this.userService.myVar = "true";
      //    sessionStorage.setItem("routerFlag","true");
      //    this.userService.LoaderDisplay.emit(false);
      //     this.router.navigate(['home']);
      //   }
      //   else
      //   {
         
      //     this.userService.LoaderDisplay.emit(false);
      //     console.log(this.res.message);
      //   }
        
      // });
      console.log("promise testing");

  }

 


}
