import { Component, OnInit } from '@angular/core';
import { notificacion } from '../notificaciones/notificaciones.component';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {

  listaganado=listaganado;

  constructor() { }

  ngOnInit(): void {
  }

}
export interface ganado{
  id: number,
  cabezaGanado: string,
  notificaciones: notificacion[],
}

export var listaganado: ganado[]=[
  {id:1, cabezaGanado:"CG142379", notificaciones:[{id:1, nombre:"Cambio de temperatura", cabezaGanado:"CG142379", alerta:"La temperatura cayo a 35º", fueLeida: false}]},
  {id:2, cabezaGanado:"CG6854864", notificaciones:[{id:2, nombre:"Falta de movilidad", cabezaGanado:"CG6854864",alerta:"El individuo se ha movilizado 1500 metros menos que el estandar", fueLeida: false},{id:3, nombre:"Alerta de alimentacion", cabezaGanado:"CG6854864",alerta:"El individuo no ha entrado al comedero en 24 hs", fueLeida: false}]},
  {id:3, cabezaGanado:"CG41239847", notificaciones:[{id:4, nombre:"Cambio de temperatura", cabezaGanado:"CG41239847", alerta:"La temperatura subio a 39º", fueLeida: true}]}
];
