import { forkJoin } from "rxjs";
import { FormControl } from "@angular/forms";
import { Component, Inject, EventEmitter, OnInit, Input, Output, Pipe, PipeTransform } from '@angular/core';
import {  Router } from "@angular/router";
import { FilterListPipe } from '../pipes/filter.list.pipe';
import { DBResult } from '../model/basemodel.model';
import { DetalleModel } from '../model/detalle.model';
import { FotoEditComponent } from '../fotos/foto-edit.component';
import { DetalleService } from '../service/detalle.service';
//import { ModeloEditComponent } from './detalle-edit.component';
import { Globals, CrudActions} from '../app.globals';
import { environment } from '../../environments/environment';

const modificarmodelo = "Modificar Pieza";
const editar = "Editar";
const editarmodelo = "Editar Pieza";
const titlemodelos ="Detalles";
const fotosmodelo = "Fotos";
@Component({
  selector: 'detalle-list',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit{
@Input() idmodelo:number;
@Output() onChanged: EventEmitter<boolean>;
  id:number;
  title: string;
  model: DBResult;
  detalle: DetalleModel;
  detalles: DetalleModel[];
  currentState:number;
  accion:string = "Agregar";
  action:number;
  //onTextChange: EventEmitter<Array<DetalleModel>>;
  texto: string;
  Crud:CrudActions;  
  tareaAccion:string ="Agregar"
  tareaIsEdit:boolean = false;
  constructor(private dataService:DetalleService, private router: Router, public globals: Globals) {
   this.title = titlemodelos;    
   this.onChanged = new EventEmitter<boolean>();    
 }  
ngOnInit() {
  this.id=0;
  this.currentState = 0;
  this.detalles = new Array<DetalleModel>();
  if (this.idmodelo > 0)    
    this.GetAllData();
}
GetAllData(){
  this.dataService.getByIdModelo(this.idmodelo).subscribe((data) => {
    //this.model = data;
    if (data ){
      this.detalles = data;
    }
  });

  //let datalistas = this.dataService.getByIdUser(this.globals.applicationUser.username);
  // let dataclasificacion = this.clasificacionService.getClasificacionesByUserId(this.globals.applicationUser.Id);

  // forkJoin([datalistas, dataclasificacion]).subscribe(results => {
  //   this.modelos = results[0].rows;
  //   this.clasificaciones = results[1].rows;
  // });
}
 Add(){
    this.id=0;
    this.currentState = 1;   
    this.action = CrudActions.Insert;
    this.accion="Agregar";
    this.title="Agregar Detalle"
  }
  Edit(pid:number){
      this.currentState = 1;   
      this.title = modificarmodelo;
      this.action = CrudActions.Update;
      this.accion= editar;
      this.id=pid;
    }
  Fotos(pid:number){
    this.id=pid;
    this.currentState = 2;   
    this.accion= fotosmodelo;
  }  
  Changed(event)
  {
    this.currentState = 0;
    this.title = titlemodelos;
    if (event)
    {
      this.GetAllData();
    }
  }
  Salir(){      
    this.onChanged.emit(false);
  }
}