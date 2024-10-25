import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service1:Service1Service,private route:ActivatedRoute) {

    this.service1.HeaderDisplay.emit(true);
    console.log("Constructor called-->");

    route.params.subscribe((data)=>{
      console.log("ashwani");
    })
  
   }

  ngOnInit() {
  }

}
