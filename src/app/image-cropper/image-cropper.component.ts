import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {

  constructor(private userService:Service1Service) {
    this.userService.HeaderDisplay.emit(true);
 }

  ngOnInit() {
  }

  imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        console.log(event)
    }
    imageLoaded(image: LoadedImage) {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }




     urltoFile(url, filename, mimeType){
      return (fetch(url)
          .then((res)=>{return res.arrayBuffer();})
          .then((buf)=>{return new File([buf], filename,{type:mimeType});})
        );
      }

  abc(){
    this.urltoFile(this.croppedImage, 'hello.txt','text/plain')
    .then((file)=>{ 
      console.log("file",file);
      var reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = (_event) => { 
        console.log("base 64",reader.result)
      }
    });
    
  }

  

}
