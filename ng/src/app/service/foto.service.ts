import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { DBResult } from '../model/basemodel.model'
import { HandleError }  from '../error/handleError'
import { environment } from '../../environments/environment';
import { Globals } from '../app.globals';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable({ providedIn: 'root' })
  export class FotoService {
    private endpoint = environment.endpoint + 'foto' + "?token="+this.globals.applicationLoginResult.Token+"&userid="+this.globals.applicationLoginResult.Id;
    herror: HandleError;
  
    constructor(
      private http: HttpClient,
      private messageService: MessageService,
      public globals: Globals) { 
      this.herror = new HandleError(messageService);
      }    
    getById(id: number ): Observable<DBResult>{
        return this.http.get<DBResult>(this.endpoint + "&id=" + id)
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }
    getByIdDetalle(id: number ): Observable<DBResult>{
        return this.http.get<DBResult>(this.endpoint + 'detalle/' + id)
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }
    post(data:any,  iddetalle:string, idmodelo:string, filename:string): Observable<DBResult>{
      //'path': folder, 
      const httpOptions = {
            headers: new HttpHeaders({
              'filename': filename,
              'iddetalle': iddetalle,
              'idmodelo': idmodelo,
              'token': this.globals.applicationLoginResult.Token,
              'userid': this.globals.applicationLoginResult.Id.toString()})
          };
      return this.http.post<DBResult>(environment.endpoint + 'upload',  data, httpOptions)//, + "?token="++"&userid="+this.globals.applicationLoginResult.Id 
      .pipe(
        catchError(this.herror.handleError('modelo Post', null)));
      }
    
      put(data:any): Observable<DBResult>{
        return this.http.put<DBResult>(this.endpoint,  data)
        .pipe(
          catchError(this.herror.handleError('modelo Put', null)));
        }
  }
  