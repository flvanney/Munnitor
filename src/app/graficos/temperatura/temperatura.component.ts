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
    { data: TemperaturaComponent.datos, label: 'Temperatura en grados' },
  ];

  constructor() { }
  static datos: number[] = [37.5, 38, 37, 38, 36, 37, 40];
  static fecha: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  ngOnInit(): void {
  }
}
