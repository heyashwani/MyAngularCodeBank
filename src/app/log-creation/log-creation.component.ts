import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-log-creation',
  templateUrl: './log-creation.component.html',
  styleUrls: ['./log-creation.component.css']
})
export class LogCreationComponent implements OnInit {

  constructor(private service1:Service1Service,private service2:Service2Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

  createLog(){
    const url = "http://localhost:3000/";
    let data = {
      name:"Rohan"
    }
    this.service2.postNew(url,data).subscribe((res:any)=>{
      alert(res.msg)
    })
  }

}
