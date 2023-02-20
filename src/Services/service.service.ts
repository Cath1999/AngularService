import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from 'src/Models/persona';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {

 

  constructor(private http: HttpClient) {}

  Url = 'http://localhost:8080/Ejemplo01/personas';

  //methods
 
  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
}
