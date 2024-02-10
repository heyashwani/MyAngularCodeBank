import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Service1Service } from '../services/Service1/service1.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // myAuth:boolean;
  // myFlag:string;
  constructor(private router:Router,private service1:Service1Service)
  {
    
  }
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.service1.myVar == "true")
    {
      return false;
    }else{
      this.router.navigate(['/login']);
      return false;
      
    }


    
  }
}
