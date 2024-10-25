import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';
declare var $:any;

@Component({
  selector: 'app-live-data',
  templateUrl: './live-data.component.html',
  styleUrls: ['./live-data.component.css']
})
export class LiveDataComponent implements OnInit {

  posts:any;
  userData:any;
  userid:number;
  mainid:number;
  tit:string;
  bod:string;

  page: number = 1;
  totalRecords:number = 100;
  showDelBtn:number = 0;

  dropValueFilter:any = [
    {
      value:5,
      displayValue:"Value5"
    },
    {
      value:7,
      displayValue:"Value7"
    },
    {
      value:12,
      displayValue:"Value12"
    },
    {
      value:15,
      displayValue:"Value15"
    },
  ]
  myValue:any;
  backupPost: any;
    
  

  

  constructor(private service1:Service1Service,private userService:Service2Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
    
    this.userService.getPosts().pipe(map(res=>{
      
      
      for(let a of res){
        a["checkbox"] = false
      }
      
      return res;
    })).subscribe((data)=>{
      this.posts = data;
      this.backupPost = data;
      
      console.log(this.posts);
    })  

    
    
  }


  //multi checkbox functionality in table
  onCheckboxCheck(ev:any){
    console.log("ev",ev)
    if(ev.target.checked){
      let limit = 5;
      let idsArray = [];
      for(let i=0;i<limit;i++){
        this.posts[i]["checkbox"] = true;
        idsArray.push(this.posts[i].id)
      }
      this.showDelBtn = 1;
      console.log("ids array ", idsArray)
    }else{
      let limit = 10;
      for(let i=0;i<limit;i++){
        this.posts[i]["checkbox"] = false
      }
      this.showDelBtn = 0;
    }
    
  }

  onSingleCheckboxClick(ev:any,id:number){
    if(ev.target.checked){
      for(let a of this.posts){
        if(a.id == id){
          a["checkbox"] = true
        }
      }
    }else{
      for(let a of this.posts){
        if(a.id == id){
          a["checkbox"] = false
        }
      }
    }
    console.log(this.posts)
  }














  myFilter(){
    console.log(this.backupPost);
    this.posts = this.backupPost.filter(obj =>
      this.myValue == obj.id
    )
  }

  


 

  
}




