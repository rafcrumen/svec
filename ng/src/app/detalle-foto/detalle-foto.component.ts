import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input,HostListener } from '@angular/core';
import {interval} from 'rxjs/internal/observable/interval';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FotoModel } from '../model/foto.model';
import { FotolistaService } from '../service/fotolista.service';
import { Globals, CrudActions} from '../app.globals';
import { environment } from '../../environments/environment';
@Component({
  selector: 'detalle-foto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detalle-foto.component.html'  
})
export class DetalleFotoComponent implements OnInit {
  @Input() iddetalle:number;
  @Input() idmodelo:number;
  @Input() changeImage:boolean;
  lista : Array<FotoModel>;
  imageName: string;
  nImage:number=-1;
  dir:string;
  speed:number;
  myInterval:any;
  suscrub:any;
   constructor(private dataService:FotolistaService, public globals: Globals,
    private changedetector: ChangeDetectorRef,fb: FormBuilder){
    this.lista = new Array<FotoModel>();
    this.speed=2000;
    }
   ngOnInit(){
    if (this.iddetalle > 0){    
        //this.dir = environment.endpoint + '/' + this.globals.applicationUser.subdominioa.trim() + '/' + this.idmodelo + '/';
        this.dir = environment.endpoint + '/' + environment.photofolder + '/' + this.globals.applicationLoginResult.Id + '/' + this.iddetalle + '/';
        this.GetAllData();
    }
    interval(this.speed).subscribe(() => {  
      this.moveImage();
    });    
  }
GetAllData(){
this.dataService.getByIdDetalle(this.iddetalle).subscribe((data) => {
  if (data){
    this.lista = data;
    this.moveImage();
  }
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
    if (this.nImage < this.lista.length ){
        this.imageName=this.lista[this.nImage].foto;//this.dir + 
    }
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