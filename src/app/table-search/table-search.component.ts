import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.css']
})
export class TableSearchComponent implements OnInit {

  query:string="";
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
  constructor(private service1:Service1Service,public translate: TranslateService) {

    this.service1.HeaderDisplay.emit(true);
   }

  ngOnInit() {
  }

  abc(a)
  {
    console.log(a.name);
  }

}
