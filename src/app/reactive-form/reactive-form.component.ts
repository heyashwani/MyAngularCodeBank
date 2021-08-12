import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service1Service } from '../services/Service1/service1.service';


      
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  regForm:FormGroup;
  
  
  constructor(private service1:Service1Service,private _FormBuilder:FormBuilder) { 

    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {

    this.regForm = this._FormBuilder.group({
      username: [null,[Validators.required]],
      email: [null,[Validators.required,Validators.email]],
      mobile: [null,[Validators.required,Validators.minLength(10)]]
    });

   
  }

  onSubmit()
  {
    if(this.regForm.valid){
      console.log(this.regForm);
    }else{
      var key = Object.keys(this.regForm.controls);
      for(let a of key){
        let control = this.regForm.controls[a];
        if(control.errors !=null ){
          control.markAsTouched();
        }
      }
    }
    
  }

  

}
