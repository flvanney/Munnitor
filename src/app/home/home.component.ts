import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../services/prueba.service';
import { NOTI, notificacion, NotificacionesComponent } from '../notificaciones/notificaciones.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PruebaService],
})
export class HomeComponent implements OnInit {

  noti: notificacion[] = null;

  constructor(
    private pruebaService : PruebaService) {
   }


  ngOnInit(): void {
    this.noti = NOTI;
    this.iniciar();
  }

  iniciar(){
    this.pruebaService.getDatosGanado()
    .subscribe(data => {
      console.log("----------------------------------->",data)
    });
    this.pruebaService.getUsers()
    .subscribe(data => {
      console.log("-----------------------------------||||---->",data)
    });
  }

}
