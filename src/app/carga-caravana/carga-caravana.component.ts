import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carga-caravana',
  templateUrl: './carga-caravana.component.html',
  styleUrls: ['./carga-caravana.component.css']
})
export class CargaCaravanaComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  cargarFormulario() {
    console.warn(this.formularioCaravana.value);
  }
}
