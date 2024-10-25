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
  totalPages: number;

  constructor(private service1:Service1Service,private userService:Service2Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
    this.getData()
  }

  getData(){
    var url = "https://reqres.in/api/users?page=" + this.currentPage
     
    this.userService.get(url).subscribe((data:any)=>{
      this.items = data.data;
      this.totalPages = data.total_pages
      
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
     if(this.currentPage > this.totalPages){
        return false
     }
     var url = "https://reqres.in/api/users?page=" + this.currentPage
     
      this.userService.get(url).subscribe((chunk:any)=>{
        this.items = this.items.concat(chunk.data);
        
        
        
        
      }) 
    }

}
