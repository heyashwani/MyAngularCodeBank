import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Lightbox } from 'ngx-lightbox';
import { LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  _albums:any = [];
  constructor(private _lightbox: Lightbox,private userService:Service1Service,private _lightboxConfig: LightboxConfig) {
     this.userService.HeaderDisplay.emit(true);

     // custumization
     _lightboxConfig.fadeDuration = 1;
     _lightboxConfig.showRotate = true;
     _lightboxConfig.showImageNumberLabel = true;
     
     

    for (let i = 1; i <= 4; i++) {
      const src = 'assets/images/thumb' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/images/thumb' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }


    

  ngOnInit() {
  }

}
