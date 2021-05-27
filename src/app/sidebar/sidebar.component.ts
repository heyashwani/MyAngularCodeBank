import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'; 
import { Service2Service } from '../services/Service2/service2.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuId:number;
  name:any;


  constructor(private userService:Service2Service,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.name = this.userService.xyz();
  }
  navPage(abc)
  {
    this.menuId = abc.id;
    this.router.navigate([abc.url1],{relativeTo:this.route});
  }

}
