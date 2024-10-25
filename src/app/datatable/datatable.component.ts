import { Component, ComponentFactoryResolver, InjectionToken, Injector, OnInit, ReflectiveInjector } from '@angular/core';
import { DynamicDemo1Component } from '../dynamic-demo1/dynamic-demo1.component';
import { DynamicDemo2Component } from '../dynamic-demo2/dynamic-demo2.component';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})


export class DatatableComponent implements OnInit {

  myVar;
  myInjector: Injector;

  constructor(private service1:Service1Service,private userService:Service2Service) {

    this.service1.HeaderDisplay.emit(true);
    
  
   }
    

  ngOnInit() {
   
  }

  loadComp1(){
    
    this.myVar = DynamicDemo1Component
    console.log(this.myVar)
    
  }

  loadComp2(){
    this.myVar = DynamicDemo2Component
  }

}
