import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { DBResult } from '../model/basemodel.model'
import { ModeloModel } from '../model/modelo.model';
import { ViewModelo } from '../VModel/viewModelo';
import { HandleError }  from '../error/handleError'
import { environment } from '../../environments/environment';
import { Globals } from '../app.globals';
import {  FotoDetalleModel } from '../model/foto-detalle.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({ providedIn: 'root' })
  export class ViewService {
    private endpoint = environment.endpoint + 'view';
    herror: HandleError;
  
    constructor(
      private http: HttpClient,
      private messageService: MessageService,
      public globals: Globals) { 
      this.herror = new HandleError(messageService);
      }
      getAll ( ): Observable<any[]>{
        console.log(this.endpoint)
        return this.http.get<any[]>(this.endpoint)
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }
    getByModel (idmodelo:number ): Observable<FotoDetalleModel>{
      console.log(this.endpoint)
      return this.http.get<FotoDetalleModel>(this.endpoint + "?idmodelo=" + idmodelo)
      .pipe(
        tap(pitos => this.herror.log('idn')),
        catchError(this.herror.handleError('idn1', null))
      );
  }}
  