import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from '../message.service';
import { DBResult } from '../model/basemodel.model'
import { HandleError }  from '../error/handleError'
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class SubdominioService {
    private endPoint = environment.endpoint + 'subdominio/';
    herror: HandleError;
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { 
    this.herror = new HandleError(messageService);    
    }
    getByUserName (userName: string ): Observable<DBResult>{
        return this.http.get<DBResult>(this.endPoint +  userName)
        .pipe(
          tap(pitos => this.herror.log('idn')),
          catchError(this.herror.handleError('idn1', null))
        );
    }

    post(data:any): Observable<DBResult>{
      return this.http.post<DBResult>(this.endPoint,  data)
      .pipe(
        catchError(this.herror.handleError('Subdominio', null)));
      }   
}