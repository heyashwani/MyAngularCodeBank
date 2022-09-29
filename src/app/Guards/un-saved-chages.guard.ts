import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

export interface CanComponentLeave{
  canLeave:() => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UnSavedChagesGuard implements CanDeactivate<CanComponentLeave> {
  canDeactivate(component:CanComponentLeave){
    if(component.canLeave){
      return component.canLeave()
    }
    else{
      return true;
    }
  }
}
