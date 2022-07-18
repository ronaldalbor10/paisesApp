import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent  {

  termino:string="Hola mundo";

  constructor() { }

  buscar(){
    console.log(this.termino); 
  }

}
