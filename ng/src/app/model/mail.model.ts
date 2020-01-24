import { Injectable } from "@angular/core";
export class MailModel{
  constructor(
    public Nombre?: string,
  public Email?: string,
  public Telefono?: string,
  public Message?: string){}
}