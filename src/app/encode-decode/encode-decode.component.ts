import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-encode-decode',
  templateUrl: './encode-decode.component.html',
  styleUrls: ['./encode-decode.component.css']
})
export class EncodeDecodeComponent implements OnInit {

  obj = {
    name:"ashwani",
    class:"Mca",
    city:"Bareilly"
  }
  constructor(private userService:Service1Service) { 
    this.userService.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    console.log("Encoding-->"+ btoa("password")); //encode

    console.log("Decoding-->" + atob("cGFzc3dvcmQ="));

    console.log(btoa(JSON.stringify(this.obj)));

    console.log(JSON.parse(atob("eyJuYW1lIjoiYXNod2FuaSIsImNsYXNzIjoiTWNhIiwiY2l0eSI6IkJhcmVpbGx5In0=")));
  }

}
