import { Component, OnInit } from '@angular/core';
import { PaisInterface } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
    button:{
      margin:10px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  //regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';

  paises:PaisInterface[] =[];

  constructor(private paisService: PaisService) { }


  ngOnInit(): void {
  }

  getClassCSS(region:string):string{
    return (region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary';
  }

  activarRegion(region:string){

      if(region === this.regionActiva) {return;}
      this.regionActiva = region;
      this.paises =[];
      //Cargar tabla de paises con la informacion de paises de la region seleccionada
      this.paisService.PaisesPorRegion(region)
      .subscribe(paises => this.paises = paises)  
      
      
  }


}


