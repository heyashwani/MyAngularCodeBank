import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
declare var $:any;

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  cd:any;
  c;
  constructor(private userService:Service1Service) {
    this.userService.HeaderDisplay.emit(true);
   }

  ngOnInit() {
    this.CreateCaptcha();
  }

  // Create Captcha
CreateCaptcha() 
{
  //$('#InvalidCapthcaError').hide();
  var elem = document.getElementById("captcha_div_cnv");
  if(elem){
    document.getElementById("captcha_div_cnv").remove();
  }
  
  var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
                    

    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
  
  this.cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;

  var canv = document.createElement("canvas");
  canv.id = "captcha_div_cnv";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(this.cd, 0, 30);
 
  document.getElementById("captcha_div").appendChild(canv); // adds the canvas to the body element
  
}




}
