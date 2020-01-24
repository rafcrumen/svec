import { Globals} from '../app.globals'
import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'dominio-publico',
  templateUrl: './dominio-publico.component.html'
})
export class DominiopublicoComponent {
  constructor(public globals: Globals) {
 }
ngOnInit() {
  }
}