import { Component, OnInit, ViewChild } from '@angular/core';
import { NgOtpInputComponent } from 'ng-otp-input';
import { Service1Service } from '../services/Service1/service1.service';


@Component({
  selector: 'app-otp-filler',
  templateUrl: './otp-filler.component.html',
  styleUrls: ['./otp-filler.component.css']
})
export class OtpFillerComponent implements OnInit {

  otp: string;
  constructor(private service1:Service1Service) { 

    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }


  @ViewChild(NgOtpInputComponent) ngOtpInput:NgOtpInputComponent;

  config  = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: ''
  };
  onOtpChange(otp) {
    this.otp = otp;
    console.log("====>",this.otp)
  }

}
