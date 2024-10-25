import { Component, OnInit } from '@angular/core';
import { catchError, delay, retry, retryWhen, take, timeout } from 'rxjs/operators';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {
  posts:any;
  err:any;
  constructor(private service1:Service1Service,private service2:Service2Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    this.service1.showLoader("d_table")
    this.service2.getPosts()
    .pipe(
      catchError(err => {
          console.log('Handling error locally and rethrowing it...', err);
          return throwError("my error");
      }),
      //you can use catchError multiple time like this
      //here we are catching error but return a value not error
      // catchError(err => {
      //   console.log('caught rethrown error, providing fallback value');
      //   return of([]);
      // })
    )
    .subscribe(
      (data)=>{
        this.service1.hideLoader("d_table")
        this.posts = data;
        console.log(this.posts);
        
      },
      (error)=>{
        this.service1.hideLoader("d_table")
        console.log("my error handling",error);
      },
      ()=>{
        console.log("Request completed")
      }
    ) 

    
  }

}
