import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url:string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<PaisInterface[]>{
    const url:string = `${this.api_url}/name/${termino}`;
    return this.http.get<PaisInterface[]>( url );
  }
}
