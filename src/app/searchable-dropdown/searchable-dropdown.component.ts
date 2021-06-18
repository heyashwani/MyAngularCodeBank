import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: ['./searchable-dropdown.component.css']
})
export class SearchableDropdownComponent implements OnInit {

  selectedCar: number;
  cars = [
    {
      sutudData:{
                  data:{ 
                          id: 1,
                          name: 'BMW' 
                        },
                }
    },
    {
      sutudData:{
                  data:{ 
                          id: 2,
                         name: 'AUDI',
                         isDisable:true
                        },
                }
    },
    {
      sutudData:{
                  data:{ 
                          id: 3, name: 'TOYOTA' 
                        },
                }
    },
    {
      sutudData:{
                  data:{ 
                          id: 4, 
                          name: 'HUNDAYI',
                          isDisable:true 
                        },
                }
    },
    
];
constructor(private service1:Service1Service,private userService:Service2Service) {

  this.service1.HeaderDisplay.emit(true);

  

 }


  ngOnInit() {
  }

  abc(){
    console.log(this.selectedCar);
  }
  

}
