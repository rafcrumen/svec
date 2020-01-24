import { Component, Inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Globals } from '../app.globals'
import {  MailModel } from '../model/mail.model';
import { MailService } from '../service/mail.service';

@Component({
    selector: 'signup',
    templateUrl: './mail.component.html',
  })
  export class MailComponent {
    title: string;
  mail: MailModel;
  canSend:boolean=true;
  constructor(private service:MailService, public globals: Globals, private router: Router)
 {
    this.mail = new MailModel("","","");
 }  
Post(){//form: NgForm
    console.log('Put ran...' + this.mail);
    this.service.post(this.mail).subscribe((data) => {
      this.router.navigateByUrl("route_home");    
  });
  } 
  Cancelar(){
          this.router.navigateByUrl("route_home");
    }  
}