import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  key:string = "6Le_rAkbAAAAAE89OTBcDrx88-9DER9OcDMqOL9S";
  protected aFormGroup: FormGroup;

  constructor(private userService:Service1Service,private formBuilder: FormBuilder) {
    this.userService.HeaderDisplay.emit(true);
   }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  handleReset(): void {
    alert("reset");
   }
 
   handleSuccess(captchaResponse: string): void {
    alert("success");
   }
 
   handleLoad(): void {
    
   }
 
   handleExpire(): void {
     alert("expired");
   }

}
