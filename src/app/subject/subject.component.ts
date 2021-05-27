import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  uName:string;
  constructor(private service1:Service1Service) {
    this.service1.HeaderDisplay.emit(true);

    this.service1.userName.subscribe((data)=>{
      this.uName = data;
    })
   }

  ngOnInit() {
  }

  setUserName(data){
    this.service1.userName.next(data.value);
  }

}
