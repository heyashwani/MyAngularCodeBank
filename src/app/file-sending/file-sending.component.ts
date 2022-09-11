import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-file-sending',
  templateUrl: './file-sending.component.html',
  styleUrls: ['./file-sending.component.css']
})
export class FileSendingComponent implements OnInit {

 
  selectedFile:File;
  myFile:any = null;
  imgURL: string | ArrayBuffer;
  selectedFileCsv: any;
  public userArray: User[] = [];
  mycsvUrl: string | ArrayBuffer;


  //test
  lines = []; //for headings
  linesR = []; // for rows
  constructor(private service1:Service1Service,private service2:Service2Service) {
    this.service1.HeaderDisplay.emit(true);
   }

  ngOnInit() {
  }

  onFileChanged(ev)
  {

    

   
    if(ev.target.files[0].size/1000>500){
     
      alert("greater than 500kb");
    }
    else if(ev.target.files[0].type == "image/jpeg"){

      alert("type is .JPG");
  
    }
    else{
      console.log(this.selectedFile);

      var reader = new FileReader();
      this.selectedFile = ev.target.files[0];
      console.log("file details",this.selectedFile)
      reader.readAsDataURL(this.selectedFile); 
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
      }
    }



    
      
  }
  onUpload()
    {

      var a = ["abc,xyz"]
      
      const frmData = new FormData();
      frmData.append('Image', this.selectedFile, this.selectedFile.name);
      frmData.append('mykey', JSON.stringify(a));
      

      this.service2.uploadAttachment(frmData).subscribe(
        (resp: any) => {
          // var a = JSON.parse(resp);
          // alert(a.message);
          console.log(resp);
        },
      )
    }



    // onFileChangedCsv(data:any){
      onFileChangedCsv(files: FileList){
      // var reader = new FileReader();
      // this.selectedFileCsv = data.target.files[0];
      // reader.readAsDataURL(this.selectedFileCsv); 
      // reader.onload = (_event) => { 
      //   this.mycsvUrl = reader.result; 
      //   console.log("--------",reader.result);
      // }

      // console.log("sdfasfa",this.mycsvUrl)
      
      // this.service2.get("https://www.cdc.gov/coronavirus/2019-ncov/map-data-cases.csv").subscribe((res:any)=>{
        
      //   let csvToRowArray = res.split("\n");
      //   for (let index = 1; index < csvToRowArray.length - 1; index++) {
      //     let row = csvToRowArray[index].split(",");
      //     this.userArray.push(new User( row[0], row[1], row[2].trim(),row[1],row[1]));
      //   }
        
      //   console.log("csv data",this.userArray);

      // })


      //second try
      
    if(files && files.length > 0) {
       let file : File = files.item(0); 
        //  console.log(file.name);
        //  console.log(file.size);
        //  console.log(file.type);
         //File reader method
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          console.log("csv",csv)
          // allTextLines = csv.split(/\r|\n|\r/);
          allTextLines = csv.split("\n");
          // allTextLines = csv.split(',');
         
         //Table Headings
          let headers = allTextLines[0].split(',');
          let data = headers;
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          //Pusd headings to array variable
          this.lines.push(tarr);
       
          
         
          // Table Rows
          let tarrR = [];
          
          let arrl = allTextLines.length;
          let rows = [];
          console.log("==>",allTextLines[2]);
          for(let i = 1; i < arrl; i++){
            rows.push(allTextLines[i].split(','));
         
          }
          
          for (let j = 0; j < arrl; j++) {
      
              tarrR.push(rows[j]);
              console.log("rows",rows[j]);
          }
         //Push rows to array variable
          this.linesR.push(tarrR);
          // console.log(this.linesR[0]);
      }
    }
  }

    

    onUploadCsv(){

    }


}

export class User{
  Jurisdiction: any;
  Range: any;
  Cases_Reported: any;
  Community_Transmission:any;
  URL:any;



  constructor(Jurisdiction:any,Range:any,Cases_Reported:any,Community_Transmission:any,URL:any){
    this.Jurisdiction = Jurisdiction;
    this.Range = Range;
    this.Cases_Reported = Cases_Reported;
    this.Community_Transmission = Community_Transmission;
    this.URL = URL;
  }
}
