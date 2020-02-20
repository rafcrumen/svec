import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { DBResult } from '../model/basemodel.model'
import { HandleError }  from '../error/handleError'
import { environment } from '../../environments/environment';
import { FotoModel } from '../model/foto.model';
import { Globals } from '../app.globals';
import { HttpParams } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({ providedIn: 'root' })
  export class FotolistaService {
    private endpoint = environment.endpoint + 'fotolista?token='+ this.globals.applicationLoginResult.Token+"&userid="+this.globals.applicationLoginResult.Id;
    herror: HandleError;
  
    constructor(
      private http: HttpClient,
      private messageService: MessageService,
      public globals: Globals) { 
      this.herror = new HandleError(messageService);
      }    
    getById(id: number ): Observable<DBResult>{
        return this.http.get<DBResult>(this.endpoint +  id)
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }
    getByIdDetalle(id: number ): Observable<FotoModel[]>{
      console.log(this.endpoint   + "&id=" + id);
        return this.http.get<FotoModel[]>(this.endpoint + "&id=" + id)
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }
    post(data:any, folder:string, iddetalle:string, filename:string): Observable<DBResult>{
        const httpOptions = {
            headers: new HttpHeaders({
              'path': folder, 
              'filename': filename,
              'iddetalle': iddetalle})
          };        
      return this.http.post<DBResult>(this.endpoint,  data, httpOptions)
      .pipe(
        catchError(this.herror.handleError('modelo Post', null)));
      }    
      put(data:any): Observable<DBResult>{
        return this.http.put<DBResult>(this.endpoint,  data)
        .pipe(
          catchError(this.herror.handleError('modelo Put', null)));
        }
        del(data:FotoModel): Observable<DBResult>{
          const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })         
          };                       
          return this.http.delete<DBResult>(this.endpoint + "&pidFoto=" + data.id + "&pidDetalle="+ data.iddetalle + "&pfoto="+data.foto,  httpOptions)
          .pipe(
            catchError(this.herror.handleError('modelo Put', null)));
          }
    }
  