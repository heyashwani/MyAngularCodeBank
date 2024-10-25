import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Service1Service } from '../services/Service1/service1.service';


@Component({
  selector: 'app-data-transfer-from',
  templateUrl: './data-transfer-from.component.html',
  styleUrls: ['./data-transfer-from.component.css']
})
export class DataTransferFromComponent implements OnInit {

  pageFlag:string = "I am comming form data-transfer-from";
  constructor(private route:ActivatedRoute,private router:Router,private userService:Service1Service) { 

    this.userService.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

  myRedirect()
  {
    // this.router.navigate(['dt_to', {pageFlag:"I am comming form data-transfer-from"}],{relativeTo: this.route}); // by using parameter
    this.router.navigate(['dt_to'], {queryParams:{pageFlag:"I am comming form data-transfer-from"},relativeTo: this.route}); //by using query parameter (in this '?'will be prepended and after '?' we will get our data)
    
  }
  
}
