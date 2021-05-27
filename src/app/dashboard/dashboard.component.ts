import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vaca=VACA;
  constructor() { }

  ngOnInit(): void {
  }

}

export interface vaca{
  id: number;
  nombre: string;
  cabezaGanado: string;
  ultimaTemp: number;
  tempUltimas24: number[];
  cantPasos: number;
}
export let VACA: vaca[]=[
  {id: 1, nombre: "Vaca", cabezaGanado:"CG1684064", ultimaTemp: 37, tempUltimas24: [37,37,38,35,35,37,37], cantPasos:5440},
  {id: 2, nombre: "Vaco 2", cabezaGanado:"CG4215126", ultimaTemp: 39, tempUltimas24:[39,39,39,38,39,39,38,37], cantPasos:7637}
]
