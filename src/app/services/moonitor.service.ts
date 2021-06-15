import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class MoonitorService{

    constructor(private http: HttpClient){}

    getDatosGanado():Observable<any>{
        return this.http.get<any>('/ganado/list-all');
    }
    getGanadoPrincipal():Observable<any>{
        return this.http.get<any>('/ganado/principal?idTambo=2&idEmpresa=1');
    }

    getGanado(vaca: string):Observable<any> {
      let url = `/ganado/${vaca}`;
      return this.http.get<any>(url);
    }

    cargarCaravana(caravana : Caravana){
      return this.http.post('caravana/cargarDatos',caravana);
    }


}
export interface Caravana{
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