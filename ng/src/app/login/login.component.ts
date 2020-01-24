import { FormsModule }   from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  UserLoginModel, LoginModel } from '../model/userlogin.model';
import  {  UserModel} from "../model/user.model"
import { DBResult } from '../model/basemodel.model'
import { LoginService } from '../service/login.service';
import { Globals } from '../app.globals'

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
})
export class LoginComponent implements OnInit{
  title: string;
  modelo: UserModel;
  loginmodel: UserLoginModel;
  usermodel: UserModel;
  isEdit:boolean = false;
  isFiltered:boolean = false;
  isDataValid:boolean = true;
  accion:string = "Agregar";
  constructor(private service:LoginService, public globals: Globals, private router: Router)
  {
  this.title = "Login";    
   }  
   ngOnInit(){
    this.usermodel = new UserModel();
    this.usermodel.username = "";
    this.usermodel.password = "";
  }

  Cancelar(){
    this.router.navigate(['route_home']);
  }
  Post(){//form: NgForm
      this.isEdit=false;
       this.service.post(this.usermodel).subscribe((data) => {
         this.modelo = data;
         if (this.modelo && this.modelo.id > 0) {
            this.globals.applicationSubdominio = null;
            this.globals.applicationUser= this.modelo;
            console.log(this.globals.applicationUser);
              this.router.navigate(['route_home']);
      } else {
        this.isDataValid = false;
        }
     });
  }
}
