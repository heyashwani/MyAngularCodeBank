import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-project-in-different-version',
  templateUrl: './project-in-different-version.component.html',
  styleUrls: ['./project-in-different-version.component.css']
})
export class ProjectInDifferentVersionComponent implements OnInit {

  constructor(private service1:Service1Service) { 

    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

}
