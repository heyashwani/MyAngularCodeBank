import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import {NgxPrintModule} from 'ngx-print';

@Component({
  selector: 'app-save-pdf',
  templateUrl: './save-pdf.component.html',
  styleUrls: ['./save-pdf.component.css']
})
export class SavePdfComponent implements OnInit {

  constructor(private service1:Service1Service) {
    this.service1.HeaderDisplay.emit(true);

   }

  ngOnInit() {
  }

   printDiv() {
    var divContents = document.getElementById("print-section").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > <h1>Div contents are <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    
    a.print();
    a.document.close();
   
   }

}
