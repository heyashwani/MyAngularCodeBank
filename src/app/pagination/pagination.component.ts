import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  studData = {
    stud1:{srn:"1",name:"Ashwani",fname:"Chote lal",class:"Mca"},
    stud2:{srn:"2",name:"Anshul",fname:"Jugal Kishor",class:"Btech"},
    stud3:{srn:"3",name:"Rahul",fname:"Ram Ratan",class:"12th"},
    stud4:{srn:"4",name:"Pankaj",fname:"Vinod",class:"Mca"},
    stud5:{srn:"5",name:"Sohail",fname:"Asim",class:"Bca"},
    stud6:{srn:"6",name:"Shiv",fname:"Akash",class:"Mca"},
    stud7:{srn:"7",name:"Chirag",fname:"Vikas",class:"Btech"},
    stud8:{srn:"8",name:"Raju",fname:"Bhagwan Das",class:"Bba"},
  }
  studArray = [
    this.studData.stud1,
    this.studData.stud2,
    this.studData.stud3,
    this.studData.stud4,
    this.studData.stud5,
    this.studData.stud6,
    this.studData.stud7,
    this.studData.stud8,
  ];

  page: number = 1; //default value
  totalRecords:number = 8; //here we can count records so i am using "8" but when we will be working with live api then total records will be required in response of api.(backend developer work)
  constructor(private service1:Service1Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

}
