import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-search-rxjs',
  templateUrl: './search-rxjs.component.html',
  styleUrls: ['./search-rxjs.component.css']
})
export class SearchRxjsComponent implements OnInit, AfterViewInit {

  @ViewChild("myInput") myInput:ElementRef;
  searchTerm: any;
  constructor(private service1:Service1Service,private userService:Service2Service) {

    this.service1.HeaderDisplay.emit(true);
  
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )

    searchTerm.subscribe((res:any)=>{
      this.searchTerm = res
      console.log(res)
      

      // now here your can call a function to fetch data from server and can send this value as a requested data in api
      
    })

  }

}
