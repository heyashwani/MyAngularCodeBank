import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import { ReCaptchaV3Service } from 'ngx-captcha';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-captcha-v3',
  templateUrl: './captcha-v3.component.html',
  styleUrls: ['./captcha-v3.component.css']
})
export class CaptchaV3Component implements OnInit {
  protected aFormGroup: FormGroup;
  siteKey:"6LesvKshAAAAAO-_CZQikn3tvgYBIMd0QB0h5krY";

  constructor(private userService:Service1Service,private formBuilder: FormBuilder) {
    this.userService.HeaderDisplay.emit(true);
   }

  ngOnInit() {

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  onSubmit(){
    // this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
    //   console.log('This is your token: ', token);
    // }, {
    //   useGlobalDomain: false 
    // });
  }





}
