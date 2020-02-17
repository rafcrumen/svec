import { Component, EventEmitter, Inject, OnInit, Input, Output,ViewChild  } from '@angular/core';
import { Router } from "@angular/router";
import { UploaderComponent } from '../uploader/uploader.component';
import { FotoService } from '../service/foto.service';
import  { DetalleModel } from "../model/detalle.model";
import { DetalleService } from '../service/detalle.service';
import { FotolistaComponent} from '../fotolista/fotolista.component';
import { DBResult } from '../model/basemodel.model';
import { Globals, CrudActions} from '../app.globals'

@Component({
  selector: 'foto-edit',
  templateUrl: './foto-edit.component.html'
})
export class FotoEditComponent implements OnInit{
  @Input() id:number;
  @Input() idmodelo:number;
  @Input() accion:string;
  @Input() title:string;
  @Input() crud:number;
  @Output() onChanged: EventEmitter<boolean>;
  @ViewChild(FotolistaComponent) fotolista: FotolistaComponent;
  modelo: DBResult;
  model: DetalleModel;
  currentView:number=1;
  viewUploader:boolean=false;
  selectedFile:File=null;
  changeImage:boolean=true;
  constructor(private service:DetalleService, private fotoservice:FotoService, public globals: Globals, private router: Router){
    this.onChanged = new EventEmitter<boolean>();
   }  
   ngOnInit(){
  
    this.model = new  DetalleModel();
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
        //this.modelo= resultado;
        if (resultado)
        {
          this.model = resultado;
        }
      });
  }
  Post(){
    this.model.crud = CrudActions.Insert; 
    this.model.idmodelo = this.idmodelo;
    this.service.post(this.model).subscribe((data) => {
        this.model = data;
        this.onChanged.emit(true);
    });
  }
  Put(){
        this.model.crud = CrudActions.Update;
        this.service.put(this.model).subscribe((data) => {
        this.model = data;
        this.onChanged.emit(true);
    });
  }
  onFileSelected(event){
    this.selectedFile= <File>event.target.files[0];
    this.currentView=2;
}
onUpload(){
    if(this.selectedFile){
        const fd = new FormData();
        fd.append("foto", this.selectedFile,this.selectedFile.name);
        this.fotoservice.post(fd,  this.id.toString(),this.idmodelo.toString(), this.selectedFile.name).subscribe((data) => {
          this.currentView=1;
          if (this.fotolista)
            this.fotolista.GetAllData();
        });        
    }
    }  
}
