import { Component,EventEmitter, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input,Output,HostListener } from '@angular/core';
import {interval} from 'rxjs/internal/observable/interval';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FotoModel } from '../model/foto.model';
import { FotolistaService } from '../service/fotolista.service';
import { Globals, CrudActions} from '../app.globals';
import { environment } from '../../environments/environment';
import { ViewModelo } from '../VModel/viewModelo';
@Component({
  selector: 'modelo-foto', //  
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modelo-foto.component.html',
  styleUrls: ['modelo-foto.component.css']    
})
export class ModeloFotoComponent implements OnInit {
  //@Input() iddetalle:number;
  //@Input() idmodelo:number;
  @Input() dir:string;
  @Input() changeImage:boolean;
  @Input() lista: ViewModelo[];
  @Output() onChanged: EventEmitter<number>;
  //lista : Array<FotoModel>;
  imageName: string;
  nImage:number=-1;
  //dir:string;
  speed:number;
  myInterval:any;
  suscrub:any;
   constructor(public globals: Globals,
    private changedetector: ChangeDetectorRef,fb: FormBuilder){
    this.onChanged = new EventEmitter<number>();
    this.speed=5000;
    }
   ngOnInit(){
    let innerHeight = window.innerHeight;
    let imageHeight = window.innerHeight * .75;
    document.documentElement.style.setProperty('--maxInnerHeight', `${innerHeight}px`);        
    document.documentElement.style.setProperty('--imageHeight', `${imageHeight}px`);        
    this.moveImage();
    interval(this.speed).subscribe(() => {  
      this.moveImage();
    });    
  }
moveImage(){
  if (this.changeImage){
    this.changedetector.markForCheck();
    this.changedetector.detectChanges();
    if (this.lista.length >0) {
        if (this.nImage < this.lista.length -1 ) {          
              this.nImage++;
            }
            else { 
              this.nImage=0;
      }         
      this.setImage();//this.imageName=this.dir + this.lista[this.nImage].foto //"../assets/image/" + this.nImage + ".jpg";
    }     
  }
}
setImage()
{
    console.log(this.lista[this.nImage].precio + " " + this.lista[this.nImage].vecindario);
    if (this.nImage < this.lista.length ){
        this.imageName=this.lista[this.nImage].foto;//this.dir + 
    }
}
changeModelo(pindex:number){
    this.changeImage=false;
    this.onChanged.emit(pindex);
}
  
// changeSpeed(){
//   this.changedetector.markForCheck();
//   this.changedetector.detectChanges();
//  clearInterval(this.myInterval);
//     this.suscrub.unsuscribe();
//     this.myInterval  = interval(20000);
//     this.suscrub = this.myInterval.subscribe(() => {  
//       this.moveImage();
//     });
//   }
}