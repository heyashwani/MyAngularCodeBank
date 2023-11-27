import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, take, timeout } from 'rxjs/operators';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

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
    this.service2.getPosts()
    .pipe(
      // retry(5),
      timeout(500), //this can time out http request
      retryWhen((err:any) => err.pipe(
        delay(3000),
        take(5),
      )
      )
      
    )
    .subscribe((data)=>{
      this.posts = data;
      console.log(this.posts);
      
    },(error)=>{
      this.err = error;
      console.log("error handling",this.err);
    }) 

    
  }

}
