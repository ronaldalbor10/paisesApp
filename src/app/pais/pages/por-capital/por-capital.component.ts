import { Component } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent  {

  termino:string="";
  hayError:boolean = false;

  paises:PaisInterface[] =[];

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError=false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCaital(this.termino)
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


 

}
