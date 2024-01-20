import { Component, OnInit } from '@angular/core';
import { Service1Service } from 'src/app/services/Service1/service1.service';
declare var window:any;


@Component({
  selector: 'app-blob-url',
  templateUrl: './blob-url.component.html',
  styleUrls: ['./blob-url.component.css']
})
export class BlobUrlComponent implements OnInit {

  constructor(private userService:Service1Service) {
    this.userService.HeaderDisplay.emit(true);
   }

  ngOnInit() {
  }

  //method 1:using input file
  onChange(ev:any) {
    var URL = window.URL || window.webkitURL;
    var video = document.getElementsByTagName('video')[0];
    var file = ev.target.files[0]
    var url = URL.createObjectURL(file);
    console.log("file",file);
    console.log(url);
    video.src = url;
    video.load();
    video.onloadeddata = function() {
        video.play();
    }
}

//method 2:using video url

async  display(){
  var video = document.getElementsByTagName('video')[0];
  let blob = await fetch('http://vjs.zencdn.net/v/oceans.mp4').then(r => r.blob());
  var videoUrl= this.makeObjectURL(blob);
  video.src = videoUrl;
  video.load();
  video.onloadeddata = function() {
      video.play();
  }
}   

 makeObjectURL(object) {
  return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
}

}
