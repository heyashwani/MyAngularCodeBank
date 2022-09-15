import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

  constructor(private fb: FormBuilder,private service1:Service1Service) {
    this.service1.HeaderDisplay.emit(true);

  }

  ngOnInit() {

   

    this.registerForm = this.fb.group(
      {
        email: ["",Validators.required],
        password: ["",Validators.required],
        confirmPassword: ["",Validators.required]
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    );
  }

  onSubmit() {
    this.submitted = true;
  }

}
