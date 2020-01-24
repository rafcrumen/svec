export class UserModel {
  //constructor  (
    public  id?: number;
    public username?: string;
    public nombre?: string;
    public email?: string;
    public email1?: string;
    public telefono?: string;
    public password?: string;
    public activo?: boolean;
    public subdominiov: string;
    public subdominioa: string;
    public Crud?: number;
}
export class UserResult //extends NodeResult 
{
  recordsets: UserModel[];
  recordset: UserModel[];
  output: any;
  rowsAffected: number[];
}