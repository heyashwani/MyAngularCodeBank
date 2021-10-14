import { Component, OnInit } from '@angular/core';

import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit {
  items: any = [];
  showDiv: boolean = false;
  currentPage:number = 1;

  constructor(private service1:Service1Service,private userService:Service2Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
    this.getData()
  }

  getData(){
    var url = "http://13.235.218.182:6262/api/v7/user/fetch_student_list";
     var req = {
      
        "type": 1,
        "page": String(this.currentPage),
        "interest": "",
        "gender": "",
        "age": "",
        "ngo": "",
        "date": "",
        "issuedLogin": "",
        "search": "",
        "orderType": "",
        "order": ""
    
     }
    this.userService.post(url,req).subscribe((data:any)=>{
      this.items = data.result;
      
      this.showDiv = true;
      console.log(this.items);
    })  
  }

  fetchMore(event:any){
    
    if (event.endIndex == this.items.length-1){
      console.log("e",event);
      this.currentPage = this.currentPage +1;
      this.fetchNextChunk();
      
    } 
    else{
      return;
    }
        
        
  }

   fetchNextChunk() {
     var url = "http://13.235.218.182:6262/api/v7/user/fetch_student_list";
     var req = {
      
        "type": 1,
        "page": String(this.currentPage),
        "interest": "",
        "gender": "",
        "age": "",
        "ngo": "",
        "date": "",
        "issuedLogin": "",
        "search": "",
        "orderType": "",
        "order": ""
    
     }
      this.userService.post(url,req).subscribe((chunk:any)=>{
        this.items = this.items.concat(chunk.result);
        
        
        
        
      }) 
    }

}
