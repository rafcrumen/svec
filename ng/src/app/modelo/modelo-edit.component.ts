import { Component, EventEmitter, Inject, OnInit, Input, Output } from '@angular/core';
import { Router } from "@angular/router";
import  { ModeloModel } from "../model/modelo.model";
import { ModeloService } from '../service/modelo.service';
import { DBResult } from '../model/basemodel.model';
import { Globals, CrudActions} from '../app.globals'

@Component({
  selector: 'modelo-edit',
  templateUrl: './modelo-edit.component.html'
})
export class ModeloEditComponent implements OnInit{
  @Input() id:number;
  @Input() accion:string;
  @Input() title:string;
  @Input() crud:number;
  @Output() onChanged: EventEmitter<boolean>;
  modelo: DBResult;
  model: ModeloModel;
  currentView:number=1;
  constructor(private service:ModeloService, public globals: Globals, private router: Router){
    this.onChanged = new EventEmitter<boolean>();
   }  
   ngOnInit(){
    this.model = new  ModeloModel();
     if (this.id && this.id > 0)
     {
        this.GetById();     
     }
    //this.getById();
  }
  Cancelar(){    
    this.onChanged.emit(false);
  }
  GetById(){
    this.model.crud = CrudActions.SelectById; 
    this.service.getById(this.id).subscribe(resultado => 
      {
        this.modelo= resultado;
        if (resultado && resultado.rows)
        {
          this.model = resultado.rows[0];
        }
      });
  }
  Post(){
    this.model.crud = CrudActions.Insert; 
    this.model.iduser = this.globals.applicationUser.id;
    this.service.post(this.model).subscribe((data) => {
        this.modelo = data;
        this.onChanged.emit(true);
    });
  }
  Put(){
        this.model.crud = CrudActions.Update;
        //this.model.iduser = this.globals.applicationUser.id;
        this.service.put(this.model).subscribe((data) => {
        this.modelo = data;
        this.onChanged.emit(true);
    });
  }
}
