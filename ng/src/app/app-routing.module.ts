import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
const routes: Routes = [
    { path: 'route_usuarios', component: UserComponent }
  ];    
//  imports: [ RouterModule.forRoot(routes) ],
@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}