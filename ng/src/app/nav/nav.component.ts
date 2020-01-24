import { ActivatedRoute, Router } from "@angular/router";
import { Component, Inject, OnInit } from '@angular/core';
import { Globals} from '../app.globals'
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
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
    this.router.navigate([_target]);
  }
logout( )
  {
    this.globals.applicationUser =null;
    this.router.navigate(["route_home"]);
  }
}
