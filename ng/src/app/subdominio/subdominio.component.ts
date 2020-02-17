import { FormsModule }   from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  SubdominioModel } from '../model/subdominio.model';
import { DBResult } from '../model/basemodel.model'
import { SubdominioService } from '../service/subdominio.service';
import { Globals } from '../app.globals'
import { UrlArgs } from '../urlargs/urlargs';

@Component({
  selector: 'subdominio',
  templateUrl: './subdominio.component.html',
})
export class SubdominioComponent implements OnInit{
  title: string;
  modelo: DBResult;
  subdominiomodel: SubdominioModel;
  isEdit:boolean = false;
  isFiltered:boolean = false;
  isDataValid:boolean = true;
  isDataSaved:boolean = false;
  strResult:string = "";
  accion:string = "Agregar";
  public urlArgs: UrlArgs = new UrlArgs();
  constructor(private service:SubdominioService, public globals: Globals, private router: Router)
  {
  this.title = "Subdominio";    
   }  
   ngOnInit(){
    this.subdominiomodel = new SubdominioModel();
    //this.subdominiomodel.Id = this.globals.applicationLoginResult.Id;
    this.subdominiomodel.Subdominiov = "";
    this.subdominiomodel.Subdominioa = "";
    this.getByUserName()
  }
  getByUserName(){
    this.service.getByUserId().subscribe((data) => {
      console.log(data);
        if (data) {
               this.subdominiomodel.Subdominiov = data.subdominiov; 
               this.subdominiomodel.Subdominioa = data.subdominioa; 
     }
    });
  }
  Cancelar(){
    this.urlArgs.navegar(this.globals, this.router, "route_home");
  }
  Post(){
      this.isEdit=false;
       this.service.post(this.subdominiomodel).subscribe((data) => {
        //  this.modelo = data;
        //  if (this.modelo && this.modelo.rows) {
        //     if (this.modelo.rows[0] && this.modelo.rows[0].message) {
        //         this.isDataValid = true;
        //         this.isDataSaved= true; 
        //         this.strResult = this.modelo.rows[0].message;
        //     } else {
        //       this.strResult = this.modelo.rows[0].message;
        //       this.isDataValid = false;
        //       this.isDataSaved= false; 
        //     }
        //   }
          this.Cancelar();
        });
  }
}
