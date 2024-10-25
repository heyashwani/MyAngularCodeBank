import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CanComponentLeave } from '../Guards/un-saved-chages.guard';
import { Service1Service } from '../services/Service1/service1.service';


      
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit,CanComponentLeave {

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

  //thiscode will prevent to navigate another route if your page/form 
  // have some unsaved changes.
  canLeave():boolean{
    if(this.regForm.controls.username.dirty){
      return window.confirm("Do you want to leave before saving the changes?")
    }
    else{
      return true;
    }
  }


  //this code will prevent to close the tab if page is dirty means
  //user have done some activity on the page like click or something else.
  @HostListener('window:beforeunload', ['$event'])
  handleClose(e: BeforeUnloadEvent): void {
    console.log('test');
    e.preventDefault();
    e.returnValue = 'test';
  }
	

  

}
