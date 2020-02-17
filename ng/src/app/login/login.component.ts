import { FormsModule }   from '@angular/forms';
import { Component,  EventEmitter, Inject, OnInit, Input, Output } from '@angular/core';
import { Router } from "@angular/router";
import { UrlArgs } from '../urlargs/urlargs';
import {  UserLoginModel, LoginModel } from '../model/userlogin.model';
import  {  UserModel} from "../model/user.model"
import { DBResult } from '../model/basemodel.model'
import { LoginService } from '../service/login.service';
import { Globals } from '../app.globals'
import { Result } from '../VModel/Result';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.template.html',
})
export class LoginComponent implements OnInit{
  @Input() token:string;
  @Input() userId:number;
  @Output() onLoginSuccess: EventEmitter<boolean>;
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
  this.onLoginSuccess = new EventEmitter<boolean>();
  }  
   ngOnInit(){
     this.globals.applicationLoginResult = new Result();
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
            this.globals.applicationLoginResult.isSucceded = true;
            this.globals.applicationLoginResult.Id = data.id;
            this.globals.applicationLoginResult.Token = data.Token;

            this.globals.applicationHttpParams = new HttpParams()
            .set('toke',data.Token)
            .set('userid', data.id.toString());
            //this.router.navigate(['route_home'], { queryParams: { token: this._result.Token, userid: this._result.userId} });
            let _urlargs = new UrlArgs()
            _urlargs.navegar(this.globals, this.router, "route_home");
            this.onLoginSuccess.emit(true);
            //this.router.navigate(['route_home']);
      } else {
        this.isDataValid = false;
        }
     });
  }
}
