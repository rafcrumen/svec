import { Component, Inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DominioprivadoComponent } from '../dominios/dominio-privado.component';
import { DominiopublicoComponent } from '../dominios/dominio-publico.component';
import { DBResult } from '../model/basemodel.model'
import  {  UserModel} from "../model/user.model"
import { RegistroUsuarioService } from '../service/registrousuario.service';
import { Globals, CrudActions} from '../app.globals';

@Component({
  selector: 'signup',
  templateUrl: './registrousuario.template.html',
})
export class RegistroUsuarioComponent implements OnInit{
  title: string;
  modelo: DBResult;
  registrousuario: UserModel;
  isEdit:boolean = false;
  isFiltered:boolean = false;
  accion:string = "Agregar";
  isUserNameValid=false;
  isASubdominioValid=false;
  isVSubdominioValid=false;
  showNameInvalid=false;
  showASubdominioInvalid=false;
  showVSubdominioInvalid=false;
  canSave:boolean=false;
  userNotValid:string="";
  subVNovalid :string="";
  subANovalid :string="";
  dominioPrivadoFocus:boolean=false;
  dominioPublicoFocus:boolean=false;
  constructor(public globals: Globals, private router: Router,private service:RegistroUsuarioService) {
    this.title = "Registro de Usuario";    
    this.registrousuario = new UserModel();
 }  
 ngOnInit(){
   this.modelo = new DBResult();
   this.canSave = this.isUserNameValid && this.isVSubdominioValid && this.isASubdominioValid;
 }
  Cancelar(){
        this.router.navigateByUrl("route_home");
  }
  Post(){//form: NgForm
    //this.isEdit=false;
    this.registrousuario.Crud = CrudActions.Insert;
    this.service.post(this.registrousuario).subscribe((data) => {
    if (data && data.rows) {
          this.router.navigate(['route_home']);
   }
  });
  } 
  ValidaUserName(){
    if (this.registrousuario.username != null && this.registrousuario.username.length > 0){
      this.isUserNameValid = true;
      this.userNotValid = this.registrousuario.username ;
      this.service.getByUserName(this.registrousuario.username).subscribe((data) => { 
        alert(data);       
      this.isUserNameValid = !(data && data.rows && data.rows[0] && data.rows[0].username);
      this.canSave = this.isUserNameValid && this.isVSubdominioValid && this.isASubdominioValid;
      this.showNameInvalid = !this.isUserNameValid;
      });
    }
  }
  ValidaSubdonimioA(){
    if (this.validaDominios() && this.registrousuario.subdominioa != null && this.registrousuario.subdominioa.length > 0 ){
      this.service.validaSubdominioa(this.registrousuario.subdominioa, this.registrousuario.username).subscribe((data) => {
          this.isASubdominioValid = !(data && data.rows && data.rows[0] && data.rows[0].usuariogetbyusernameandsubdominioa);
          this.canSave = this.isUserNameValid && this.isVSubdominioValid && this.isASubdominioValid;
          this.showASubdominioInvalid=!this.isASubdominioValid;
          if (this.showASubdominioInvalid) {
            this.subANovalid = "Subdominio " + this.registrousuario.subdominioa + " ya Existe.";
          }
        });
    }
  }
  ValidaSubdonimioV(){
    if (this.validaDominios() && this.registrousuario.subdominiov != null && this.registrousuario.subdominiov.length > 0){
      this.service.validaSubdominiov(this.registrousuario.subdominiov, this.registrousuario.username).subscribe((data) => {
      this.isVSubdominioValid = !(data && data.rows && data.rows[0] && data.rows[0].usuariogetbyusernameandsubdominiov);
      this.showVSubdominioInvalid = !this.isVSubdominioValid;
      this.canSave = this.isUserNameValid && this.isVSubdominioValid && this.isASubdominioValid;
      if (this.showVSubdominioInvalid) {
        this.subVNovalid = "Subdominio " + this.registrousuario.subdominiov + " ya Existe.";
      }
      });
    }
  }
  validaDominios(): boolean {
    let result = true;
    result = (this.registrousuario.subdominiov != null && this.registrousuario.subdominioa != null) ?
              this.registrousuario.subdominiov.trim() != this.registrousuario.subdominioa.trim() : true;
     if (!result) 
     {
       this.showASubdominioInvalid = true;
       this.showVSubdominioInvalid = true;
       this.subVNovalid = this.registrousuario.subdominiov + " Subdominio Público es Igual a " +  this.registrousuario.subdominioa  + " Subdominio Privado";
       this.subANovalid = this.registrousuario.subdominioa + " Subdominio Privado es Igual a " +  this.registrousuario.subdominiov  + " Subdominio Público";
     }
     return result;
  }

}