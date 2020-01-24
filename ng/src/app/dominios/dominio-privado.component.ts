import { Globals} from '../app.globals'
import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'dominio-privado',
  templateUrl: './dominio-privado.component.html'
})
export class DominioprivadoComponent {
  constructor(public globals: Globals) {
 }
ngOnInit() {
  }
}