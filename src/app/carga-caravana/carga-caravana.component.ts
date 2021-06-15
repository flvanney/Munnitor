import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


import { MoonitorService } from '../services/moonitor.service';

@Component({
  selector: 'app-carga-caravana',
  templateUrl: './carga-caravana.component.html',
  styleUrls: ['./carga-caravana.component.css'],
  providers: [MoonitorService],
})
export class CargaCaravanaComponent implements OnInit {

  caravana : Caravana;

  formularioCaravana = new FormGroup({
    idInternacional: new FormControl(''),
    CUIG: new FormControl(''),
    colorCaravana: new FormControl(''),
    digitoVerificador: new FormControl(''),
    numeroManejo: new FormControl(''),
    numeroRENSPA: new FormControl(''),
    marcaFechaProduccion: new FormControl(''),
    fechaImpresion: new FormControl(''),
    numeroImpresion: new FormControl(''),
    rangoImpresion: new FormControl(''),
  })

  constructor(private moonitorService : MoonitorService) { }

  ngOnInit(): void {


  }

  cargarFormulario() {
    this.caravana = this.formularioCaravana.value
  }

  enviar(){
  let dateNow = new Date();
  this.cargarFormulario();
  this.moonitorService.cargarCaravana(this.caravana);
  console.log("-------------------->",this.caravana);}
   
}

export interface Caravana{
  id:"",
  idInternacional:string,
  CUIG: string,
  colorCaravana: string,
  digitoVerificador: string,
  numeroManejo: string,
  numeroRENSPA: string,
  marcaFechaProduccion:string,
  fechaImpresion: string,
  numeroImpresion: string,
  rangoImpresion: string,
  }
