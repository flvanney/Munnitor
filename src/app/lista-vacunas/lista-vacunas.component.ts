import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-vacunas',
  templateUrl: './lista-vacunas.component.html',
  styleUrls: ['./lista-vacunas.component.css']
})
export class ListaVacunasComponent implements OnInit {
  vac=VAC;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface vacuna{
  id:number;
  nombre: string;
  fecha: string;
  descripcion: string;
}

export var VAC: vacuna[]=[
  {id:1, nombre:"vacuna1", fecha:"24/7/20", descripcion:"vacuna numero uno, necesita refuerzo"},
  {id:2, nombre:"vacuna2", fecha:"25/7/20", descripcion:"vacuna numero uno, necesita refuerzo"},
  {id:3, nombre:"vacuna3", fecha:"26/7/20", descripcion:"vacuna numero uno, necesita refuerzo"},
  {id:4, nombre:"vacuna4", fecha:"27/7/20", descripcion:"vacuna numero uno, necesita refuerzo"}
];
