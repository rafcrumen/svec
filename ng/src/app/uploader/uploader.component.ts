import { Component, EventEmitter, Inject, OnInit, Input, Output } from '@angular/core';
import { FotoService } from '../service/foto.service';
import { Globals, CrudActions} from '../app.globals'

@Component({
  selector: 'file-uploader',
  templateUrl: './uploader.component.html'
})
export class UploaderComponent {
    @Input() folder:string;
    selectedFile:File=null;
    buttonText:string;
    constructor(private service:FotoService,public globals: Globals){
        this.buttonText="Seleccionar Archivo";
    }
    onFileSelected(event){
        this.selectedFile= <File>event.target.files[0];
        this.buttonText="Guardar Archivo";
    }
    onUpload(){
        if(this.selectedFile){
            const fd = new FormData();
            fd.append("foto", this.selectedFile,'folder/' + this.selectedFile.name);
            // this.service.post(fd, this.folder).subscribe((data) => {
            //     this.buttonText="Seleccionar Archivo";            
            // });        
        }

    }
}