import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';
import { ListaVacunasComponent } from './lista-vacunas/lista-vacunas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemperaturaComponent } from './graficos/temperatura/temperatura.component';
import { CargaGanadoComponent } from './carga-ganado/carga-ganado.component';
import { CargaCaravanaComponent } from './carga-caravana/carga-caravana.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotificacionesComponent,
    Error404Component,
    ListaVacunasComponent,
    DashboardComponent,
    TemperaturaComponent,
    CargaGanadoComponent,
    CargaCaravanaComponent
  ],
  imports: [
    ChartsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'notificaciones', component: NotificacionesComponent},
      {path: 'home', component: HomeComponent},
      {path: 'vacuna', component: ListaVacunasComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'cargaGanado', component: CargaGanadoComponent},
      {path: 'cargaCaravana', component: CargaCaravanaComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: Error404Component},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
