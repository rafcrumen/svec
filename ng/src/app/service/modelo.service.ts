import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { DBResult } from '../model/basemodel.model'
import { ModeloModel } from '../model/modelo.model';
import { HandleError }  from '../error/handleError'
import { environment } from '../../environments/environment';
import { Globals } from '../app.globals';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({ providedIn: 'root' })
  export class ModeloService {
    private endpoint = environment.endpoint + 'modelo' + "?token="+this.globals.applicationLoginResult.Token+"&userid="+this.globals.applicationLoginResult.Id;
    herror: HandleError;
  
    constructor(
      private http: HttpClient,
      private messageService: MessageService,
      public globals: Globals) { 
      this.herror = new HandleError(messageService);
      }
      getByIdUser ( ): Observable<ModeloModel[]>{
        console.log(this.endpoint)
        return this.http.get<ModeloModel[]>(this.endpoint)
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }
    
      getById (id: number ): Observable<ModeloModel>{
        console.log(this.endpoint +  "&id=" + id);
        return this.http.get<ModeloModel>(this.endpoint +  "&id=" + id)        
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }
      post(data:any): Observable<ModeloModel>{
      return this.http.post<ModeloModel>(this.endpoint,  data)
      .pipe(
        catchError(this.herror.handleError('modelo Post', null)));
      }
    
      put(data:any): Observable<DBResult>{
        return this.http.put<DBResult>(this.endpoint,  data)
        .pipe(
          catchError(this.herror.handleError('modelo Put', null)));
        }
  }
  