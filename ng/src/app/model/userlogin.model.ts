import { Injectable } from "@angular/core";
export class UserLoginModel{
  constructor(
    public UserName?:string,
  public Password?: string
  ){}
}
export class LoginModel{
  constructor(
  public UserId?:string,
  public Token?: string,
  public LastLogin?: Date
  ){}
}