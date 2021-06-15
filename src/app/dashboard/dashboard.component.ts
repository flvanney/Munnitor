import { Component, OnInit } from '@angular/core';

import { MoonitorService } from '../services/moonitor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MoonitorService],
})
export class DashboardComponent implements OnInit {

  vacas: any[] = [];



  constructor(private moonitorService : MoonitorService) { }

  ngOnInit(): void {
    this.iniciar();
  }

  iniciar(){
  this.moonitorService.getGanadoPrincipal()
  .subscribe(data => {
    for(let d of data){
      if(d['temperatura'] !== undefined && d['pasos'] !== 0 && d['pasos'] !== undefined  ){
        this.vacas.push(d);
      }
    }
  });

  this.moonitorService.getDatosGanado()
  .subscribe(data => {
    console.log("----------------------------------->",data)
  });


}



    /*this.pruebaService.getUsers()
    .subscribe(data => {
      console.log("-----------------------------------||||---->",data)
    });
    this.pruebaService.getGanadoPorEmpresa()
    .subscribe(data => {
      console.log("--------------EMPRESA---->",data)
    });*/

}


/*
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
]*/
