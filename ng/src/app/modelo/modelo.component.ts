
import { forkJoin } from "rxjs";
import { FormControl } from "@angular/forms";
import { EventEmitter, Pipe, PipeTransform } from '@angular/core';
import {  Router } from "@angular/router";
import { Component, Inject, OnInit } from '@angular/core';
import { FilterListPipe } from '../pipes/filter.list.pipe';
import { DBResult } from '../model/basemodel.model';
import { ModeloModel } from '../model/modelo.model';
import { DetalleModel } from '../model/detalle.model';
import { ModeloService } from '../service/modelo.service';
import { DetalleService } from '../service/detalle.service';
import { ModeloEditComponent } from './modelo-edit.component';
import { DetalleEditComponent } from '../detalle/detalle-edit.component';
import { Globals, CrudActions} from '../app.globals';
import { environment } from '../../environments/environment';

const modificarmodelo = "Modificar Modelo";
const editar = "Editar";
const editarmodelo = "Editar Modelo";
const titlemodelos ="Modelos";
@Component({
  selector: 'modelo',
  templateUrl: './modelo.component.html',
})
export class ModeloComponent {
  id: number;
  title: string;
  model: DBResult;
  modelo: ModeloModel;
  modelos: ModeloModel[];
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
  constructor(private dataService:ModeloService,private detalleService: DetalleService, 
   private router: Router, public globals: Globals) {
    this.title = titlemodelos;    
    //this.onTextChange = new EventEmitter<Array<ClasificacionModel>>();    
 }  
ngOnInit() {
  this.currentState = 0;
  this.idmodelo =0;  
  this.GetAllData();
}
GetAllData(){
  this.dataService.getByIdUser(this.globals.applicationUser.id).subscribe((data) => {
    this.model = data;
    if (data && data.rows && data.rows.length > 0){
      this.modelos = data.rows;
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
    this.title="Agregar Modelo";
  }
  Edit(pid:number){
      this.currentState = 1;   
      this.title = modificarmodelo;
      this.action = CrudActions.Update;
      this.id = pid;
      this.accion= editar;
    }
  Detail(pid:number){
      this.currentState = 2;   
      this.id = pid;
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
}