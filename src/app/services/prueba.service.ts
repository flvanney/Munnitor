import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})
export class PruebaService{

    constructor(private http: HttpClient){}

    getDatosGanado():Observable<any>{
        return this.http.get<any>('/ganado/list-all');
    }
    getUsers():Observable<any>{
        return this.http.get<any>('/users/login');
    }


}