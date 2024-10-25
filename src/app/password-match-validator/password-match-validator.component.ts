import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { ConfirmPasswordValidator } from '../custom-validators/confirm-password.validator';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-password-match-validator',
  templateUrl: './password-match-validator.component.html',
  styleUrls: ['./password-match-validator.component.css']
})
export class PasswordMatchValidatorComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  uName: any;
  min:number = 18;
  max:number = 45;

  constructor(private fb: FormBuilder,private service1:Service1Service) {
    this.service1.HeaderDisplay.emit(true);

  }

  ngOnInit() {

   

    this.registerForm = this.fb.group(
      {
        email: ["",Validators.required],
        age: [null,[Validators.required,this.ageRangeValidator(this.min,this.max)]],
        password: ["",Validators.required],
        confirmPassword: ["",[Validators.required]]
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm)
  }


  // ******** age validator (without parameter) ******** //
  // ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

  //   if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
  //       return { 'ageRange': true };
  //   }
  //   return null;
  // }


  // ******** age validator (with parameter) ******** //
  ageRangeValidator(min: number, max: number): ValidatorFn {
      return (control: AbstractControl): { [key: string]: boolean } | null => {
          if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
              return { 'ageRange': true };
          }
          return null;
      };
  }

}
