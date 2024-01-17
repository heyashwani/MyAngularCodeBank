import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';
import { concatMap, delay, map, retry, retryWhen, take, timeout } from 'rxjs/operators';
import { forkJoin, from, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent implements OnInit {


  constructor(private service1:Service1Service,
    private _service2:Service2Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }


  //retry and retryWhen with delay
  getData(){
    this._service2.get("https://jsonplaceholder.typicode.com/user")
    .pipe(
      //this is retry with delay but this will work in latest angular and rxjs project
      //but here we are using angular 7 so here it is not working. we have to use retryWhen.
      // retry({
      //   count: 3,
      //   delay: 1000
      // })

      retryWhen(errors => {
          return errors.pipe(delay(2000), take(4))
        }
      )
    )
    .subscribe((res:any)=>{
      alert("das")
      console.log("response",res)
    },
    (error)=>{
      alert("d")
      console.log("error",error)
    },
    ()=>{
      console.log("Complete")
    }
    )
  }



  //timeout
  getData1(){
    this._service2.get("https://jsonplaceholder.typicode.com/users")
    .pipe(
      timeout(2000) //2 seconds
    )
    .subscribe((res:any)=>{
      alert("das")
      console.log("response",res)
    },
    (error)=>{
      alert("d")
      console.log("error",error)
    },
    ()=>{
      alert("comp")
      console.log("Complete")
    }
    )
  }


  //of operator
  ofOpe(){
    let source = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
    source.subscribe(val => console.log("this is from of ope",val));
  }

  fromOpe(){
    let source = from(['🐦', '😺', '🐕', '🐊']);

    source.subscribe(val => console.log("this is from 'from' ope",val));

  }

  mapOpe(){
    this._service2.get("https://jsonplaceholder.typicode.com/user")
    .pipe(
      map((res:any)=>{
        for(let a of res){
          a['name'] = "ashwani"
        }
        return res

      })
      
    )
    // .catch((error:HttpErrorResponse)=>{
    //     return Observable.throwError("ashwani erroer");
    // })
    .subscribe((res:any)=>{
      console.log("map",res)
      
    },
    (error)=>{
      alert("d")
      console.log("error",error)
    },
    ()=>{
      
      console.log("Complete")
    }
    )
  }


  concatMapOpe(){
    this._service2.get("https://jsonplaceholder.typicode.com/users")
    .pipe(
      concatMap((res:any)=>{

        return this._service2.get(`https://jsonplaceholder.typicode.com/posts/${res[0].id}`)
      })
    )
    .subscribe((res:any)=>{
      console.log("concat map",res)
      
    },
    (error)=>{
      alert("d")
      console.log("error",error)
    },
    ()=>{
      
      console.log("Complete")
    }
    )
  }

  forkJoinOpe(){
    const observable1 = this._service2.get("https://dummyjson.com/products")
    const observable2 = this._service2.get("https://reqres.in/api/unknown")
    const observable3 = this._service2.get("https://jsonplaceholder.typicode.com/comments");

    forkJoin(observable1, observable2, observable3).subscribe(results => {
      console.log("fork join result",results); 
    });

  }

  

	

}
