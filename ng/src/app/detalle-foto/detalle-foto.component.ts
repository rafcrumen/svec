import { Component, EventEmitter,OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input,Output,HostListener } from '@angular/core';
import {interval} from 'rxjs/internal/observable/interval';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FotoModel } from '../model/foto.model';
import {  FotoDetalleModel } from '../model/foto-detalle.model';
import { Globals, CrudActions} from '../app.globals';
import { environment } from '../../environments/environment';
import { DetalleModel } from '../model/detalle.model';
@Component({
  selector: 'detalle-foto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detalle-foto.component.html',
  styleUrls: ['./detalle-foto.component.css']
})
export class DetalleFotoComponent implements OnInit {
  //@Input() iddetalle:number;
  @Input() dir:string;
  @Input() iduser:number;
  @Input() lista:Array<FotoModel>;
  @Input() changeImage:boolean;
  @Input() indexDetail:number;
  @Input() detalle:DetalleModel;
  @Output() onChanged: EventEmitter<number>;
  public model:FotoDetalleModel;  
  imageName: string;
  nImage:number=0;
  speed:number;
  myInterval:any;
  suscrub:any;
   constructor(public globals: Globals,
    private changedetector: ChangeDetectorRef,fb: FormBuilder){
    this.onChanged = new EventEmitter<number>();
    this.speed=2000;
    }
   ngOnInit(){
    let innerHeight = window.innerHeight;
    let imageHeight = window.innerHeight * .75;
    document.documentElement.style.setProperty('--maxInnerHeight', `${innerHeight}px`);        
    document.documentElement.style.setProperty('--imageHeight', `${imageHeight}px`);        
    if (this.lista.length ==0) {
      this.nextDetail();
    }
    interval(this.speed).subscribe(() => {  
      this.moveImage();
    });    
  }
moveImage(){
  if (this.changeImage){
    this.changedetector.markForCheck();
    this.changedetector.detectChanges();
    if (this.lista.length >0) {
        if (this.nImage < this.lista.length) {          
              this.nImage++;
              //this.setImage();//this.imageName=this.dir + this.lista[this.nImage].foto //"../assets/image/" + this.nImage + ".jpg";
            }
        else { 
          this.nextDetail();
      }         
    } else {
      this.nextDetail();
    }    
  }
}
nextDetail(){
  this.nImage=0;
  console.log("next detail");
  this.onChanged.emit(this.indexDetail);
  }
  goOut(){
    this.changeImage=false;
    this.onChanged.emit(-1);
  }  
}