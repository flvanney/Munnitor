import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  noti = NOTI;
  constructor() { }

  ngOnInit(): void {
  }

  actualizarVista(notificacion){
    notificacion.fueLeida = true;
  }
}

export interface notificacion{
  id: number;
  nombre: string;
  cabezaGanado: string;
  alerta: string;
  fueLeida: boolean;
}

export var NOTI: notificacion[] = [
  {id:1, nombre:"Cambio de temperatura", cabezaGanado:"CG142379", alerta:"La temperatura cayo a 35º", fueLeida: false},
  {id:2, nombre:"Falta de movilidad", cabezaGanado:"CG6854864",alerta:"El individuo se ha movilizado 1500 metros menos que el estandar", fueLeida: false},
  {id:3, nombre:"Cambio de temperatura", cabezaGanado:"CG41239847", alerta:"La temperatura subio a 39º", fueLeida: true}
];

