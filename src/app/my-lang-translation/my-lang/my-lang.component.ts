import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Service1Service } from 'src/app/services/Service1/service1.service';

@Component({
  selector: 'app-my-lang',
  templateUrl: './my-lang.component.html',
  styleUrls: ['./my-lang.component.css']
})
export class MyLangComponent implements OnInit {

  constructor(private service1:Service1Service,public translate: TranslateService) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

}
