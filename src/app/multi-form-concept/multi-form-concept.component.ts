import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';
declare var $:any;

@Component({
  selector: 'app-multi-form-concept',
  templateUrl: './multi-form-concept.component.html',
  styleUrls: ['./multi-form-concept.component.css']
})
export class MultiFormConceptComponent implements OnInit {

  myArr:any = [];
  guard_id:number = null;

  constructor(private service1:Service1Service,private service2:Service2Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    $("#xyz").click(function(){
      $("#prnt_btn").trigger("click");
    });
  }

  append()  {
    this.myArr.push("fd");
    // console.log(this.myArr);
  }

  sendData(data){
    console.log(data);
    this.service2.insertGuardian(data).subscribe((res:any)=>{
      console.log(res);
      if(res.status == 200)
      {
        this.guard_id = res.recode_id;
        console.log(typeof(this.guard_id));
        $(".mybtn").trigger("click");
      }
      else
      {
        alert("something went wrong in parent form");
      }
    })
  }

 
  ChildForm(data){
    
    data.guard_id = this.guard_id;
    console.log(data);
    this.service2.insertChild(data).subscribe((res:any)=>{
      if(res.status == 200)
      {
        console.log("registration successfull");
      }
      else
      {
        console.log("something went wrong");
      }
    })
  }

 


}
