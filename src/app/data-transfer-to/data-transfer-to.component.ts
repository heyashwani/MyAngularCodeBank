import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-data-transfer-to',
  templateUrl: './data-transfer-to.component.html',
  styleUrls: ['./data-transfer-to.component.css']
})
export class DataTransferToComponent implements OnInit {

  pageFlag1:string;
  constructor(private activatedRoute:ActivatedRoute,private userService:Service1Service) { 

    this.userService.HeaderDisplay.emit(true);
    // this.pageFlag1 = this.activatedRoute.snapshot.paramMap.get("pageFlag"); //try this also (this is for params)
    this.pageFlag1 = this.activatedRoute.snapshot.queryParamMap.get("pageFlag"); // try this also (this is for query params)
  }

  ngOnInit() {
  }

  
}
