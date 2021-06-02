import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { Service1Service } from './services/Service1/service1.service';
import { Service2Service } from '../../src/app/services/Service2/service2.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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

	 
}
