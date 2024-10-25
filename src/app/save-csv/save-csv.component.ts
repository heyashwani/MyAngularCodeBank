import { Component, OnInit } from '@angular/core';
import { ExportToCsv } from 'export-to-csv';
import { Service1Service } from '../services/Service1/service1.service';

@Component({
  selector: 'app-save-csv',
  templateUrl: './save-csv.component.html',
  styleUrls: ['./save-csv.component.css']
})
export class SaveCsvComponent implements OnInit {

  data = [
    {
      name: 'Test 1',
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];

   options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: 'My Awesome CSV',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };
  csvExporter = new ExportToCsv(this.options);

  constructor(private service1:Service1Service) {
    this.service1.HeaderDisplay.emit(true);

   }

  ngOnInit() {
  }

  abc(){
    
    this.csvExporter.generateCsv(this.data);

  }

 


}
