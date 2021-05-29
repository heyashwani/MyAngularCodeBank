import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';
declare var $:any;

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.css']
})
export class LiveDataComponent implements OnInit {

  posts:any;
  userData:any;
  userid:number;
  mainid:number;
  tit:string;
  bod:string;

  page: number = 1;
  totalRecords:number = 100;

  

  constructor(private service1:Service1Service,private userService:Service2Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
    
    this.userService.getPosts().subscribe((data)=>{
      this.posts = data;
      
      console.log(this.posts);
    })  

    
    
  }

  


 

  
}




