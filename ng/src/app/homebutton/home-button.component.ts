import { Component, Inject, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Globals } from '../app.globals'
import { UrlArgs } from '../urlargs/urlargs';

@Component({
    selector: 'home-button',
    templateUrl: './home-button.component.html',
  })
  export class HomeButtonComponent implements OnInit{
    public urlArgs: UrlArgs = new UrlArgs();
    constructor(public globals: Globals, public router: Router)
    {
     }  
     ngOnInit(){
     }  
  }  