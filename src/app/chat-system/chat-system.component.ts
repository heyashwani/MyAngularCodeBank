import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Service1Service } from '../services/Service1/service1.service';
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-chat-system',
  templateUrl: './chat-system.component.html',
  styleUrls: ['./chat-system.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatSystemComponent implements OnInit {
  msg: any;

  constructor(private userService:Service1Service,private service2:Service2Service) {
    this.userService.HeaderDisplay.emit(true);
   }

   ngOnInit(): void {
    this.service2.listen('chat-message').subscribe((data:any)=>{
      console.log(data)
      this.msg = data.message


      this.comingInsert(data.message)

      this.scrollToBottom()

    })
  }

  sendMsg(val:any){
    this.service2.emit('chat-message',{
      username:"ashwani",
      message:val
  })
  this.myInsert(val)
  }


  myInsert(val){
    var h = document.getElementById("main");
    
    let mainDiv = document.createElement('article')
    mainDiv.classList.add('send_box')
    let markup = `
      <p>${val}</p>
    `
    mainDiv.innerHTML = markup
    h.appendChild(mainDiv)

    this.scrollToBottom()
    console.log("called")
  }

  comingInsert(val){
    var h = document.getElementById("main");

    let mainDiv = document.createElement('aside')
    mainDiv.classList.add('coming_box')
    let markup = `
      <h3></h3>
      <p>${val}</p>
    `
    mainDiv.innerHTML = markup
    h.appendChild(mainDiv)


    // h.insertAdjacentHTML("afterend", "<aside class='coming_box'><p>"+val+"</p></aside>"); 
    console.log("called")

  }

  scrollToBottom(){
    var h = document.getElementById("main");
    h.scrollTop = h.scrollHeight
  }

}
