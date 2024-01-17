import { AfterContentInit, AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';
import { delay, map } from 'rxjs/operators';



@Component({
  selector: 'app-image-loading',
  templateUrl: './image-loading.component.html',
  styleUrls: ['./image-loading.component.css']
})
export class ImageLoadingComponent implements OnInit,AfterViewInit {

  @ViewChildren('imgElem') imgElem1:QueryList<any>;
  
  imgData:any = []

  constructor(private userService:Service1Service,
    private _service2:Service2Service) {
    this.userService.HeaderDisplay.emit(true);
 }

  ngOnInit() {
    this.getData()

    
    
  }

  ngAfterViewInit(): void {
    
    var logo = document.getElementById('abc');

    logo.onload = function () {
      // console.log(logo, "img loaded")   
      
  };
  }

  getData(){
    this._service2.get("https://reqres.in/api/users?page=2").pipe(map((res:any)=>{
      
    for(let a of res.data){
      a['avatar']="https://socialmediaxyz555.000webhostapp.com/assets/images/magnetic-hill-mountain-blue-sky-road-way-leh-ladakh-india.jpg"
    }
    
    return res;
  })).subscribe((res:any)=>{
    this.imgData = res.data;

    setTimeout(() => {
      var allImg = this.imgElem1.toArray()
      console.log(allImg,"ssssssss");

      for(let a of allImg){
        
        console.log(a,"iiiiii")
        
        a.onload = ()=> {
            console.log(a, "img loaded")  
            alert("rr") 
            a.nextElementSibling.classList.add("d-none");
        };
      }
    }, 1000);
  })
  }

  

}
