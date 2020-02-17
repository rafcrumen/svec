import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { DBResult } from '../model/basemodel.model'
import { SubdominioModel } from '../model/subdominio.model'
import { HandleError }  from '../error/handleError';
import { environment } from '../../environments/environment';
import { Globals } from '../app.globals'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SubdominioService {
    private endPoint = environment.endpoint + 'subdominio' + "?token="+this.globals.applicationLoginResult.Token+"&userid="+this.globals.applicationLoginResult.Id;
    herror: HandleError;
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    public globals: Globals) { 
    this.herror = new HandleError(messageService);    
    }
    getByUserId (): Observable<any>{
      console.log(this.endPoint);
        return this.http.get<any>(this.endPoint)
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }

    post(data:any): Observable<DBResult>{
      console.log("modelo post " + this.endPoint);
      return this.http.post<DBResult>(this.endPoint,  data)
      .pipe(
        catchError(this.herror.handleError('Subdominio', null)));
      }   
}