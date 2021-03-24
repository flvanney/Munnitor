import { Component, OnInit } from '@angular/core';
import { NOTI, notificacion, NotificacionesComponent } from '../notificaciones/notificaciones.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noti: notificacion[] = null;
  constructor() { }

  ngOnInit(): void {
    this.noti = NOTI;
  }

}
