import { ActivatedRoute, Router } from "@angular/router";
import { Component, Inject,Input, OnInit } from '@angular/core';
import { Globals} from '../app.globals'
import { UserModel } from '../model/user.model';
import { Result } from '../Vmodel/Result';
import { UrlArgs } from '../urlargs/urlargs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() token:string;
  @Input() userId:number;
  @Input() isloginsuccess:boolean;
  @Input() loginResult:Result;
  public urlArgs: UrlArgs = new UrlArgs();
opciones: string[];
  currentuser:  UserModel;
      constructor(
        public globals: Globals,
        private route: ActivatedRoute,
        public router: Router) {
         }

  ngOnInit() {
  }
navegar(_target: string )
  {
    var e = document.getElementById("myNavbar");
    e.classList.remove('in');
    //this.router.navigate([_target]);
    this.urlArgs.navegar(this.globals, this.router, _target);
  }
logout( )
  {
    this.globals.applicationUser =null;
    this.globals.applicationLoginResult =null;
    this.navegar("route_home");
  }
}
