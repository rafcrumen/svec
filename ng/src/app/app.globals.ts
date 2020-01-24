import { Injectable } from "@angular/core";
import { UserModel } from './model/user.model'
import { SubdominioModel } from './model/subdominio.model'
import { LoginModel } from './model/login.model'
@Injectable()
export class Globals {
  applicationName: string = 'Se vende casa';
  applicationUser: UserModel;
  applicationSubdominio: SubdominioModel;
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
