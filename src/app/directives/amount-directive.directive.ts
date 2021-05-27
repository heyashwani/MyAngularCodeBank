import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appAmountDirective]'
})
export class AmountDirectiveDirective {

  constructor() { }

  dotFlag:boolean = false;
  @HostListener('keypress',['$event']) isNumberKey(evt)
  {
    
    var charCode = evt.which;
    
    if (charCode < 48 || charCode > 57){
      if(charCode == 46){
        
        if(!this.dotFlag){
          this.dotFlag = true;
          return true; //for one time dot allowed
        }else{
          return false;
        }
        
      }else{
        return false;
      }
    }
    else{
      return true;
    }
  }

}
