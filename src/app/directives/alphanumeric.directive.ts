import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  constructor() { }

  @HostListener('keydown',['$event']) isNumberKey(evt)
  {
    var charCode = evt.which;
		var ok = charCode >= 65 && charCode <= 90 || // A-Z
    charCode >= 96 && charCode <= 105 || // a-z
    charCode >= 35 && charCode <= 40 || // arrows
    charCode == 9 || //tab
    charCode == 46 || //del
    charCode == 8 || // backspaces
			(!evt.shiftKey && charCode >= 48 && charCode <= 57); // only 0-9 (ignore SHIFT options)

		if(!ok || (evt.ctrlKey && evt.altKey)){
			evt.preventDefault();
		}
  }

}
