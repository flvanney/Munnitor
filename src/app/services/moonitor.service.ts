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
        return this.http.get<any>('/ganado/principal?idTambo=1&idEmpresa=1');
    }
    //getGanadoPorEmpresa():Observable<any>{
    //    return this.http.get<any>('/ganado/verGanadoEmpresa/1');
    //}


}