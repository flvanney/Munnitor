import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-carga-ganado',
  templateUrl: './carga-ganado.component.html',
  styleUrls: ['./carga-ganado.component.css']
})
export class CargaGanadoComponent implements OnInit {

  formularioVaca = new FormGroup({
      sexo: new FormControl(''),
      cantServidas: new FormControl(''),
      peso: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      descripcion: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  cargarFormulario() {
    console.warn(this.formularioVaca.value);
  }
}
