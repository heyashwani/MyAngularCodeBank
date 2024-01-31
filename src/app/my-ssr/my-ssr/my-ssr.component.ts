import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Service1Service } from 'src/app/services/Service1/service1.service';

declare var $:any;

@Component({
  selector: 'app-my-ssr',
  templateUrl: './my-ssr.component.html',
  styleUrls: ['./my-ssr.component.css']
})
export class MySSRComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, //Step 1
    private service1:Service1Service
  ) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
    if(isPlatformBrowser(this.platformId)){  //Step 2 (final)
      $("#myBtn").click(function(){
        alert("ashwani")
      })

    }
  }

}
