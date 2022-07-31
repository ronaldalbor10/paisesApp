import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PaisInterface } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url:string = "https://restcountries.com/v3.1";

  get httParams(){
    return new HttpParams()
    .set('fields','name,capital,alpha,population,flags,cca3');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino:string):Observable<PaisInterface[]>{
    const url:string = `${this.api_url}/name/${termino}`;
    return this.http.get<PaisInterface[]>( url, {params: this.httParams} ); 
  }

  buscarCaital(termino:string):Observable<PaisInterface[]>{
    const url:string = `${this.api_url}/capital/${termino}`;
    return this.http.get<PaisInterface[]>( url, {params: this.httParams} ); 
  }

  paisPorCodigo(id:string):Observable<PaisInterface>{
    const url:string = `${this.api_url}/alpha/${id}`;
    return this.http.get<PaisInterface>( url ); 
  }

  PaisesPorRegion(region:string):Observable<PaisInterface[]>{
    
    
    const url:string = `${this.api_url}/region/${region}`;
    return this.http.get<PaisInterface[]>( url, {params: this.httParams} )
            .pipe(
              tap(console.log)
            );
  }
}
