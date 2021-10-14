import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  travelerForm: FormGroup;

  
  constructor(private service1:Service1Service,private formBuilder:FormBuilder) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    this.travelerForm = this.formBuilder.group({
      tname:[null],
      tgender:[null],
      childRow:this.formBuilder.array([this.itemRow()])
    })
  }

  get formArr(){
    return this.travelerForm.get("childRow") as FormArray;
  }

  addRow(){
    
    this.formArr.push(this.itemRow());
  }

  itemRow(){
    return this.formBuilder.group({
      cname:[null],
      cage:[null]
    })
  }

  onSubmit(){
    console.log(this.travelerForm);
    var dataForReq = {
        name:this.travelerForm.get('tname').value,
        gender:this.travelerForm.get('tgender').value,
        childDetails:this.travelerForm.get('childRow').value
        
    }
    console.log("--->>", JSON.stringify(dataForReq));
  }

}
