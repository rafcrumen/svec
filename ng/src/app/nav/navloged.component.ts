import { ActivatedRoute,Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navloged',
  templateUrl: './navloged.template.html',
  styleUrls: ['./nav.component.css']
})
export class NavLogedComponent implements OnInit {
  opciones: string[];
      constructor(
       private route: ActivatedRoute,        
        private router: Router) { }

  ngOnInit() {
    
  }
navegar(_target: string )
  {
    var e = document.getElementById("myNavbar");
    e.classList.remove('in');
    this.router.navigate([_target]);
  }

}
