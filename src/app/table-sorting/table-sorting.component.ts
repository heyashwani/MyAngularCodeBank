import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Ng2OrderModule } from 'ng2-order-pipe';

@Component({
  selector: 'app-table-sorting',
  templateUrl: './table-sorting.component.html',
  styleUrls: ['./table-sorting.component.css']
})
export class TableSortingComponent implements OnInit {

  sortingColumn:string = "";
  key:string = "";
  reverse:boolean = true;

  studData = {
    stud1:{srn:5,name:"Ashwani",fname:"Chote lal",class:"Mca"},
    stud2:{srn:8,name:"Anshul",fname:"Jugal Kishor",class:"Btech"},
    stud3:{srn:1,name:"Rahul",fname:"Ram Ratan",class:"12th"},
    stud4:{srn:9,name:"Pankaj",fname:"Vinod",class:"Mca"},
    stud5:{srn:6,name:"Sohail",fname:"Asim",class:"Bca"},
    stud6:{srn:18,name:"Shiv",fname:"Akash",class:"Mca"},
    stud7:{srn:15,name:"Chirag",fname:"Vikas",class:"Btech"},
    stud8:{srn:25,name:"Raju",fname:"Bhagwan Das",class:"Bba"},
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

  constructor(private userService:Service1Service) { 
    this.userService.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    
  }
  
  sortCol(key:string)
  {
    this.sortingColumn = key;
    this.key = key;
    this.reverse = false;
  }

  sortCol1(key:string)
  {
    this.sortingColumn = key;
    this.key = key;
    this.reverse = true;
  }

 
}



