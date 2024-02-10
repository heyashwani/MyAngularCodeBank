import { HostListener } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlynumber]'
})
export class OnlynumberDirective {

  constructor(private _el:ElementRef) { }

  @HostListener('keypress',['$event']) isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode < 48 || charCode > 57){
      return false;
    }else{
      if(this._el.nativeElement.value.length >= 10){
        return false;
      }else{
        return true;
      }
    }
  }

  @HostListener('click') isNumberKey1(){
    alert("click")
  }

}
