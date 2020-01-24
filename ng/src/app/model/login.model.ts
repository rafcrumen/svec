export class LoginResult //extends NodeResult 
{
  recordsets: LoginModel[];
  recordset: LoginModel[];
  output: any;
  rowsAffected: number[];
}

export class LoginModel{
  constructor(
    public  id?: number,
    public userId?: number){}
}