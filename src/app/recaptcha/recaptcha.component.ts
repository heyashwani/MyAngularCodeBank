import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service1Service } from '../services/Service1/service1.service';
import {NgxCaptchaModule,ReCaptcha2Component} from 'ngx-captcha';
import { ViewChild } from '@angular/core';
import { ReCaptchaV3Service } from 'ngx-captcha';


@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  // key:string = "6Le_rAkbAAAAAE89OTBcDrx88-9DER9OcDMqOL9S";  //sitekey for recaptcha v2
  key:string = "6Le_vAsbAAAAAIXibleH4db5YqSv01Y56Yibv08r";  //sitekey for recaptcha v3
  size;
  lang;
  Dark;
  type;
   aFormGroup: FormGroup;

  constructor(private userService:Service1Service,private formBuilder: FormBuilder,private reCaptchaV3Service: ReCaptchaV3Service) {
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
    alert("Loaded");
   }
 
   handleExpire(): void {
     alert("expired");
   }

   myReset(){
    this.captchaElem.resetCaptcha();
   }

   handleError(){

   }
   badge;
   recaptcha;

   handleReady()
{

}

  onSubmit(){
    this.reCaptchaV3Service.execute(this.key, 'homepage', (token) => {
      console.log('This is your token: ', token);
    }, {
        useGlobalDomain: false
    });
  }

  send(){
    this.reCaptchaV3Service.execute(this.key, 'homepage', (token) => {
      console.log('This is your token: ', token);
    }, {
      useGlobalDomain: false // optional
    });
  }
}
