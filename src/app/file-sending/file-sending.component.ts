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
  constructor(private service1:Service1Service,private service2:Service2Service) {
    this.service1.HeaderDisplay.emit(true);
   }

  ngOnInit() {
  }

  onFileChanged(ev)
  {

   
    if(ev.target.files[0].size/1000>100){
     
      alert("greater than 100kb");
    }
    else if(ev.target.files[0].type == "image/jpeg"){

      alert("type is .JPG");
  
    }
    else{
      this.selectedFile = ev.target.files[0];
      console.log(this.selectedFile);
    }
    
  }
  onUpload()
    {
      const frmData = new FormData();
      frmData.append('Image', this.selectedFile, this.selectedFile.name);

      this.service2.uploadAttachment(frmData).subscribe(
        (resp: any) => {
          // var a = JSON.parse(resp);
          // alert(a.message);
          console.log(resp);
        },
      )
    }

}
