import { FormControl } from "@angular/forms";
import { Component, Inject, EventEmitter, OnInit, Input, Output, Pipe, PipeTransform } from '@angular/core';
import {  Router } from "@angular/router";
import { FilterListPipe } from '../pipes/filter.list.pipe';
import { DBResult } from '../model/basemodel.model';
import { FotoModel } from '../model/foto.model';
import { FotolistaService } from '../service/fotolista.service';
import { Observable,  of } from 'rxjs';
import { forkJoin } from "rxjs";
import { GirarComponent } from '../girar/girar.component';
//import { ModeloEditComponent } from './detalle-edit.component';
import { Globals, CrudActions} from '../app.globals';
import { environment } from '../../environments/environment';
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDrag,
  transferArrayItem
} from '@angular/cdk/drag-drop';

const modificarmodelo = "Modificar Foto";
const editar = "Editar";
const editarmodelo = "Editar Foto";
const titlemodelos ="*Fotos";
@Component({
  selector: 'foto-list',
  templateUrl: './fotolista-component.html',
  styleUrls: ['fotolista-component.css']
})
export class FotolistaComponent implements OnInit{
@Input() iddetalle:number;
@Input() idmodelo:number;
@Output() onChanged: EventEmitter<boolean>;
  id:number;
  title: string;
  model: DBResult;
  modelo: FotoModel;
  lista: FotoModel[];
  ubicacion: number[]
  currentState:number;
  accion:string = "Agregar";
  action:number;
  posicion:number;
  //onTextChange: EventEmitter<Array<DetalleModel>>;
  texto: string;
  Crud:CrudActions;  
  tareaAccion:string ="Agregar"
  tareaIsEdit:boolean = false;
  dir:string;
  constructor(private dataService:FotolistaService, private router: Router, public globals: Globals) {
   this.title = titlemodelos;    
   this.onChanged = new EventEmitter<boolean>();    
 }  
ngOnInit() {
  this.dir = environment.endpoint + '/' + environment.photofolder + '/' + this.globals.applicationLoginResult.Id + '/' + this.iddetalle + '/';
  this.id=0;
  this.currentState = 0;
  this.lista = new Array<FotoModel>();
  if (this.iddetalle > 0)    
    this.GetAllData();
}
GetAllData(){
  this.dataService.getByIdDetalle(this.iddetalle).subscribe((data) => {
    if (data){
      this.lista = data;
      this.ubicacion = new Array();
      this.posicion = 0; 
      this.lista.forEach(element => {
        this.ubicacion[this.posicion++] = element.id;
      });
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
  Detail(){
      this.currentState = 2;   
      this.accion= editarmodelo;
      this.action = CrudActions.Update;
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
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lista, event.previousIndex, event.currentIndex);    
    let _self = this;
    let observableBatch = [];
    let _posicion = 0;
    this.lista.forEach((foto) => {
        foto.posicion =_posicion++;
      observableBatch.push(this.dataService.put(foto).subscribe((data) => {}))});
     forkJoin(observableBatch);  
  }
}