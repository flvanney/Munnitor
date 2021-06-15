import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.css']
})
export class PasosComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}],
      yAxes: [{
        ticks: {
        min: 150,
        max: 50,
        }
      }] }
  };

  public barChartLabels: Label[] = PasosComponent.fecha;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { label: 'Pasos por dia',
      data: PasosComponent.datos,
      borderColor: "#000",
      backgroundColor:"#868e96",
      hoverBackgroundColor:"#212529"

    },
  ];

  constructor() { }
  static datos: number[] = [86, 92, 105, 114, 106, 98, 109];
  static fecha: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  ngOnInit(): void {
  }

}
