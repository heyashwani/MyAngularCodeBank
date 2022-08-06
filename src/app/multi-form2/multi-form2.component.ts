import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-multi-form2',
  templateUrl: './multi-form2.component.html',
  styleUrls: ['./multi-form2.component.css']
})
export class MultiForm2Component implements OnInit {

  passForm:FormGroup;

  constructor(private userService:Service2Service,private service1:Service1Service,private formBuilder:FormBuilder) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    this.passForm = this.formBuilder.group({
      name:[""],
      g_gender:["FEMALE"],
      childRow:this.formBuilder.array([this.itemRow()])
    })

  }
  itemRow(){
    return this.formBuilder.group({
      c_relation:[null],
      c_name:[null],
      c_gender:[null],
      skillRow:this.formBuilder.array([])
    })
  }

  formArr(){
    return this.passForm.get("childRow") as FormArray;
  }

  addRow(){
    
    this.formArr().push(this.itemRow());
  }

  skillItemRow(){
    return this.formBuilder.group({
      skill_name:[null],
      skill_code:[null],
      
    })
  }

   formArrSkill(empIndex){
    return this.formArr().at(empIndex).get("skillRow") as FormArray;

    // return this.employees().at(empIndex).get("skills") as FormArray
  }

  addRowSkill(empIndex){
    
    this.formArrSkill(empIndex).push(this.skillItemRow());
  }

  onSubmit(){
    console.log(this.passForm);
    var dataForReq = {
        name:this.passForm.get('name').value,
        gender:this.passForm.get('g_gender').value,
        childDetails:this.passForm.get('childRow').value
        
    }
    console.log("--->>", JSON.stringify(dataForReq));
  }

}
