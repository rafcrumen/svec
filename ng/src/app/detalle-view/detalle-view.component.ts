import { Component, EventEmitter,OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input,Output,HostListener } from '@angular/core';
import {interval} from 'rxjs/internal/observable/interval';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FotoModel } from '../model/foto.model';
import {  FotoDetalleModel } from '../model/foto-detalle.model';
import {  ViewModelo } from '../vmodel/viewModelo';
import { ViewService } from '../service/view.service';
import { Globals, CrudActions} from '../app.globals';
import { environment } from '../../environments/environment';
import { DetalleModel } from '../model/detalle.model';
@Component({
  selector: 'detalle-view',
  templateUrl: './detalle-view.component.html'
})
export class DetalleViewComponent implements OnInit {
  //@Input() iddetalle:number;
  @Input() dir:string;
  @Input() iduser:number;
  @Input() idmodelo:number;
  @Input() changeImage:boolean;
  @Output() onChanged: EventEmitter<number>;
  public model:FotoDetalleModel;
  public detalleModelo:DetalleModel;
  lista : Array<FotoModel>;
  detalles : Array<DetalleModel>;
  imageName: string;
  currentIndex:number=-1;
  speed:number;
  myInterval:any;
  suscrub:any;
   constructor(private dataService:ViewService, public globals: Globals){
      this.onChanged = new EventEmitter<number>();
    }
   ngOnInit(){
    this.detalles = new Array<DetalleModel>();
    this.currentIndex = 0;
    this.GetAllData();
  }
GetAllData(){
this.dataService.getByModel(this.idmodelo).subscribe((data) => {
  if (data){
    this.model = data;
    this.detalles = data.detalle;
    console.log(this.detalles[this.currentIndex]);
    this.changeImage = true;
    this.setCurrentLista();
  }
  });
}
goOut(){
  this.changeImage=false;
  this.onChanged.emit(-1);
}
nextDetail(index:number){
    if (index == -1){
        this.goOut();
    }
    if (index < this.detalles.length -1){
        this.currentIndex++; 
    } else {
        this.currentIndex = 0;
    }
    this.setCurrentLista()
}
setCurrentLista(){
    this.changeImage=true;
    this.detalleModelo = this.detalles[this.currentIndex];
    console.log("CurrentIndex " + this.currentIndex + " Detalle ID " + this.detalles[this.currentIndex].id)
    this.lista = this.model.fotos.filter(foto => foto.iddetalle == this.detalles[this.currentIndex].id);
}
}