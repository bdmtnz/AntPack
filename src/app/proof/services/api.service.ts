import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //PARA AGILIZAR SE RECIBIÓ EN UN ANY, PERO HA DE CREARSE UN MODELO QUE RECIBA LOS DATOS
  get():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }

}
