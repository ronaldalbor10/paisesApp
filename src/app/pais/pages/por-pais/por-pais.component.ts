import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent  {

  termino:string="Hola mundo";
  hayError:boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(){
    this.hayError=false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next:(resp) => {
          
          console.log(resp);
      },
      error: (err)=>{
        this.hayError = true;
        console.log('Error');
          console.log(err);
      }
    }); 
  }

}
