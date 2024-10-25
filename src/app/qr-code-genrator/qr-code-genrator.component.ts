import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-qr-code-genrator',
  templateUrl: './qr-code-genrator.component.html',
  styleUrls: ['./qr-code-genrator.component.css']
})
export class QrCodeGenratorComponent implements OnInit {

  constructor(private service1:Service1Service) { 
    this.service1.HeaderDisplay.emit(true);
  }

  ngOnInit() {
  }

}
