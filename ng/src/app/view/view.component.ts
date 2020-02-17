
import { forkJoin } from "rxjs";
import { FormControl } from "@angular/forms";
import { EventEmitter, Pipe, PipeTransform } from '@angular/core';
import {  Router } from "@angular/router";
import { Component, Inject, OnInit } from '@angular/core';
import { FilterListPipe } from '../pipes/filter.list.pipe';
import { DBResult } from '../model/basemodel.model';
import { ModeloModel } from '../model/modelo.model';
import { DetalleModel } from '../model/detalle.model';
import { ViewService } from '../service/view.service';
import { DetalleService } from '../service/detalle.service';
import { Globals, CrudActions} from '../app.globals';
import { ViewModelo } from '../VModel/viewModelo';
import { environment } from '../../environments/environment';
import { UrlArgs } from '../urlargs/urlargs';
import { HomeButtonComponent } from '../homebutton/home-button.component';
import { DetalleFotoComponent } from '../detalle-foto/detalle-foto.component';

const modificarmodelo = "Modificar Modelo";
const editar = "Editar";
const editarmodelo = "Editar Modelo";
const titlemodelos ="Modelos";
@Component({
  selector: 'view-component',
  templateUrl: './view.component.html',
})
export class ViewComponent {
  id: number;
  title: string;
  model: DBResult;
  modelo: ModeloModel;
  modelos: ViewModelo[];
  detalles: DetalleModel[];
  idmodelo:number;
  currentState:number;
  accion:string = "Agregar";
  action:number;
  //onTextChange: EventEmitter<Array<ClasificacionModel>>;
  texto: string;
  Crud:CrudActions;  
  tareaAccion:string ="Agregar"
  tareaIsEdit:boolean = false;
  dir:string;
  currentIndex:number;
  constructor(private dataService:ViewService,private detalleService: DetalleService, 
   private router: Router, public globals: Globals) {
    this.title = titlemodelos;    
    //this.onTextChange = new EventEmitter<Array<ClasificacionModel>>();    
 }  
ngOnInit() {
  this.currentState = 0;
  this.idmodelo =0;
  this.currentIndex = 0;  
  this.dir = environment.endpointr  + environment.photofolder;// + this.globals.applicationLoginResult.Id + '/' + this.iddetalle + '/';
  this.GetAllData();
}
GetAllData(){
  console.log("voy view controller");
  this.dataService.getAll().subscribe((data) => {
    console.log("volvi de view controller");
      console.log(data);
    if (data ){
      console.log(data);
      this.modelos = data;
      this.idmodelo = this.modelos[0].idmodelo;
    }
  });
}
  Detail(pid:number){
      this.currentState = 2;   
      this.id = pid;
  }
changeModelo(pindex:number){
  this.currentIndex = pindex;
  this.idmodelo = this.modelos[this.currentIndex].idmodelo;
}
}