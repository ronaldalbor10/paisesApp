import { Component } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import {  Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `li { cursor: pointer}`
  ]
})
export class PorPaisComponent  {

  termino:string="";
  hayError:boolean = false;

  paises:PaisInterface[] =[];

  paisesSugeridos: PaisInterface[] = [];
  mostrarSugeridos:boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    
    this.mostrarSugeridos=false;
    this.hayError=false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next:(paises) => {
          
          console.log(paises);
          this.paises = paises;
      },
      error: (err)=>{
        this.hayError = true;
        this.paises = [];
        console.log('Error');
          console.log(err);
      }
    }); 
  }


  sugerencia(termino:string){
    this.hayError=false;
    this.termino = termino;
    this.mostrarSugeridos= true;

    this.paisService.buscarPais(termino)
        .subscribe({
                  next: (paises) => this.paisesSugeridos = paises.splice(0,4),
                  error: (err)=> this.paisesSugeridos = []
        });
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
    
  }

}
