import { Injectable } from "@angular/core";
import { UserModel } from './model/user.model'
import { SubdominioModel } from './model/subdominio.model'
import { LoginModel } from './model/login.model'
import { Result } from './VModel/Result';
import { HttpParams } from '@angular/common/http';
@Injectable()
export class Globals {
  applicationName: string = 'Se vende casa';
  applicationUser: UserModel;
  applicationSubdominio: SubdominioModel;
  applicationLoginResult: Result;
  applicationHttpParams:HttpParams;
  applicationHost: string; 
  applicationLocalHost: string = 'localhost:3003';
}

export enum CrudActions {
    Select,
    SelectById,
    Insert,
    Update,
    View,
    SelectLikeName,
    Delete
}
