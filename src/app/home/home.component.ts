import { Component, OnInit, ViewChild } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('fileImportInput') fileImportInput: any;

  csvRecords: any[] = [];
  header = true;
  param = {value: 'world'};
  
  constructor(private userService:Service1Service,
    private ngxCsvParser: NgxCsvParser,
    public translate: TranslateService) { 

    this.userService.HeaderDisplay.emit(true);
    
    
  }

  ngOnInit() {
    
    }
  
    copyText(){
      var copyText = document.getElementById("myInput") as HTMLInputElement;

      copyText.select();
      copyText.setSelectionRange(0, 99999); /* For mobile devices */
    
      /* Copy the text inside the text field */
      document.execCommand("copy");
    
      /* Alert the copied text */
      alert(copyText.value);
    }

    fileChangeListener($event: any){
      // Select the files from the event
    const files = $event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {

        console.log('Result', result);
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });

      }
    

  

}
