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
        return this.http.get<any>('http://localhost:8080/ganado/principal?idTambo=2&idEmpresa=1');
    }

    getGanado(vaca: string):Observable<any> {
      let url = `http://localhost:8080/ganado/${vaca}`;
      return this.http.get<any>(url);
    }


    //getGanadoPorEmpresa():Observable<any>{
    //    return this.http.get<any>('/ganado/verGanadoEmpresa/1');
    //}


}
