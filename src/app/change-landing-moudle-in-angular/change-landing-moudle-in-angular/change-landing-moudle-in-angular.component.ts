import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Service1Service } from 'src/app/services/Service1/service1.service';

@Component({
  selector: 'app-change-landing-moudle-in-angular',
  templateUrl: './change-landing-moudle-in-angular.component.html',
  styleUrls: ['./change-landing-moudle-in-angular.component.css']
})
export class ChangeLandingMoudleInAngularComponent implements OnInit {

  unsafeContent: string = '<script>setTimeout(()=>{alert("Hello, world!");},3000)</script>'; // User input
  sanitizedContent: SafeHtml;
  item:boolean = true;

  color:string = "green"
  
  constructor(private userService:Service1Service,
    private sanitizer: DomSanitizer
  ) {
      this.userService.HeaderDisplay.emit(true);
      this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.unsafeContent);
   }

  ngOnInit() {
  }

}
