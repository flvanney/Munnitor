import { Component, OnInit } from '@angular/core';
import { MoonitorService } from '../services/moonitor.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informe-individuo',
  templateUrl: './informe-individuo.component.html',
  styleUrls: ['./informe-individuo.component.css']
})
export class InformeIndividuoComponent implements OnInit {

  datoVaca: any[] = [];
  id;

  constructor(private moonitorService:MoonitorService, private _Activatedroute:ActivatedRoute) { }
  sub;
  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
       this.id = params.get('id');
       this.datosAnimal(this.id);
      });}


  datosAnimal(vaca: string){
    this.moonitorService.getGanado(vaca)
    .subscribe(data => {
      this.datoVaca=data;
      console.log("-------------datosdelavaca----------------->",this.datoVaca);
    });
  }
}
