import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CanWeLoadGuard implements CanLoad{
  constructor(private router: Router) {} 
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return false
  }
}
