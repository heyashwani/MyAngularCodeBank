import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-log-creation',
  templateUrl: './log-creation.component.html',
  styleUrls: ['./log-creation.component.css']
})
export class LogCreationComponent implements OnInit {

  constructor(private service1:Service1Service,
    private service2:Service2Service
    ) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
   
    this.getData1();
    this.getData2()
    
    
  }

  

  getData1(){
    const url = "https://jsonplaceholder.typicode.com/photos"
    this.service1.showLoader("aksLoaderContainer1");
    this.service2.get(url).subscribe((res:any)=>{

      this.service1.hideLoader("aksLoaderContainer1")
    })
  }

  getData2(){
    const url = "https://reqres.in/api/users?page=2"
    this.service1.showLoader("aksLoaderContainer2");
    this.service2.get(url).subscribe((res:any)=>{

      this.service1.hideLoader("aksLoaderContainer2")
    })
  }

  createLog(){
    const data = {
      content:"my name is ritu"
    }
    this.service2.post("http://localhost:3000/createLog",JSON.stringify(data)).subscribe((res:any)=>{
      console.log(res)
    })
  }


 
  

  

}
