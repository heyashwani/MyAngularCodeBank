import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Service1Service } from './services/Service1/service1.service';
import { Service2Service } from '../../src/app/services/Service2/service2.service';
import { environment } from "../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	env:any = environment.envName;

	message:any = null;

	name:any;
	flag:number = 0;

  	title = 'MyPractice2';
	  showHeader:boolean;
	  showLoader:boolean;
  	constructor(private userService:Service1Service,private service1:Service2Service,private router: Router) { 
		
		this.userService.HeaderDisplay.subscribe(
			(visibility: boolean) => { this.showHeader = visibility; }
			
		  );
		this.userService.LoaderDisplay.subscribe(
			(visibility:boolean) => {this.showLoader = visibility;}
		)
		 
  	}
  	ngOnInit(){

		console.log("Environment",this.env) 

		this.requestPermission();
    this.listen();

		
		  
		this.userService.routerAuth.emit(false);
		this.name = this.service1.xyz();
		  for(var a of this.name)
		  {
			if(a.url == window.location.href)
			{
				this.flag = 1;
			}
		  }
		//   if(this.flag == 0)
		//   {
		// 	this.router.navigate(['login']);
		//   }
		  
		
  	}


	  requestPermission() {
		const messaging = getMessaging();
		getToken(messaging, 
		 { vapidKey: environment.firebase.vapidKey}).then(
		   (currentToken) => {
			 if (currentToken) {
				localStorage.setItem("notToken",currentToken)
			   console.log("Hurraaa!!! we got the token.....");
			   console.log("current token",currentToken);
			 } else {
			   console.log('No registration token available. Request permission to generate one.');
			 }
		 }).catch((err) => {
			console.log('An error occurred while retrieving token. ', err);
		});
	  }
	
	  listen() {
		const messaging = getMessaging();
		onMessage(messaging, (payload) => {
		  console.log('Message received. ', payload);
		  this.message=payload;
		});
	  }

	 
}
