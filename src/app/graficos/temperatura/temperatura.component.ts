import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent implements OnInit {
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}],
      yAxes: [{
        ticks: {
        min: 34,
        max: 45,
        }
      }] }
  };

  public lineChartLabels: Label[] = TemperaturaComponent.fecha;
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;

  public lineChartData: ChartDataSets[] = [
    { label: 'Temperatura en grados',
      data: TemperaturaComponent.datos,
      borderColor: "#343a40",
      pointBackgroundColor: "#343a40",
      backgroundColor:"#868e96",
      pointHoverBorderColor:"#000",
      lineTension:0
    },
  ];

  constructor() { }
  static datos: number[] = [37.5, 38, 37, 38, 36, 37, 40];
  static fecha: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  ngOnInit(): void {
  }
}

