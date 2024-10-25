import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-mylivechat',
  templateUrl: './mylivechat.component.html',
  styleUrls: ['./mylivechat.component.css']
})
export class MylivechatComponent implements OnInit {

  constructor(private service1:Service1Service) {

    this.service1.HeaderDisplay.emit(true);
   }

  ngOnInit() {
  }

}
