import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InformesComponent } from './informes/informes.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    InformesComponent,
    NotificacionesComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'notificaciones', component: NotificacionesComponent},
      {path: 'informes', component: InformesComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '**', component: Error404Component},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
