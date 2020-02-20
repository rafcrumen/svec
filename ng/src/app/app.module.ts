import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { NavLogedComponent } from './nav/navloged.component';
import { FooterComponent } from './footer/footer.component';
import { Globals } from './app.globals';
import { GirarComponent } from './girar/girar.component';
import { SubdominioComponent } from './subdominio/subdominio.component';
import { RegistroUsuarioComponent } from './registrousuario/registrousuario.component';
import { DominioprivadoComponent } from './dominios/dominio-privado.component';
import { DominiopublicoComponent } from './dominios/dominio-publico.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { MailComponent } from './mail/mail.component';
import { FilterListPipe } from './pipes/filter.list.pipe';
import { FotoEditComponent } from './fotos/foto-edit.component';
import { FotolistaComponent } from './fotolista/fotolista.component';
import { UploaderComponent } from './uploader/uploader.component';
import { DetalleEditComponent } from './detalle/detalle-edit.component';
import { DetalleFotoComponent } from './detalle-foto/detalle-foto.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleViewComponent } from './detalle-view/detalle-view.component';
import { ModeloComponent } from './modelo/modelo.component';
import { ModeloFotoComponent } from './modelo-foto/modelo-foto.component';
import { ViewComponent} from './view/view.component';
import { ModeloEditComponent } from './modelo/modelo-edit.component';
import { HomeButtonComponent } from './homebutton/home-button.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import {CdkStepperModule} from '@angular/cdk/stepper';


const routes: Routes = [
  { path: "route_home", component: HomeComponent },  
  { path: "signup", component: RegistroUsuarioComponent },
  { path: "login", component: LoginComponent },  
  { path: "subdominio", component: SubdominioComponent },  
  { path: "modelo", component: ModeloComponent },  
  { path: "mail", component: MailComponent }
];    

@NgModule({
  declarations: [
    GirarComponent,
    DominioprivadoComponent,
    DominiopublicoComponent,
    FotoEditComponent,
    FotolistaComponent,
    UploaderComponent,
    DetalleEditComponent,
    DetalleComponent,
    DetalleFotoComponent,
    DetalleViewComponent,
    ModeloEditComponent,
    ModeloComponent,
    ModeloFotoComponent,
    ViewComponent,
    SubdominioComponent,
    RegistroUsuarioComponent,
    UserComponent,
    LoginComponent,
    MailComponent,
    HomeComponent,
    NavComponent,
    NavLogedComponent,
    FooterComponent,
    AppComponent,
    HomeButtonComponent,
    FilterListPipe
  ],
  imports: [
    RouterModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    CdkStepperModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,     
    RouterModule.forRoot(routes),
     BrowserAnimationsModule
  ],  
  exports: [ 
    RouterModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);
