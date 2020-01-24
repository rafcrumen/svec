import { NgForm } from "@angular/forms";
import { Globals} from '../app.globals'
import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'route_home',
  templateUrl: './home.template.html'
})
export class HomeComponent {
  title: string;
  isEdit:boolean = false;
  isFiltered:boolean = false;
  accion:string = "Agregar";
  constructor(public globals: Globals) {
 }
ngOnInit() {
  }
}
