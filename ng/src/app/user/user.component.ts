import { Component, OnInit } from '@angular/core';
import { UserResult } from '../model//user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'route_usuarios',
  templateUrl: './user.component.html'  
})
export class UserComponent implements OnInit{
  public title = 'app';
  public modelo: UserResult;
  constructor(private service: UserService) {}
  ngOnInit(){
    this.getIntrvalos();
  }
  getIntrvalos()  {
    //this.service.getIntervalos().subscribe(resultado => this.modelo = resultado);
  }
}
